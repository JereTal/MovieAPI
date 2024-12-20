import express from 'express';

var app = express();


app.listen(3001, () => {
    console.log('I think the server might be running now');
});

//Endpoint is defined here

app.get('/', (req, res) => {
    res.send('This is the root endpoint');
})

app.get('/user', (req, res) => {
    res.send('Getting user information');
})