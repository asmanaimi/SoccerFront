import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatchesService } from 'src/app/services/matches.service';

@Component({
  selector: 'app-add-match',
  templateUrl: './add-match.component.html',
  styleUrls: ['./add-match.component.css']
})
export class AddMatchComponent implements OnInit {
  addMatchForm:FormGroup
  match:any={}
 id:any={};
 title:string="ADD Matches"
  constructor(private Route:Router,private activatedRoute:ActivatedRoute, private matchService:MatchesService) {

   }

  ngOnInit() {
    this.id=this.activatedRoute.snapshot.paramMap.get("id")
    console.log("here id ",this.id);
    if(this.id){
      this.title="Edit Matches"
      this.getMatchById()
    }

  }
  addEditMatch()
  {
    if (this.id) {
      /*let matches= JSON.parse(localStorage.getItem("matches")|| "[]")
      for (let i = 0; i < matches.length; i++) {
       if(matches[i].id===Number(this.id))
       {
         matches[i]=this.match
       }
       localStorage.setItem("matches",JSON.stringify(matches));
       this.Route.navigate(["view"])}    */
       this.matchService.updateMatch(this.match).subscribe((res)=>{
       this.Route.navigate(["view"])
      })
      
    } else {
    //  let T=JSON.parse(localStorage.getItem("matches")||"[]")
    let matchId= JSON.parse(localStorage.getItem("matchId")||"0")
    this.match.id=matchId
this.matchService.addMatch(this.match).subscribe((res)=>{
  this.Route.navigate(["view"]) 
})
   // T.push(this.match)
 

   // localStorage.setItem("matches",JSON.stringify(T));
    localStorage.setItem("matchId",JSON.stringify(matchId+1));
   // this.Route.navigate(["view"])  

    }
  
  }
getMatchById(){
 /* let matches= JSON.parse(localStorage.getItem("matches")|| "[]")
for (let i = 0; i < matches.length; i++) {
 if(matches[i].id===Number(this.id))
 {
   this.match =matches[i]
 }
  
}*/
this.matchService.getMatchById(this.id).subscribe((res)=>
{
  console.log("here into get",res);
  this.match=res;
})
}
}
