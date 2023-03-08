// Author: Megyeri Márk Máté
// Copyright: 2023, Megyeri Márk Máté
// Group: Szoft II/N
// Date: 2023-03-08
// Github: https://github.com/megyerimark/
// Licenc: GNU GPL

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  host ="http://localhost:3000/";



  constructor(private http:HttpClient) { }

  getStudents(){

    let  headers = new HttpHeaders({
      'Content-Type':'application/json'
    })

    let httpOption = {
      headers:headers
    }
    let endpoint = "students";
    let url = this.host + endpoint;
    return this.http.get<any>(url, httpOption);
  }
  getScores(){

    let  headers = new HttpHeaders({
      'Content-Type':'application/json'
    })

    let httpOption = {
      headers:headers
    }
    let endpoint = "scores";
    let url = this.host + endpoint;
    return this.http.get<any>(url, httpOption);
  }
}
