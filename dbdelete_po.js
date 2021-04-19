const pool = require("./db");

const sql = 'DELETE FROM prelimexam.mf_purchase_order WHERE po_no = $1 RETURNING *';
const data = [3];

pool.query(sql, data, (err, res)=>{
    if (err){
        console.log(err.stack);
    }
    else{
        console.log(res.rows[0]);
    }
});
pool.end();