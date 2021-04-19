const pool = require("./db");

const sql = 'UPDATE prelimexam.mf_purchase_order SET status = $1 WHERE po_no = 2 RETURNING *';
const data = ['FALSE'];

pool.query(sql, data, (err, res)=>{
    if (err){
        console.log(err.stack);
    }
    else{
        console.log(res.rows[0]);
    }
});
pool.end();