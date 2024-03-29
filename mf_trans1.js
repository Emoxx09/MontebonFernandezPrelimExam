const { Pool } = require('pg')

const pool = new Pool({
    user: "postgres",
    password: "1234",
    host: "localhost",
    port: 5432,
    database: "MontebonFernandez"
});

(async()=>{
    const client = await pool.connect();
    try{
        await client.query('BEGIN');

        const suppAdd = 'INSERT INTO prelimexam.mf_supplier(name, address) VALUES ($1,$2) RETURNING supp_no';
        const prodAdd = 'INSERT INTO prelimexam.mf_product(name, prod_desc, price, stocks, supp_no) VALUES ($1,$2,$3,$4,$5) RETURNING prod_no';
        const custAdd = 'INSERT INTO prelimexam.mf_customer(name, address) VALUES ($1,$2) RETURNING cust_no';

        const supp1 = ["J&T", "Manila"];
        const supp2 = ["Bitsin", "Cebu"];
        const supp3 = ["MSG", "Bacolod"];
        const supp4 = ["Boolinaw", "Jolo"];
        const supp5 = ["MyMama", "Davao"];

        const prod1 = ["Wheel", "Wheels for your bike", "500", "100", "1"];
        const prod2 = ["Pillow", "Something comfy for your heady.", "30", "100", "2"];
        const prod3 = ["Tshirt", "Weary weary", "150", "100", "3"];
        const prod4 = ["Ukulele", "Balay ni Mayang", "1500", "47", "4"];
        const prod5 = ["Monitor", "144HZ FULL HD 1080P", "1500", "50", "5"];

        const cust1 = ["Rocks", "Davao"];
        const cust2 = ["Kaylu", "Davao"];
        const cust3 = ["Gleen", "Davao"];
        const cust4 = ["Joswa", "Davao"];
        const cust5 = ["Jedidiah", "Davao"];

        const res = await client.query(suppAdd, supp1);
        const res0 = await client.query(suppAdd, supp2);
        const res1 = await client.query(suppAdd, supp3);
        const res2 = await client.query(suppAdd, supp4);
        const res3 = await client.query(suppAdd, supp5);

        const res4 = await client.query(prodAdd, prod1);
        const res5 = await client.query(prodAdd, prod2);
        const res6 = await client.query(prodAdd, prod3);
        const res7 = await client.query(prodAdd, prod4);
        const res8 = await client.query(prodAdd, prod5);

        const res9 = await client.query(custAdd, cust1);
        const res10 = await client.query(custAdd, cust2);
        const res11 = await client.query(custAdd, cust3);
        const res12 = await client.query(custAdd, cust4);
        const res13 = await client.query(custAdd, cust5);

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