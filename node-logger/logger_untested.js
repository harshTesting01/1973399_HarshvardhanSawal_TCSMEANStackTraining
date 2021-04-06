let obj = require("readline-sync");
let fs = require("fs");

module.exports = {
    loggr(){
        
        let fname = obj.question("Enter Firstname: ");
        let lname = obj.question("Enter Lastname: ");
        let gender = obj.question("Enter Gender: ");
        // let d = new Date();
        // console.log(d);
    
        let emp = new Object();
        emp["fname"] = fname;
        emp["lname"] = lname;
        emp["gender"] = gender;
        emp["date"] = new Date().toLocaleDateString();
        emp["time"] = new Date().toLocaleTimeString();
        let empArr = new Array();
        empArr.push(emp);
        let jsonData = JSON.stringify(empArr);
        fs.writeFile("employee.json", jsonData);
        // fs.writeFile("employee.json", jsonData, {'flag': 'a'}, function(err){
        //     if(err){
        //         console.log(err);
        //     }
        // });
        console.log('file written');
    }
}
