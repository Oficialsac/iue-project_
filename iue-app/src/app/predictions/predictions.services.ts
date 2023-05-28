import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { HttpHeaders } from "@angular/common/http";
import { Values } from "./Values";

const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      Authorization: 'my-auth-token'
    })
};
  

@Injectable()
export class PredictionsService {
    baseUrl: string = 'http://127.0.0.1:8000'

    constructor(private http: HttpClient) { 

    }

    predictValue(values: Values): Observable<Values> {
        return this.http.post<Values>(this.baseUrl+'/predict', values, httpOptions)
    }
};