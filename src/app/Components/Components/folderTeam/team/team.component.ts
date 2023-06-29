import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  @Input() team:any
  @Output() newEvent =new EventEmitter <any>()
   constructor() { }
 
   ngOnInit() {
   }
   delete(id:any){
     this.newEvent.emit(id);
      }
     
 }
 
