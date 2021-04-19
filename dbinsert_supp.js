const pool = require("./db");

const sql = 'INSERT INTO prelimexam.mf_supplier(name, address, rating) VALUES ($1,$2,$3) RETURNING *';
const data = ['Sample_Name', 'Sample_Address', 5];

pool.query(sql, data, (err, res)=>{
    if (err){
        console.log(err.stack);
    }
    else{
        console.log(res.rows[0]);
    }
});
pool.end();