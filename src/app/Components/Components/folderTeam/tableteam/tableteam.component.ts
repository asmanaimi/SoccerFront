import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeamsService } from 'src/app/services/teams.service';

@Component({
  selector: 'app-tableteam',
  templateUrl: './tableteam.component.html',
  styleUrls: ['./tableteam.component.css']
})
export class TableteamComponent implements OnInit {

  teams: any = []
  constructor(private router:Router,private teamsService :TeamsService) { }
 
  ngOnInit() {
    this.getAllTeams()
  }
  getAllTeams() {
   /* this.teams = JSON.parse(localStorage.getItem("teams" || '[]'))
    console.log("here teams", this.teams);*/
    this.teamsService.getAllTeams().subscribe((res)=>this.teams=res
    );
  }
  delete(id: any) {
   /* for (let i = 0; i < this.teams.length; i++) {
      if (id === this.teams[i].id) {
        console.log("test id", this.teams[i]);
        this.teams.splice(i, 1)
      }
    }
    localStorage.setItem("teams", JSON.stringify(this.teams))*/
    this.teamsService.deleteTeam(id).subscribe((res)=>{
      this.getAllTeams()
  })
}

  navigate(id:any)
  {
this.router.navigate(["add-team/"+id]);
  }

}

