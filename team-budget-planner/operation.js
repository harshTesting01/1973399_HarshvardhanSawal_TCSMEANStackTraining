var clientObj = [];
var i = 0;

function storeInSession() {
    //let keys = "clientInfo"+i.toString();
    let keys = "clientInfo";
    localStorage.setItem(keys,JSON.stringify(clientObj));
    i++;
}
function retrieveFromSession() {
    
    // for(var j=0;j<=i;j++){
    //     let keys = "clientInfo"+j.toString();
    //     var obj = localStorage.getItem(keys);
    //     console.log(obj);
    // }
    //let keyss = "clientInfo";
    //var obj = localStorage.getItem(keyss);
    //console.log(obj);

    
    insertNewRecord();
}
function onFormSubmit(){
    var data = readFormData();
    //insertNewRecord(data);
    clientObj.push(data);      //in empObj
    console.log(clientObj);
    storeInSession();
    resetData();
    
}

function readFormData() {
    var obj = {}    // empty object
    obj.client = document.getElementById("client").value;
    obj.pname = document.getElementById("projname").value;
    obj.budget = "$"+document.getElementById("budget").value;
    console.log(obj);
    return obj; 
}
function insertNewRecord(){
    let keys = Object.keys(localStorage);
    //console.log(keys)
    //for(let key of keys){
        //console.log("something!");
        var items = JSON.parse(localStorage.getItem(keys));
        for(var x=0;x<Object.keys(items).length;x++){
            console.log(items[x].budget);
            var table = document.getElementById("list")
            var body = table.getElementsByTagName("tbody")[0];
            var newRow = body.insertRow(body.length);  // row created 

            var cell1 = newRow.insertCell(0);          // cell created 
            cell1.innerHTML=items[x].client;                 // value placed 

            var cell2 = newRow.insertCell(1);          // cell created 
            cell2.innerHTML=items[x].pname;                 // value placed

            var cell3 = newRow.insertCell(2);          // cell created 
            cell3.innerHTML=items[x].budget;                 // value placed
        }
        

        //console.log(`${key}: ${localStorage.getItem(key)}`);
    //}
    // var table = document.getElementById("list")
    // var body = table.getElementsByTagName("tbody")[0];
    // var newRow = body.insertRow(body.length);  // row created 

    // var cell1 = newRow.insertCell(0);          // cell created 
    // cell1.innerHTML=data.client;                 // value placed 

    // var cell2 = newRow.insertCell(1);          // cell created 
    // cell2.innerHTML=data.pname;                 // value placed

    // var cell3 = newRow.insertCell(2);          // cell created 
    // cell3.innerHTML=data.budget;                 // value placed

}

function resetData() {
    document.getElementById("client").value="";
    document.getElementById("projname").value="";
    document.getElementById("budget").value="";
}

function resetSession(){
    localStorage.clear();
}

function resetTable(){
    document.getElementById("list").innerHTML = "";
}