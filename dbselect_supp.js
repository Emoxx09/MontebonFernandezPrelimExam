const pool = require("./db");

pool.query("SELECT * FROM prelimexam.mf_supplier", (err, res)=>{
    if (err){
        console.log(err.stack);
    }
    else{
        console.log(res.rows[0]);
    }
});
pool.end();