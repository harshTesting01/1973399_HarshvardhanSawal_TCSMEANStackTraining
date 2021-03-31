//Normal Function
function add(a, b){
    return a+b;
}

document.write("Normal Function <br/>");
document.write(add(100,200));

//expression style function
var sum = function addNumber(a,b){
    return a+b;
}

document.write("<br/>Expression Style Function");
//document.write(addNumber(20,40));
document.write(sum(100,200));


//expression style function without name
var sumOfNumber = function(a,b){
    return a+b;
}
document.write("<br/>Expression Style Function without name");
document.write(sumOfNumber(20,40));


//Call back function
function sayHellow(fname, callback){
    document.write("<br/>Welcome, your name is "+callback(fname));
}

var maleInfo = function(fname){
    return "Mr. "+fname;
}

var femaleInfo = function(fname){
    return "Ms. "+fname;
}

sayHello("Raj", maleInfo);
sayHello("Reeta", femaleInfo);


sayHello("Ajay", function(fname){
    return "Mr. "+fname;
});


