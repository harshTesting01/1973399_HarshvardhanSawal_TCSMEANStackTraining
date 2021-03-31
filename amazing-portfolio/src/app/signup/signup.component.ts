import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(public route:Router) { }

  form = new FormGroup({
    fname: new FormControl(),
    lname: new FormControl(),
    username: new FormControl(),
    password: new FormControl(),
  });

  ngOnInit(): void {
  }

  submit() {
    //console.log(this.form.value);
    let obj: any = {};
    let item = this.form.value;
    obj.fname = item.fname;
    obj.lname = item.lname;
    obj.username = item.username;
    obj.password = item.password;
    localStorage.setItem(item.username,JSON.stringify(obj));
    console.log(localStorage.getItem(item.username));
    alert("Successfully Registered!");
    this.form.reset();
    this.route.navigate(["login"]);
  }

  homepage(){
    
    let obj = this.form.value;
    sessionStorage.setItem("token",obj.username);
    console.log(sessionStorage.getItem("token"));
    this.route.navigate(["portfolio"]);
  }

  resetForm(){
    this.form.reset();
  }

}
