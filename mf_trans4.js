const pool = require("./db");

(async()=>{
    const client = await pool.connect();
    try{
        await client.query('BEGIN');
        var rating = parseFloat(5);

        const queryText = 'SELECT * FROM prelimexam.mf_supplier WHERE supp_no = 1';
        const res = await client.query(queryText);

        if (res.rows[0].rating == null){

            const queryText1 = "UPDATE prelimexam.mf_supplier SET rating = " + (rating) + ", raters_no = 1, rating_total = " + (rating) + " WHERE supp_no = 1";
            const res1= await client.query(queryText1);

        }
        else{
            var fetchRaters = "SELECT * FROM prelimexam.mf_supplier WHERE supp_no = 1";
            var grab = await client.query(fetchRaters);
            var raters_no = grab.rows[0].raters_no;
            var rating_total = grab.rows[0].rating_total;

            const queryText0 = "UPDATE prelimexam.mf_supplier SET rating_total = " + parseFloat(rating_total + rating) + ", raters_no = " + raters_no + "+1 WHERE supp_no = 1";
            const res0 = await client.query(queryText0); 

            fetchRaters = "SELECT * FROM prelimexam.mf_supplier WHERE supp_no = 1";
            grab = await client.query(fetchRaters);
            raters_no = grab.rows[0].raters_no;
            rating_total = grab.rows[0].rating_total;

            const queryText1 = "UPDATE prelimexam.mf_supplier SET rating = " + ((rating_total)/raters_no) + " WHERE supp_no = 1";
            const res1 = await client.query(queryText1); 
        }

        await client.query('COMMIT');
    }
    catch(e){
        await client.query('ROLLBACK');
        console.log(e);
    }
    finally {
        client.release();
        console.log('Database Transaction Completed.');
    }
})().catch(e=>console.error(e.stack))