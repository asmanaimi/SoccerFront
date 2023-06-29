import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './Components/ComponentAuth/login/login.component';
import { SignupComponent } from './Components/ComponentAuth/signup/signup.component';
import { BlogComponent } from './Components/Components/blog/blog.component';
import { ContactComponent } from './Components/Components/contact/contact.component';
import { AddMatchComponent } from './Components/Components/folderMatches/add-match/add-match.component';
import { MatchesComponent } from './Components/Components/folderMatches/matches/matches.component';
import { TableMatchComponent } from './Components/Components/folderMatches/table-match/table-match.component';
import { AddPlayerComponent } from './Components/Components/folderPlayers/add-player/add-player.component';
import { PlayersComponent } from './Components/Components/folderPlayers/players/players.component';
import { TablePlayerComponent } from './Components/Components/folderPlayers/table-player/table-player.component';
import { AddTeamComponent } from './Components/Components/folderTeam/add-team/add-team.component';
import { TableteamComponent } from './Components/Components/folderTeam/tableteam/tableteam.component';
import { TeamsComponent } from './Components/Components/folderTeam/teams/teams.component';
import { HomeComponent } from './Components/Components/home/home.component';



const routes: Routes = [

  
  {path:"",component :HomeComponent},
  {path:"view",component :TableMatchComponent},
  {path:"players",component :PlayersComponent},
  {path:"table-player",component :TablePlayerComponent},
  {path:"table-team",component :TableteamComponent},
  {path:"teams",component :TeamsComponent},
  {path:"all-Matches",component :MatchesComponent},
  {path:"add-match",component :AddMatchComponent},
  {path:"add-match/:id",component :AddMatchComponent},
  {path:"add-player",component :AddPlayerComponent},
  {path:"add-player/:id",component :AddPlayerComponent},
  {path:"add-team/:id",component :AddTeamComponent},
  {path:"add-team",component :AddTeamComponent},

  {path:"login",component :LoginComponent},
  {path:"signup",component :SignupComponent},
  {path:"blog",component :BlogComponent},

  {path:"contact",component :ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
