
import pandas as pd
import numpy as np
import joblib

def train_model_without_categorical(dataframe):
    from sklearn.linear_model import LinearRegression
    from sklearn.model_selection import train_test_split
    from sklearn import metrics
    from sklearn.metrics import mean_squared_error, r2_score
    
    x = dataframe.select_dtypes(exclude='object').iloc[::,:9]
    y = dataframe.price
    
    # Split data
    x_train, x_test, y_train, y_test = train_test_split(x , y, random_state=42)
    
    # Fit model
    
    ln = LinearRegression()
    ln.fit(x_train,y_train)
    
    joblib.dump(ln, "joblib_linear.pkl")



if __name__ == '__main__':
    print('hello world')