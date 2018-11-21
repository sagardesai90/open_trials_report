const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.get('/', function(req, res){
    res.status(200).json({api: 'running'});
});

const port = process.env.PORT || 9003;
mongoose.promise = global.Promise; 

mongoose.connect('mongodb://localhost/search', {}, err => {
    if (err) console.log(err);
    console.log("Mongoose is connected to your database.")
})

server.listen(port, () => {
    console.log(`\n===API is running on http://localhost:${port} ===\n`);
});