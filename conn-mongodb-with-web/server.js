let app = require("express")();
let bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

let port = 9945;
//let i = 1;


app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.html");
});
app.get("/add.html",(req,res)=>{
    res.sendFile(__dirname+"/add.html");
});
app .get("/update.html",(req,res)=>{
    res.sendFile(__dirname+"/update.html");
});
app.get("/delete.html",(req,res)=>{
    res.sendFile(__dirname+"/delete.html");
});



app.post("/addCourse",(req,res)=>{
    let cId = req.body.courseId;
    let cName = req.body.courseName;
    let cDesc = req.body.courseDesc;
    let cCost = req.body.amount;

    //console.log(req.body);


    let mongoClient = require("mongodb").MongoClient;
    let url = "mongodb://localhost:27017"
    mongoClient.connect(url, {useUnifiedTopology: true },(err1,client)=>{
        if(!err1){
            let db = client.db("meanstack");
            db.collection("Product").insertOne({_id:cId, courseID: cId, courseName: cName, courseDescription: cDesc, amount: cCost},(err2,result)=>{
                if(!err2){
                    console.log(result.insertedCount);
                }else {
                    console.log(err2.message);
                }
                client.close();
            });
                
        }
    });
    res.sendFile(__dirname+"/index.html");
});

app.post("/updateCourse",(req,res)=>{
    let cId = req.body.courseId;
    let cCost = req.body.amount;

    //console.log(req.body);


    let mongoClient = require("mongodb").MongoClient;
    let url = "mongodb://localhost:27017";
    mongoClient.connect(url,{ useUnifiedTopology: true },(err1,client)=> {
        if(!err1){
            let db = client.db("meanstack");
            db.collection("Product").updateOne({courseID:cId},{$set:{amount:cCost}},(err2,result)=> {
                if(!err2){
                    // console.log(result);
                    if(result.modifiedCount>0){
                            console.log("Record updated successfully")
                    }else {
                            console.log("Record didn't update");
                    }
                }
                client.close();
            })           
        }
    })
    res.sendFile(__dirname+"/index.html");
});

app.post("/deleteCourse",(req,res)=>{
    let cId = req.body.courseId;

    //console.log(req.body);


    let mongoClient = require("mongodb").MongoClient;
    let url = "mongodb://localhost:27017";
    mongoClient.connect(url,{ useUnifiedTopology: true },(err1,client)=> {
        if(!err1){
            let db = client.db("meanstack");
            db.collection("Product").deleteOne({courseID:cId},(err2,result)=> {
                if(!err2){
                    if(result.deletedCount>0){
                            console.log("Record deleted successfully")
                    }else {
                            console.log("Record not present")
                    }

                }
                client.close();
            })           
        }
    })
    res.sendFile(__dirname+"/index.html");
});

// app.get("/fetch.html",(req,res)=>{
//     const fls = [];
//     let mongoClient = require("mongodb").MongoClient;
//     let url = "mongodb://localhost:27017";
//     mongoClient.connect(url,{ useUnifiedTopology: true },(err1,client)=> {
//         if(!err1){
//             let db = client.db("meanstack");
//             let cursor = db.collection("Product").find();
//             //let cursor = db.collection("Product").find({}); 
//             //console.log(cursor);
//             cursor.each((err2,doc)=> {
//                 if(doc!=null){
//                     //console.log(doc);
//                     fls.push(doc);
//                     // let str = "Course id is "+doc._id+", Course Name is "+doc.courseName+", Course Description: "+doc.courseDescription+", Amount: "+doc.amount;
//                     // console.log(str);
//                     // fls.push(str);
//                     //console.log(fls);
//                 }
//                 client.close();
                
//             });
//             console.log(fls);
//         }
//     });
    
//     res.send(fls);
//     res.end();
// });

app.get("/fetch.html",(req,res)=>{
    let obj = require("mongoose");  //load the module 
    obj.Promise= global.Promise;       // creating the reference. 
    let url = "mongodb://localhost:27017/meanstack";
    const mongooseDbOption ={       // to avoid warning 
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
    obj.connect(url,mongooseDbOption);   //ready to connect 
    let db = obj.connection;    // connected to database. 
    db.on("error",(err)=>console.log(err));
    db.once("open",()=>{

        //Defined the Schema 
        let ProductSchema = obj.Schema({
            _id:String,
            courseId:String,
            courseName:String,
            courseDescription:String,
            amount:Number
        });
        // Creating Model using schema 
        let Product = obj.model("",ProductSchema,"Product");

        // Creating reference using model 
        Product.find({},(err,result)=>{
            if(!err){
                result.forEach(doc=>console.log(doc));
            }
            obj.disconnect();
        })

    })
    
    res.sendFile(__dirname+"/index.html");


});



app.listen(port,()=>console.log(`Server running on port number: ${port} `));