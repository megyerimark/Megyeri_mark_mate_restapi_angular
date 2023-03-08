// Author: Megyeri Márk Máté
// Copyright: 2023, Megyeri Márk Máté
// Group: Szoft II/N
// Date: 2023-03-08
// Github: https://github.com/megyerimark/
// Licenc: GNU GPL

import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-empl',
  templateUrl: './empl.component.html',
  styleUrls: ['./empl.component.scss']
})
export class EmplComponent implements OnInit {

  constructor(private api:ServiceService) { }

  ngOnInit(): void {
    this.getStudents();
    this.getScores();
  
  }

  students!:any;
  getStudents(){
    this.api.getStudents().subscribe({
      next :data => {
        this.students = data;
        console.log(this.students);
      }
    })
  }
  scores!:any;
  getScores(){
    this.api.getScores().subscribe({
      next :data => {
        this.scores = data;
        console.log(this.scores);
      }
    })
  }


  
  }


