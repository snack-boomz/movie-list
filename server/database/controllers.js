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

const getAllMovies = () => {
    
    return ( 
        knex('movies')
        .select('*')
    );
}

module.exports = {
    getAllMovies
}