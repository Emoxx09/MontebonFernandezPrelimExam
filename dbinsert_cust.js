const pool = require("./db");

const sql = 'INSERT INTO prelimexam.mf_customer(name, address) VALUES ($1,$2) RETURNING *';
const data = ['Sample_Name', 'Sample_Address'];

pool.query(sql, data, (err, res)=>{
    if (err){
        console.log(err.stack);
    }
    else{
        console.log(res.rows[0]);
    }
});
pool.end();