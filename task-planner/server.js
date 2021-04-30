let http = require("http");
let url = require("url");
let fs = require("fs");
let port = 9091;
let addInfo = `
    <h4>Add Task</h4>
    <form action="/submit" method="get">
        <label>UserName</label>
        <input type="text" name="user"/><br/>
        <label>Password</label>
        <input type="password" name="pass"/><br/>
        <input type="submit" value="Sign In!"/>
        <input type="reset" value="reset"/>
    </form>

    <h4>Delete Task</h4>
    <form action="/delete" method="get">
        <label>Task ID</label>
        <input type="text" name="taskid"/><br/>
        <input type="submit" value="Delete"/>
    </form>

`;

let deleteInfo = `
    <form action="/submit" method="get">
        <label>UserName</label>
        <input type="text" name="user"/><br/>
        <label>Password</label>
        <input type="password" name="pass"/><br/>
        <input type="submit" value="Sign In!"/>
        <input type="reset" value="reset"/>
    </form>
`;
let server = http.createServer((req,res)=> {
    //console.log(url.parse(req.url,true))
    var pathInfo = url.parse(req.url,true).pathname;
    if(req.url=="/"){
        res.setHeader("content-type","text/html");  // by default data consider as a html 
        res.end(addInfo);
    }else if(pathInfo=="/submit"){
        //res.setHeader("content-type","text/html");  // by default data consider as a html 
        //res.end(deleteInfo);
        var data = url.parse(req.url,true).query;
        if(data.user=="Ajay" && data.pass=="Kumar"){
            res.write("Successfully Login!");
        }else {
            res.write("Failure try once again");
        }
        res.end();
    }
})
server.listen(port,()=>console.log(`running on port num ${port}`));