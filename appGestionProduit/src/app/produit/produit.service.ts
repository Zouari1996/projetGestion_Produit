import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Produit } from './produit';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  private apiURL = "http://localhost:8000/api/produit/";


  
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
 }

 constructor(private httpClient: HttpClient) { }

 getAll(): Observable<Produit[]> {
  return this.httpClient.get<Produit[]>(this.apiURL)
  .pipe(
    catchError(this.errorHandler)
  )
}

create(produit :Produit): Observable<Produit> {
  console.log(produit)
  
  return this.httpClient.post<Produit>(this.apiURL, JSON.stringify(produit), this.httpOptions)
  
  .pipe(
    catchError(this.errorHandler)
  )
}

find(id :number): Observable<Produit> {
  return this.httpClient.get<Produit>(this.apiURL + id)
  .pipe(
    catchError(this.errorHandler)
  )
}

update(id:number, produit: Produit): Observable<Produit> {
  return this.httpClient.put<Produit>(this.apiURL + id, JSON.stringify(produit), this.httpOptions)
  .pipe(
    catchError(this.errorHandler)
  )
}

delete(id:number){
  return this.httpClient.delete<Produit>(this.apiURL + id, this.httpOptions)
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
