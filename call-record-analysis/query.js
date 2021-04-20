let fs = require("fs");
let mongoClient = require("mongodb").MongoClient;
let url = "mongodb://localhost:27017"
mongoClient.connect(url, {useNewUrlParser: true, useUnifiedTopology: true },(err1,client)=>{
if(!err1){
    fs.readFile("call_data.json",(err,data)=> {
        if(!err){
            //console.log(data.toString());
            let empString = data.toString()
            let empJson = JSON.parse(empString);
            let db = client.db("meanstack");
            db.collection("call_log").insertMany(empJson,(err2,result)=>{
                if(!err2){
                    console.log(result.insertedCount+" rows inserted!");
                }else {
                    console.log(err2.message);
                }
                client.close();    
            });
        }
    }); 
    }
});