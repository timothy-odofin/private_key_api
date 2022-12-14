const app = require('./app')
const http = require('http')
const PORT = process.env.PORT || 4300
const server = http.createServer(app);
const {connection} = require('./utils/userUtilDb')

connection.sync()
    .then(connectionResult => {
        console.log("Connection to studentDatabase successful")
        server.listen(PORT, ()=>{
            console.log("Server started successfully")
        })
    })
    .catch(err => {
        console.log(err);
    });