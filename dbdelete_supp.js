const pool = require("./db");

const sql = 'DELETE FROM prelimexam.mf_supplier WHERE supp_no = $1 RETURNING *';
const data = [1];

pool.query(sql, data, (err, res)=>{
    if (err){
        console.log(err.stack);
    }
    else{
        console.log(res.rows[0]);
    }
});
pool.end();