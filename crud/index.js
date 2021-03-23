const path = require('path');
// Use express module
const express = require('express');
// Use hbs
const hbs = require('hbs');
// Use body parser
const bodyParser = require('body-parser');
// Use mysql
const mysql = require('mysql');
const app = express();

// Conn Config
const conn = mysql.createConnection({
    host:       'localhost',
    user:       'root',
    password:   '',
    database:   'crud_nodejs'
});

// Connect to db
conn.connect((err) => {
    if (err) throw err;
    console.log('Database connected..');
});

// Set views file
app.set('views', path.join(__dirname,'views'));
// Set view engine
app.set('view engine', 'hbs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
// Set public for static folder
app.use('/assets', express.static(__dirname+'/public'));

// Route for home page
app.get('/', (req,res) => {
    let sql = "Select * from products";
    let query = conn.query(sql, (err, results) => {
        if(err) throw err;
        res.render('product_view', {
            results:results
        });
    });
});

// Route for insert data
app.post('/save', (req,res) => {
    let data = {name: req.body.name, price: req.body.price};
    let sql  = "Insert into products set ?";
    let query = conn.query(sql, data, (err, results) => {
        if(err) throw err;
        console.log(query);
        res.redirect('/');
    });
});

// Route untuk update data
app.post('/update', (req,res)=> {
    let sql = "Update products set name='"+req.body.name+"', price='"+req.body.price+"' where id="+req.body.id;
    let query = conn.query(sql, (err, results) => {
        if(err) throw err;
        res.redirect('/');
    });
});

// Route for delete data
app.post('/delete', (req,res)=>{
    let sql = "delete from products where id="+req.body.id;
    let query = conn.query(sql, (err, results) => {
        if(err) throw err;
        res.redirect('/');
    });
});

// Listen
app.listen(8000, () => {
    console.log('Server is running at http://localhost:8000');
});