import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from 'src/app/password/confirmPwd';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup
  user:any
  test: boolean = true
  constructor(private fb: FormBuilder,private userService:UsersService) { }

  ngOnInit() {
    this.signupForm = this.fb.group(
      {
        firstName: ['', [Validators.minLength(3), Validators.required]],
        lastName: ['', [Validators.minLength(3), Validators.required]],
        email: ['', [Validators.email, Validators.required]],
        password: ['',  Validators.minLength(4)],
      },
     
    )

  }
  signup() {
    this.userService.register(this.signupForm.value).subscribe(
      resp =>{
       
        console.log("here into sign up form", resp);
      
         
    }
      
      );
  }

}
