import { Component, Input, OnInit } from '@angular/core';
import { MatchesService } from 'src/app/services/matches.service';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {
  matches:any =[]
 
  constructor(private matchesService :MatchesService) { }

  ngOnInit() {
    this.getAllMatches()
  }
 getAllMatches(){
  // this.matches=JSON.parse(localStorage.getItem("matches")|| '[]')
  console.log("here matches", this.matches);
  this.matchesService.getAllMatches().subscribe((res)=>this.matches=res
  );
  
 }
deleteMatch(id:any){
  
    for (let i = 0; i < this.matches.length; i++) {
      if (id === this.matches[i].id) {
        console.log("test id", this.matches[i]);
        this.matches.splice(i, 1)
      }
    }
    localStorage.setItem("matches", JSON.stringify(this.matches))
  
}




}
