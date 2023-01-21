var http = require("http");

const httpServer = http.createServer(handleServer);


function handleServer(req, res) {
    if(req.url === "./welcome"){
    //     if (req.url === "/welcome"){
    //     res.setHeader("Content-Type", "text/plain");
    //     res.writeHead(200);
    //     res.end("Welcome to Dominos!");
    // }
    res.setHeader("content-type", "text/plain");
    res.writeHead(200);
    res.end("welcome to dominos");
    }
    // if (req.url === "/contact"){
    //     res.setHeader("Content-Type", "application/json");
    //     res.writeHead(200);
    //     res.end(`{
    //     "phone":"18602100000",
    //     "email": "guestcaredominos@jublfood.com"}`);
    // }
    if(req.url==="./contact"){
        //res.setHeader("Content-type","application/json");
        res.writeHead(200);
        res.end(`{
            "Phone":"18602100000",
            "email": "guestcaredominos@jublfood.com"
        }`)
    }
    else{
        res.statuscode(404);
        res.end();
        
    }
  
}
app.listen(8081, () => console.log("Listening to the port 3000...."));
module.exports = httpServer;