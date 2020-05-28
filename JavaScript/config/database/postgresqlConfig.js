// Commands to Install and use Postgresql in Ubuntu 
// sudo apt install postgresql postgresql-contrib

// Switch over to the postgres account on your server by typing:
// sudo -u postgres psql

// Create user :
// sudo -u postgres createuser kubixsquare

// To change Password of user :
// sudo -u postgres psql
// ALTER USER postgres PASSWORD 'newpassword';

// Switch to Account :
// sudo -i -u kubixsquare

// Create Database :
// sudo -u postgres createdb kubixsquare

// Go to Database created :
// sudo -u postgres psql
// \connect kubixsquare

// Exit Postgresql :
// postgres=# \q


// List all Database :
// sudo -u postgres psql
// \l


// Always use Pooling request.
// https://node-postgres.com/features/pooling
const { Pool } = require('pg')
const pool = new Pool({
  user: 'kubixsquare',
  host: 'localhost',
  database: 'kubixsquare',
  password: 'kubixsquare',
  port: 5432,
})
pool.query('SELECT NOW()', (err, res) => {
    try{
        console.log("PostgreSQL Database Connected ",res.rows[0])
        pool.end()
    }
    catch (err)
    {
        console.log("Error in connecting to PostgreSQL Database",err.stack)
    }
  
})
