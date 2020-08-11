const http = require("http");
const WebSocketServer = require("websocket").server;
let connection = null; 


const httpserver = http.createServer((req, res) => {
    console.log("we have received a request");
})

//handshake
const websocket = new WebSocketServer({
    "httpServer": httpserver
})

websocket.on("request", request => {
    //switching protocol, we can use send to send message to client
    connection = request.accept(null, request.origin)
    connection.on("open", () => console.log("Opened!!"));
    connection.on("close", () => console.log("CLOSED!"));
    connection.on("message", message => {
        console.log(`Received message ${message.utf8Data}`)
    })
})

httpserver.listen(8080, () => console.log("my server is listening"));