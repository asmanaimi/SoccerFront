import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  @Input() player:any
 @Output() newEvent =new EventEmitter <any>()
  constructor() { }

  ngOnInit() {
  }
  delete(id:any){
    this.newEvent.emit(id);
     }
    
}

