const pool = require("./db");

const sql = 'UPDATE prelimexam.mf_customer SET name = $1 WHERE cust_no = 1 RETURNING *';
const data = ['Sample_Name1'];

pool.query(sql, data, (err, res)=>{
    if (err){
        console.log(err.stack);
    }
    else{
        console.log(res.rows[0]);
    }
});
pool.end();