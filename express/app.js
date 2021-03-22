const path = require('path');
const express = require('express');
const hbs = require('hbs');
// Use body-parser middleware
const bodyParser = require('body-parser');
const app = express();


// Set dinamic file
app.set('views', path.join(__dirname,'views'));
// Set view engine
app.set('view engine', 'hbs');

app.use(bodyParser.urlencoded({extended:false}));
// Set public folder as static folder for static file
app.use(express.static('public'));

// Route to Home
app.get('/', (req,res) => {
    res.render('index', {
        name:   "Ganteng"
    });
});
// Route to About with parameter 'name'
// app.get('/:name', (req,res) => {
//     // render index.hbs
//     res.render('index', {
//         name: req.params.name 
//     });
// });
// Showing form
app.get('/post', (req,res) => {
    res.render('form');
})
// Submit form
app.post('/post', (req,res) => {
    res.render('index', {
        name: req.body.textname
    });
});

app.listen(8000, () => {
    console.log('Server is running on http://localhost:8000');
});