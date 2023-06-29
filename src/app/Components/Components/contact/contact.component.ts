import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
x=0;
  constructor() { }

  ngOnInit() {
  /*  console.log("here page contact");
    setTimeout(() => {
      this.x="tester x" 
    }, 3000);*/
 
  }
  add()
  {
   
this.x=this.x+1;
  }

}
