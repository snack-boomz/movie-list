const express = require('express');
const cors = require('cors');
const port = 3001;
const knex = require('knex')({
    client: 'pg',
    connection: {
        database: 'moviesdb',
        user:     'postgres',
        password: 'docker',
        host:     '127.0.0.1',
        port:     '5432'
    }
})

const app = express();

app.use(cors())


app.get('/', (request, response) => {
    knex('movies')
    .select('*')
    .then(data => response.send(data))
    //then(data => response.send(data))
    
})

app.listen(port, () => {
    console.log(`movies backend is listening on port ${port}`);
})