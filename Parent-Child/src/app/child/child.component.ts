import { Component, Input, OnInit ,EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input()parentOne:string
  @Input()parentTwo:string
  @Input()name:string

  @Output()public childEvent1=new EventEmitter()
  @Output()public childEvent2=new EventEmitter()
  public message="This is child component"
  constructor() { }

  ngOnInit() {
  }
  fireEvent(value:string){
    console.log(value)
  this.childEvent1.emit(value)
  }

  sendMessage(){
    this.childEvent2.emit(this.message)
  }

}
