var sayHello = function(name){
    return "Welcome "+name;
}

document.write(sayHello("Raj"));


//Arrow function is known as anonymous function
//returns value by default

var sayHi = (name) => "Welcome "+name;
document.write(sayHi("Ravi"));

var addNumber1 = (a,b) => a+b;

var findLargest = (a,b) => {
    if (a>b){
        return a;
    }
    else{
        return b;
    }
}