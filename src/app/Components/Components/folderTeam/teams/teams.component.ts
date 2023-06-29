import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
  teams:any =[]
 
  constructor() { }

  ngOnInit() {
    this.getAllTeams()
  }
  getAllTeams(){
   this.teams=JSON.parse(localStorage.getItem("teams")|| '[]')
 }
deleteTeam(id:any){
  
    for (let i = 0; i < this.teams.length; i++) {
      if (id === this.teams[i].id) {
        console.log("test id", this.teams[i]);
        this.teams.splice(i, 1)
      }
    }
    localStorage.setItem("teams", JSON.stringify(this.teams))
  
}
}

