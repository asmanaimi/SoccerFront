import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
  players:any =[]
 
  constructor() { }

  ngOnInit() {
    this.getAllPlayers()
  }
  getAllPlayers(){
   this.players=JSON.parse(localStorage.getItem("players")|| '[]')
 }
deletePlayer(id:any){
  
    for (let i = 0; i < this.players.length; i++) {
      if (id === this.players[i].id) {
        console.log("test id", this.players[i]);
        this.players.splice(i, 1)
      }
    }
    localStorage.setItem("players", JSON.stringify(this.players))
  
}
}

