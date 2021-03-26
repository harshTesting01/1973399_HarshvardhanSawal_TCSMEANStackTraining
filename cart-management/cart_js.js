var cartObj = [];
var totalCost = 0;

function updateCartSize(){
    document.getElementById("cartsize").innerHTML = cartObj.length;
}

function insertNewArticle(){
    let keys = Object.keys(localStorage);
    console.log(keys);
    var items = JSON.parse(localStorage.getItem(keys));
    for(var x=0;x<Object.keys(items).length;x++){
        insertNewRecord(items[x]);
    }
    //localStorage.clear();
}

function clearValues(){
    cartObj = [];
    updateCartSize();
    localStorage.clear();
}

function storeValues(){
    let keys = "cartInfo";
    localStorage.setItem(keys, JSON.stringify(cartObj));
}

function getValues(){
    //console.log("hello");
    // console.log(cartObj);
    // for(const i in cartObj){
    //     //console.log(`${i}: ${cartObj[i]}`);
    //     insertNewRecord(cartObj[i]);
    // }
    insertNewArticle();
}

function insertNewRecord(data){
    var table = document.getElementById("shoppingList")
    var body = table.getElementsByTagName("tbody")[0];
    var newRow = body.insertRow(body.length);  // row created 
   
    var cell1 = newRow.insertCell(0);          // cell created 
    cell1.innerHTML=data.name;                 // value placed 
   
    var cell2 = newRow.insertCell(1);          // cell created 
    cell2.innerHTML='$'+data.price;                 // value placed

    totalCost += parseInt(data.price);
    document.getElementById("totalValue").innerHTML = '$'+totalCost;
   
   }


function addItem1(){
    var obj = {};    // empty object
    obj.name = document.getElementById("name1").textContent;
    console.log(obj.name);
    obj.price = document.getElementById("price1").textContent;
    console.log(obj.price);
    // document.getElementById("card-container").innerHTML = "";
    console.log(obj);
    cartObj.push(obj);
    console.log(cartObj);
    updateCartSize();
    // storeInSession();
}
function addItem2(){
    var obj = {};    // empty object
    obj.name = document.getElementById("name2").textContent;
    console.log(obj.name);
    obj.price = document.getElementById("price2").textContent;
    console.log(obj.price);
    // document.getElementById("card-container").innerHTML = "";
    console.log(obj);
    cartObj.push(obj);
    console.log(cartObj);
    updateCartSize();
    // storeInSession();
}
function addItem3(){
    var obj = {};    // empty object
    obj.name = document.getElementById("name3").textContent;
    console.log(obj.name);
    obj.price = document.getElementById("price3").textContent;
    console.log(obj.price);
    // document.getElementById("card-container").innerHTML = "";
    console.log(obj);
    cartObj.push(obj);
    console.log(cartObj);
    updateCartSize();
    // storeInSession();
}
function addItem4(){
    var obj = {};    // empty object
    obj.name = document.getElementById("name4").textContent;
    console.log(obj.name);
    obj.price = document.getElementById("price4").textContent;
    console.log(obj.price);
    // document.getElementById("card-container").innerHTML = "";
    console.log(obj);
    cartObj.push(obj);
    console.log(cartObj);
    updateCartSize();
    // storeInSession();
}
function addItem5(){
    var obj = {};    // empty object
    obj.name = document.getElementById("name5").textContent;
    console.log(obj.name);
    obj.price = document.getElementById("price5").textContent;
    console.log(obj.price);
    // document.getElementById("card-container").innerHTML = "";
    console.log(obj);
    cartObj.push(obj);
    console.log(cartObj);
    updateCartSize();
    // storeInSession();
}
function addItem6(){
    var obj = {};    // empty object
    obj.name = document.getElementById("name6").textContent;
    console.log(obj.name);
    obj.price = document.getElementById("price6").textContent;
    console.log(obj.price);
    // document.getElementById("card-container").innerHTML = "";
    console.log(obj);
    cartObj.push(obj);
    console.log(cartObj);
    updateCartSize();
    // storeInSession();
}
function addItem7(){
    var obj = {};    // empty object
    obj.name = document.getElementById("name7").textContent;
    console.log(obj.name);
    obj.price = document.getElementById("price7").textContent;
    console.log(obj.price);
    // document.getElementById("card-container").innerHTML = "";
    console.log(obj);
    cartObj.push(obj);
    console.log(cartObj);
    updateCartSize();
    // storeInSession();
}
function addItem8(){
    var obj = {};    // empty object
    obj.name = document.getElementById("name8").textContent;
    console.log(obj.name);
    obj.price = document.getElementById("price8").textContent;
    console.log(obj.price);
    // document.getElementById("card-container").innerHTML = "";
    console.log(obj);
    cartObj.push(obj);
    console.log(cartObj);
    updateCartSize();
    // storeInSession();
}
function addItem9(){
    var obj = {};    // empty object
    obj.name = document.getElementById("name9").textContent;
    console.log(obj.name);
    obj.price = document.getElementById("price9").textContent;
    console.log(obj.price);
    // document.getElementById("card-container").innerHTML = "";
    console.log(obj);
    cartObj.push(obj);
    console.log(cartObj);
    updateCartSize();
    // storeInSession();
}
