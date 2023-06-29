import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MatchesService {
matchesUrl="http://localhost:8086/matches"
  constructor(private bostagi: HttpClient) { }


  getAllMatches(){
return this.bostagi.get<{data:any}>(this.matchesUrl)
  }
 
  addMatch(match:any) {
    return this.bostagi.post<{data:any}>(this.matchesUrl,match)

  }
  getMatchById(id:number) {
    return this.bostagi.get<{data:any}>(`${this.matchesUrl}/${id}`)

  }
 
  updateMatch(match:any) {
    return this.bostagi.put<{data:any}>(`${this.matchesUrl}`,match)
  }
  deleteMatch(id:number) {
    
    return this.bostagi.delete<{data:any}>(`${this.matchesUrl}/${id}`)

  }
}
