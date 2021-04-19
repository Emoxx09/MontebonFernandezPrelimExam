const pool = require("./db");

const sql = 'INSERT INTO prelimexam.mf_line_item(name, total_price, quantity, po_no, prod_no, status) VALUES ($1,$2,$3,$4,$5,$6) RETURNING *';
const data = ['Sample_Name', 150, 3, '2', '1', 'TRUE'];

pool.query(sql, data, (err, res)=>{
    if (err){
        console.log(err.stack);
    }
    else{
        console.log(res.rows[0]);
    }
});
pool.end();