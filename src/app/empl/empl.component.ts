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
    this.getEmpl();
  }


  
  }

}
