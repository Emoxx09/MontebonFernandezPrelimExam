const pool = require("./db");

pool.query("SELECT * FROM prelimexam.mf_product", (err, res)=>{
    if (err){
        console.log(err.stack);
    }
    else{
        console.log(res.rows[0]);
    }
});
pool.end();