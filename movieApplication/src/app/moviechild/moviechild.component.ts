import { Component, Input, OnInit, Output , EventEmitter} from '@angular/core';
import { emit } from 'process';
import {Movie } from '../movie';
@Component({
  selector: 'app-moviechild',
  templateUrl: './moviechild.component.html',
  styleUrls: ['./moviechild.component.css']
})
export class MoviechildComponent implements OnInit {

  @Input()movie:Movie

  constructor() { }

  ngOnInit() {
    
  }
  
}
