import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlayersService } from 'src/app/services/players.service';

@Component({
  selector: 'app-table-player',
  templateUrl: './table-player.component.html',
  styleUrls: ['./table-player.component.css']
})
export class TablePlayerComponent implements OnInit {

  players: any = []
  constructor(private router:Router,private playersService :PlayersService) { }
 
  ngOnInit() {
    this.getAllPlayers()
  }
  getAllPlayers() {
   /* this.players = JSON.parse(localStorage.getItem("players" || '[]'))
    console.log("here players", this.players);*/
    
    this.playersService.getAllPlayers().subscribe((res)=>this.players=res
    );
  }
  delete(id: any) {
   /* for (let i = 0; i < this.players.length; i++) {
      if (id === this.players[i].id) {
        console.log("test id", this.players[i]);
        this.players.splice(i, 1)
      }
    }
    localStorage.setItem("players", JSON.stringify(this.players))
  }*/
  this.playersService.deletePlayer(id).subscribe((res)=>{
    this.getAllPlayers()
    })
    }
  navigate(id:any)
  {
this.router.navigate(["add-player/"+id]);
  }


 
}


