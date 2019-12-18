var StaticServer = require("static-server");
var server = new StaticServer({
    rootpath: "./dist/",
    port: 8000
});

server.start(function() {
    console.log("Server Starting Lesting...", server.port);
});