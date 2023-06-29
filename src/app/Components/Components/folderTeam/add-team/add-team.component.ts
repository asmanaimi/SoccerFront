import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PlayersService } from 'src/app/services/players.service';
import { TeamsService } from 'src/app/services/teams.service';

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.css']
})
export class AddTeamComponent implements OnInit {
  addEditForm:FormGroup
  //objet team pour collecter tous les champs
  team:any={}
 id:any={};
 title:string="ADD Team"

  constructor(private Route:Router,private activatedRoute:ActivatedRoute,private teamsService : TeamsService) {

   }

   ngOnInit() {
    this.id=this.activatedRoute.snapshot.paramMap.get("id")
    console.log("here id ",this.id);
    if(this.id){
      this.title="Edit Team"
     this.getTeamById()
    }

  }
  addEditTeam()
  {
if (this.id) {
    /*  let teams= JSON.parse(localStorage.getItem("teams")|| "[]")
      for (let i = 0; i < teams.length; i++) {
       if(teams[i].id===Number(this.id))
       {
         teams[i]=this.team
       }
       localStorage.setItem("teams",JSON.stringify(teams));
this.Route.navigate(["table-team"])    
      }
    }*/
    this.teamsService.updateTeam(this.team).subscribe((res)=>{
      this.Route.navigate(["table-team"])
     })
     
   }
    else {
      
      let T=JSON.parse(localStorage.getItem("teams")||"[]")
    let teamId= JSON.parse(localStorage.getItem("teamId")||"0")
    this.team.id=teamId
    this.teamsService.addTeam(this.team).subscribe((res)=>{
      this.Route.navigate(["table-team"]) 
    })
   // T.push(this.team)
 

   // localStorage.setItem("teams",JSON.stringify(T));
   localStorage.setItem("teamId",JSON.stringify(teamId+1));
//this.Route.navigate(["table-team"])  
    }
  
  }
  getTeamById(){
 /* let teams= JSON.parse(localStorage.getItem("teams")|| "[]")
for (let i = 0; i < teams.length; i++) {
 if(teams[i].id===Number(this.id))
 {
   this.team =teams[i]
 }
  
}*/
this.teamsService.getTeamById(this.id).subscribe((res)=>
{
  console.log("here into get",res);
  this.team=res;
})
}
}

