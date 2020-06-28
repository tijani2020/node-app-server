// create server app using express //

const express = require('express')

// setup app
const app = express()

// listen for requests 
const PORT = process.env.PORT || 3000
app.listen(PORT)

// listen for GET requests 
app.get('/', (req, res) => {
    /*if we want to send a HTML code
    res.send('<h1> Response from express app</h1>')
    */
    //if we want to send a files (better way)
    res.sendFile('./project/index.html', { root: __dirname})
})

app.get('/about', (req, res) => {
    res.sendFile('./project/about.html', { root: __dirname})
})

// redirection
app.get('/about-us', (req, res) => {
    res.redirect('/about')
})


// 404 page 
// use this function for every caming request , the server run the code from the top to the bpttom, and handel all the GET requests if the Request's path don't exist , thene the next function will run :

app.use((req, res) => {
    res.status(404).sendFile('./project/404.html', { root: __dirname})
})



// listen for POST requests
app.post('/', (req, res) => {

})

