const express = require('express');
const helmet = require('helmet');
const carRouter = require('./cars/carRouter');

//set server
const server = express();
const port = process.env.PORT || 5000;

//import middleware
server.use(helmet());
server.use(express.json());

//import router
server.use('/cars', carRouter);

//create error message
server.use((err, req, res, next ) => {
    console.log(err)
    res.status(500).json({
        message: 'Unable to retrieve at this time'
    })
})

server.listen((port, () => {
    console.log(`Server running at http://localhost:${port}`)
}));

