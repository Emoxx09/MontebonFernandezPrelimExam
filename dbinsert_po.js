const pool = require("./db");

const sql = 'INSERT INTO prelimexam.mf_purchase_order(date, supp_no, cust_no, status) VALUES ($1,$2,$3,$4) RETURNING *';
const data = ['04-01-2021', 1, 1, 'TRUE'];

pool.query(sql, data, (err, res)=>{
    if (err){
        console.log(err.stack);
    }
    else{
        console.log(res.rows[0]);
    }
});
pool.end();