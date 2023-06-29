import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {
  playersUrl="http://localhost:8086/players"

  constructor(private bostagi: HttpClient) { }
  
  getAllPlayers(){
    return this.bostagi.get<{data:any}>(this.playersUrl)
      }
     
      addPlayer(player:any) {
        return this.bostagi.post<{data:any}>(this.playersUrl,player)
    
      }
      getPlayerById(id:number) {
        return this.bostagi.get<{data:any}>(`${this.playersUrl}/${id}`)
    
      }
     
      updatePlayer(player:any) {
        return this.bostagi.put<{data:any}>(`${this.playersUrl}/${player.id}`,player)
      }
      deletePlayer(id:number) {
        
        return this.bostagi.delete<{data:any}>(`${this.playersUrl}/${id}`)
    
      }
}
