const { Pool } = require('pg');

const config = {
    user: 'postgres',
    host: 'localhost',
    password: 'password',
    database: 'gestor_productos'
};

const pool = new Pool(config);

const getProducts = async() => {
    try {
        const res = await pool.query('Select * from productos');
        console.log(res.rows);
        pool.end();
    } catch (e) {
        console.log(e);
    }
   
}

getProducts();