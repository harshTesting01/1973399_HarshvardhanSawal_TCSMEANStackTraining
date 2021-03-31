var obj1 = [1,2,3,4,5,6]; //creating object using literal style
var obj2 = new Array(1,2,3,4,5,6); //created using new keyword

document.write(obj1);
document.write("<br/>");
document.write(obj2);

for(var i=0;i<obj1.length;i++){
    document.write("<br/>"+obj1[i]);
}

obj2.forEach(dis);
function dis(a){
    document.write("<br/>"+a);
}

obj1.forEach(function(n){
    document.write("<br/>"+n);
})

obj1.forEach(v=>document.write("<br/>"+v));