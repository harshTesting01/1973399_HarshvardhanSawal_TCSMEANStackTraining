function dis1(){
    document.write("Normal function<br/>")
}

//call function from same script
//call function from another script
//call function from html using events.

//IFE: Immediate ivoke function expression

(function(){
    document.write("<br/>This is type of IIEF function <br/>");
})();

(()=>document.write("<br/>This is type of IIEF function using arrow function<br/>"))();


//example
((a,b)=>document.write(a+b))(10,20);