let obj = require("readline-sync");
let fs = require("fs");

let fname = obj.question("Enter Firstname: ");
let lname = obj.question("Enter Lastname: ");
let gender = obj.question("Enter Gender: ");
let emp = new Object();
emp["fname"] = fname;
emp["lname"] = lname;
emp["gender"] = gender;
emp["date"] = new Date().toLocaleDateString();
emp["time"] = new Date().toLocaleTimeString();
let empArr = new Array();
empArr.push(emp);
let jsonData = JSON.stringify(empArr);
fs.writeFileSync("logs.json", jsonData);
// fs.writeFile("employee.json", jsonData, {'flag': 'a'}, function(err){
//     if(err){
//         console.log(err);
//     }
// });
console.log('file written');

console.log("Below is the written file!");
fs.readFile("logs.json", (err,data)=>{
    if(!err){
        //console.log(data.toString());
        let empString = data.toString();
        console.log(empString);
        // let empJson = JSON.parse(empString);
        // console.log("id is: "+empJson.fname);
    }
});
