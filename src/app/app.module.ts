import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ColorDirective } from './directive/color.directive';
import { ReversePipe } from './pipe/reverse.pipe';
import { FilterPipe } from './pipe/filter.pipe';
import { HeaderComponent } from './Components/ComponentFix/header/header.component';
import { ContactComponent } from './Components/Components/contact/contact.component';
import { FooterComponent } from './Components/ComponentFix/footer/footer.component';
import { HomeComponent } from './Components/Components/home/home.component';
import { NewsComponent } from './Components/Components/news/news.component';
import { BlogComponent } from './Components/Components/blog/blog.component';
import { PlayersComponent } from './Components/Components/folderPlayers/players/players.component';
import { AddMatchComponent } from './Components/Components/folderMatches/add-match/add-match.component';
import { AddPlayerComponent } from './Components/Components/folderPlayers/add-player/add-player.component';
import { HeroComponent } from './Components/Components/hero/hero.component';
import { LoginComponent } from './Components/ComponentAuth/login/login.component';
import { SignupComponent } from './Components/ComponentAuth/signup/signup.component';
import { MatchesComponent } from './Components/Components/folderMatches/matches/matches.component';
import { BannerComponent } from './Components/ComponentFix/banner/banner.component';
import { MatchComponent } from './Components/Components/folderMatches/match/match.component';
import { TableMatchComponent } from './Components/Components/folderMatches/table-match/table-match.component';
import { TableteamComponent } from './Components/Components/folderTeam/tableteam/tableteam.component';
import { TeamComponent } from './Components/Components/folderTeam/team/team.component';
import { TablePlayerComponent } from './Components/Components/folderPlayers/table-player/table-player.component';
import { AddTeamComponent } from './Components/Components/folderTeam/add-team/add-team.component';
import { PlayerComponent } from './Components/Components/folderPlayers/player/player.component';
import { TeamsComponent } from './Components/Components/folderTeam/teams/teams.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthgGuard } from 'src/authg.guard';
import { LogoutComponent } from './Components/ComponentAuth/logout/logout.component';
import {  authInterceptorProviders } from './services/auth.interceptor.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    NewsComponent,
    ContactComponent,
    BlogComponent,
    PlayersComponent,
    HeroComponent,
    AddMatchComponent,
    AddPlayerComponent,
    LoginComponent,
    SignupComponent,
    MatchesComponent,
    BannerComponent,
    TableMatchComponent,
    MatchComponent,
    PlayerComponent,
    TablePlayerComponent,
    AddTeamComponent,
    TeamsComponent,
    TeamComponent,
    TableteamComponent,
    ColorDirective,
    ReversePipe,
    FilterPipe,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers:[
    authInterceptorProviders


  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

