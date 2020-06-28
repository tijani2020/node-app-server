// create server app without express 

// http language of communication between client and server sides
const http = require('http')
const fs = require('fs')
const _ = require('lodash')

// create a server
const server = http.createServer((req, res) => {
    // get informations about the request 
    console.log(req.url , req.method)
    // set header content type
    res.setHeader('content-type', 'text/html')

    let path = './project/'
    switch (req.url) {
        case '/':
        path += 'index.html'
        res.statusCode = 200
        break;

        case '/about':
        path += 'about.html'
        res.statusCode = 200
        break;
// redirection 
        case  '/about-me':
            res.statusCode = 301
            res.setHeader('Location', 'about')
            res.end()

        default:
            path += '404.html'
            res.statusCode = 404
        break;
    }

    // sent HTML file as a response 
    fs.readFile(path, (err, data) => {
        if (err){
            console.log(err)
            res.end()
        } else {
            /* if we want to sent multiple res.write
            res.write(data)
            res.end()
            */
            //if we want to sent one res.write
             res.end(data)
            
        }
    })
    
})

// make a server lisening to client's requests 

server.listen(3000, 'localhost', () =>{
    //localhost is a domaine name of our computer and 3000 is the port
    console.log("the server listening")
})

// 1. Global packge : for current and all our coming projects

// Nodemon :   npm install node mode : 01:34 and this is the one we're going to be 01:36 installing first of all onto our 01:38 computer and this helps us with a 01:40 development workflow so we don't have to 01:42 keep restarting the server manually so 01:44 I'm going to use NPM first of all to 01:47 show you how to install this globally 01:50 onto your computer 01:55 okay then so no daman is a package which 01:58 helps us to create a live reload server 02:00 and that's really gonna speed up the 02:02 development process because currently 02:04 every time we make any kind of change to 02:07 our server code we have to cancel out of 02:09 the current process in the terminal and 02:11 then rerun the file again and this 02:13 restarts the server to reflect those

// 2. Global packge :for actual project 
// package.json : npm init

// loadash librarie ;this is keeping track of what package we 09:15 are using or what packages we are using 09:18 in this 09:19 object


// then you can start insttaling packages like express : Express. js basically helps you manage everything, from routes, to handling requests and views.

