// import json-server library in index.js
const jsonServer =require("json-server")

// create server using json- server library
const mediaPlayerServer=jsonServer.create()

// create path to db.json file
const router=jsonServer.router("db.json")

// middlewares to convert js to json
const middleware=jsonServer.defaults()

// connect/use middleware and router in server
mediaPlayerServer.use(middleware)
mediaPlayerServer.use(router)

// setup port  for server  defualt run in 3000
const port= 5000 || process.env.PORT


// To listen server for resolve request
mediaPlayerServer.listen(port,()=>{
    console.log(`mediaPlayerServer started at ${port} and ready fetch request`);
})



