const express = require('express');
const cors = require('cors');
const port = 3001;

const app = express();

const { getAllMovies /* and all other db getters and setters.... */ } = require('./database/controllers');


app.use(cors())


app.get('/', (request, response) => {
    getAllMovies()
    .then(data => response.send(data))
    //then(data => response.send(data))
    
})

app.listen(port, () => {
    console.log(`movies backend is listening on port ${port}`);
})