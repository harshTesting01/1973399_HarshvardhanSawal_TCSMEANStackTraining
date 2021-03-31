import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { myObj } from '../jsonobject';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {

  //abc: any = {};
  constructor(public route:Router) { }

  form = new FormGroup({
    username: new FormControl(),
    password: new FormControl(),
  });

  submit() {
    //console.log(this.form.value);
    let obj = this.form.value;
    //console.log(obj.username);
    let creds = localStorage.getItem(obj.username);
    let abc = JSON.parse(creds || '{}');
    //console.log(abc.username);
    if(abc!= null && abc.password == obj.password){
      console.log("logged in successfully");
      this.homepage();
      this.form.reset();
    }
    else{
      console.log("Incorrect creds");
      this.form.reset();
    }
  }

  ngOnInit(): void {
  }
  homepage(){
    
    let obj = this.form.value;
    sessionStorage.setItem("token",obj.username);
    //console.log(sessionStorage.getItem("token"));
    this.route.navigate(["portfolio"]);
  }
  goToSignup(){
    this.route.navigate(["signup"]);
  }
}
