import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Categorie } from './categorie';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {
  private apiURL = "http://localhost:8000/api/categorie/";

 httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}


  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Categorie[]> {
   return this.httpClient.get<Categorie[]>(this.apiURL)
   .pipe(
     catchError(this.errorHandler)
   )
 }

 create(categorie:Categorie): Observable<Categorie> {
   return this.httpClient.post<Categorie>(this.apiURL, JSON.stringify(categorie), this.httpOptions)
   .pipe(
     catchError(this.errorHandler)
   )
 }

 find(id:number): Observable<Categorie> {
   return this.httpClient.get<Categorie>(this.apiURL + id)
   .pipe(
     catchError(this.errorHandler)
   )
 }

 update(id:number, categorie:Categorie): Observable<Categorie> {
   return this.httpClient.put<Categorie>(this.apiURL + id, JSON.stringify(categorie), this.httpOptions)
   .pipe(
     catchError(this.errorHandler)
   )
 }

 delete(id:number){
   return this.httpClient.delete<Categorie>(this.apiURL + id, this.httpOptions)
   .pipe(
     catchError(this.errorHandler)
   )
 }

 errorHandler(error:any) {
   let errorMessage = '';
   if(error.error instanceof ErrorEvent) {
     errorMessage = error.error.message;
   } else {
     errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
   }
   return throwError(errorMessage);
 }


}
