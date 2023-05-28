import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { HttpHeaders } from "@angular/common/http";

const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      Authorization: 'my-auth-token'
    })
};
  

@Injectable()
export class TrainingService {
    baseUrl: string = 'http://127.0.0.1:8000'

    headers = new HttpHeaders()
    constructor(private http: HttpClient) { 

    }

    sendPost(body: any): Observable<any> {
      return this.http.post(`${this.baseUrl}/training`, body,{responseType: 'text'});
    }

};