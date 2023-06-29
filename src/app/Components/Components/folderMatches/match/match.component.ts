import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css']
})
export class MatchComponent implements OnInit {
  @Input() match:any
 @Output() newEvent =new EventEmitter <any>()
  constructor() { }

  ngOnInit() {
  }
  delete(id:any){
    this.newEvent.emit(id);
     }
     compareScore(a:any,b:any)
     {
     if(Number(a)<Number(b))
     {
       return["blue","loss"]
     }
     if (Number(a)>Number(b))
     {
       //tableau index 0,1
       return["green","Win"]
     }
     else{
       return["yellow","Draw"]
     }
     
     
     }  
}
