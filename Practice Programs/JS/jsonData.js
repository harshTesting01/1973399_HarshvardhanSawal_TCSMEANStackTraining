//This is one way to create object
//literal style

var empObject = {id:100, name:"Ramesh", salary:"12000"};

document.write("Employee Object");
document.write("<br/>Id is "+empObject.id)
document.write("<br/>Name is "+empObject.name)
document.write("<br/>Salary is "+empObject.salary)


//convert object into string format
var empString = JSON.stringify(empObject)

//convert string into object format
var empStringtoObject = JSON.parse(empString)