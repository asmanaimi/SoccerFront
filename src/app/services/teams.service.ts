import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  teamsUrl="http://localhost:8086/teams"

  constructor(private bostagi: HttpClient) { }
  
  getAllTeams(){
    return this.bostagi.get<{data:any}>(this.teamsUrl)
      }
     
      addTeam(team:any) {
        return this.bostagi.post<{data:any}>(this.teamsUrl,team)
    
      }
      getTeamById(id:number) {
        return this.bostagi.get<{data:any}>(`${this.teamsUrl}/${id}`)
    
      }
     
      updateTeam(team:any) {
        return this.bostagi.put<{data:any}>(`${this.teamsUrl}/${team.id}`,team)
      }
      deleteTeam(id:number) {
        
        return this.bostagi.delete<{data:any}>(`${this.teamsUrl}/${id}`)
    
      }
}
