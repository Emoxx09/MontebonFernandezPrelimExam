const pool = require("./db");

const sql = 'INSERT INTO prelimexam.mf_product(name, prod_desc, price, stocks, supp_no) VALUES ($1,$2,$3, $4, $5) RETURNING *';
const data = ['Sample_Name', 'Sample_Desc', 50, 50, 1];

pool.query(sql, data, (err, res)=>{
    if (err){
        console.log(err.stack);
    }
    else{
        console.log(res.rows[0]);
    }
});
pool.end();