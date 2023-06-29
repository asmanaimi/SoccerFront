import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatchesService } from 'src/app/services/matches.service';

@Component({
  selector: 'app-table-match',
  templateUrl: './table-match.component.html',
  styleUrls: ['./table-match.component.css']
})
export class TableMatchComponent implements OnInit {
  matches: any = []
  constructor(private router:Router,private matchesService :MatchesService) { }
 
  ngOnInit() {
    this.getAllMatches()
  }
  getAllMatches() {
    //this.matches = JSON.parse(localStorage.getItem("matches" || '[]'))
    console.log("here matches", this.matches);
   this.matchesService.getAllMatches().subscribe((res)=>this.matches=res
   );
   
  }
  delete(id: number) {
   /* for (let i = 0; i < this.matches.length; i++) {
      if (id === this.matches[i].id) {
        console.log("test id", this.matches[i]);
        this.matches.splice(i, 1)
      }
    }
    localStorage.setItem("matches", JSON.stringify(this.matches))*/
    this.matchesService.deleteMatch(id).subscribe((res)=>{
  this.getAllMatches()
  })
  }
  navigate(id:number)
  {
this.router.navigate(["add-match/"+id]);
  }

}
