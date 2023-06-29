import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginForm:FormGroup
user:any={};

  constructor(private userService:UsersService ,private route: Router) { }

  ngOnInit() {
  }
login()
{
 

  this.userService.login(this.user).subscribe(
    resp =>{   
     this.userService.saveUserDate;

     console.log("here user",resp);
    } );
    
}
}

