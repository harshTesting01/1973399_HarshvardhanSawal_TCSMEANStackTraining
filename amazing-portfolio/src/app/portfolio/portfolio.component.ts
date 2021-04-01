import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  username:string = "<<username>>";
  constructor(public route:Router) { }

  form = new FormGroup({
    contname: new FormControl(),
    phonum: new FormControl(),
  });

  ngOnInit(): void {
    let obj = sessionStorage.getItem("token");
    if(obj!=null){
      //We'll load the data
      let uname = JSON.parse(localStorage.getItem(obj) || '{}');
      this.username = uname.fname;
      console.log("Pass");
    }
    else{
      console.log("Fail");
    }
  }

  submit(){
    let data = this.form.value;
    if(data.contname!=null && data.phonum!=null){
      this.insertNewRecord();
    }
    else{
      this.checkValidation();
    }
    console.log("Hello there");
  }

  insertNewRecord(){
    let data = this.form.value;
    var table: HTMLTableElement = <HTMLTableElement> document.getElementById("contactList")
    var body = table.getElementsByTagName("tbody")[0];
    var newRow = body.insertRow(body.rows.length);  // row created 
   
    var cell1 = newRow.insertCell(0);          // cell created 
    cell1.innerHTML = data.contname;                 // value placed 
   
    var cell2 = newRow.insertCell(1);          // cell created 
    cell2.innerHTML = data.phonum;                 // value placed

    this.form.reset();
   
  }

  checkValidation(){
    let data = this.form.value;
    if(data.contname==null){
      alert("Please enter the Name correctly");
    }
    else if(data.phonum==null){
      alert("Phone Number missing");
    }
    if(data.phonum.toString().length != 9 ){
      alert("Incorrect phone number entered!");
    }
    this.form.reset();
  }

  signOut(){
    sessionStorage.clear();
    this.route.navigate(["login"]);
  }

}
