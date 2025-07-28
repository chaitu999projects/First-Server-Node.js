const http = require("http");
require('dotenv').config()
const server =  http.createServer((req, res)=> {
    console.log("Hello From Server....");
    res.write("Hello From Server..............");
    res.end();
});

const port = process.env.PORT
server.listen(port, ()=> {
    console.log(`http://localhost:${port}`);
})
