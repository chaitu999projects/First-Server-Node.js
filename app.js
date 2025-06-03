const http = require("http")
const port = 2000;
const server =  http.createServer((req, res)=> {
    console.log("Hello From Server....");
    res.write("Hello From Server...");
    res.end();
});

server.listen(port, ()=> {
    console.log(`http://localhost:${port}`);
})
