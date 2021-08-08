import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css']
})
export class LifecycleComponent implements OnInit,OnChanges,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked{
  @Input() message=''
  

  constructor() { 
    console.log('in constructor' +this.message)
  }
  ngOnChanges(){
    console.log('on change '+this.message)
  }

  ngDoCheck(){
    console.log('do check' +this.message);
    
  }
  ngOnInit() {
    console.log('on init' +this.message)
  }

  ngAfterContentInit(){
 console.log('after content init '+this.message)
  }
  ngAfterContentChecked(){
 console.log('after content checked ',this.message )
  }
  ngAfterViewInit(){
 console.log('after view init :'+this.message)
  }
  ngAfterViewChecked(){
    console.log('after view checked'+this.message)
  }
}
