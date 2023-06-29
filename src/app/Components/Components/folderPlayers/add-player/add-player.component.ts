import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PlayersService } from 'src/app/services/players.service';


@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {
  //variable add form type te3ha formGroup
  addEditForm:FormGroup
  //objet player pour collecter tous les champs
  player:any={}
 id:any={};
 title:string="ADD Player"

  constructor(private Route:Router,private activatedRoute:ActivatedRoute,private playersService :PlayersService) {

   }

   ngOnInit() {
    this.id=this.activatedRoute.snapshot.paramMap.get("id")
    console.log("here id ",this.id);
    if(this.id){
      this.title="Edit Player"
     this.getPlayerById()
    }

  }
  addEditPlayer()
  {
if (this.id) {
     /* let players= JSON.parse(localStorage.getItem("players")|| "[]")
      for (let i = 0; i < players.length; i++) {
       if(players[i].id===Number(this.id))
       {
         players[i]=this.player
       }
       localStorage.setItem("players",JSON.stringify(players));
this.Route.navigate(["table player"]) }   */
this.playersService.updatePlayer(this.player).subscribe((res)=>{
  this.Route.navigate(["table-player"])
 }) 
    } else {
      
      let T=JSON.parse(localStorage.getItem("players")||"[]")
    let playerId= JSON.parse(localStorage.getItem("playerId")||"0")
    this.player.id=playerId

   // T.push(this.player)
 
   this.playersService.addPlayer(this.player).subscribe((res)=>{
    this.Route.navigate(["table-player"]) 
  })
  //  localStorage.setItem("players",JSON.stringify(T));
   localStorage.setItem("playerId",JSON.stringify(playerId+1));
this.Route.navigate(["table-player"])  
    }
  
  }
getPlayerById(){
 /* let players= JSON.parse(localStorage.getItem("players")|| "[]")
for (let i = 0; i < players.length; i++) {
 if(players[i].id===Number(this.id))
 {
   this.player =players[i]
 }
  
}*/
this.playersService.getPlayerById(this.id).subscribe((res)=>
{
  console.log("here into get",res);
  this.player=res;
})

}
}
