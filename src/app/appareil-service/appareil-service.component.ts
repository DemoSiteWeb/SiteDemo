import { Component, OnInit, Injectable } from '@angular/core';
import {AppareilService} from '../services/appareil.service';

@Component({
  selector: 'app-appareil-service',
  templateUrl: './appareil-service.component.html',
  styleUrls: ['./appareil-service.component.scss']
})
export class AppareilServiceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
   
  }
  onSave() {
    this.appareilService.saveAppareilsToServer();
  }
}

