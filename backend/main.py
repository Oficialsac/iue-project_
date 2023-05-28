import io
import joblib
import os
import json
import openpyxl
import pandas as pd
import shutil


from fastapi import FastAPI, Depends
from pydantic import BaseModel
from fastapi import FastAPI, File, UploadFile
from fastapi.responses import HTMLResponse
from procesingData import procesingData


from typing import Optional

from enum import Enum
from fastapi.middleware.cors import CORSMiddleware


import pandas as pd
import numpy as np





# Create a path to save files

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
DIRECTORY_PATH = os.path.join(BASE_DIR,'datasets')

# This create a class to my data model and i can create an optional, default or required attribute
    
class RegressionVariables(BaseModel):
    wheelbase: float
    carlength: float
    carwidth: float
    curbweight: int
    enginesize: int
    boreratio: float
    horsepower: int
    citympg: int
    highwaympg: int
    
fake_users = [
    {
        "username": 'username1',
        "password": '123',
        "role": 'admin',
    },
    {
        "username": 'username2',
        "password": '123',
        "role": 'user',
    }
]

class User(BaseModel):
    username: str
    password: str
    admin: Optional[bool]
    
class Item(BaseModel):
    file: Optional[str] = None
    

app = FastAPI()

origins = [
    "http://localhost.tiangolo.com",
    "https://localhost.tiangolo.com",
    "http://localhost",
    "http://localhost:8080",
    "http://localhost:4200"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

#   Variables used to regression model
#	wheelbase	carlength	carwidth	curbweight	enginesize	boreratio	horsepower	citympg	highwaympg

regression_model = joblib.load("../ml_model/notebooks/joblib_linear.pkl")


def getUser(username: str):
    for user in fake_users:
        if user.get('username') == username:
            return user
        
@app.post('/signup')
def signup(formData: User):
    
    fake_users.append({
        "username": formData.username,
        "password": formData.password,
        "role": "user"
    })
      
    

@app.post('/user')
def login(formData: User) -> dict:
    user = getUser(formData.username)
    if user is None:
        return {}
    else:
        if user.get('password') == formData.password:
            return user

            

@app.post("/predict/")
def createPrediction(variables: RegressionVariables):
    try:
        
        if (os.path.exists('../ml_model/notebooks/joblib_linear.pkl')):
        
            var_dict = dict(variables)
            X = pd.DataFrame([list(map(lambda x: var_dict[x], var_dict))],columns=var_dict.keys())
            s = regression_model.predict(X)
            return {"predictions": s[0], "coef_":list(regression_model.coef_), "intercept": regression_model.intercept_}
            
    except Exception as e:
        return {"error": str(e)}
    
    
@app.post("/testing")
def testingData():
    pass
    
@app.post("/training/", response_class=HTMLResponse)
def trainingData(file: UploadFile):
    if (file.content_type == "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" or file.content_type == "text/csv"):
        file_location = saveData(file)
        if( file.content_type == "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"):
            df = pd.read_excel(file_location)
            pr = procesingData(df=df)
            df = pr.imputeData()
            
            os.remove(file_location)
            return  dataframe_to_html(df)
        elif (file.content_type == "text/csv"):
            df = pd.read_csv(file_location)
            pr = procesingData(df=df)
            df = pr.imputeData()
            
            os.remove(file_location)
            return dataframe_to_html(df)
    else: 
        return '<h1> ARCHIVO NO VALIDO <h1/>'
    
    return '<h1> SIN CONTENIDO <h1/>'

# External functions to made routes available
def dataframe_to_html(dataframe: pd.DataFrame):
    return dataframe.head(10).to_html()
    

def saveData(file: UploadFile) -> str:
    file_location = f"dataset/{file.filename}"
        
    with open(file_location,"wb+") as file_obj:
        file_obj.write(file.file.read())
    
    return file_location
    

@app.post("/statistics/")
def statistics():
    pass


@app.post("/processing/")
def processingData():
    pass

