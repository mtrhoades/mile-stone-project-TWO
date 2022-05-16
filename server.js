// DEPENDENCIES
const express = require('express');



// CONFIGURATION
require('dotenv').config();
const PORT = process.env.PORT;
const app = express();


// MIDDLEWARE (happens between req & res)
app.set('views', __dirname + '/views'); // grabs the views folder files.
app.use(express.static('public')); // access to public folder for css and images.
app.set('view engine', 'jsx'); // to be able to look at the views .jsx pages
app.engine('jsx', require('express-react-views').createEngine()); // importing 'express-react-views' to be able to use jsx



// DATABASE



// ROOT ROUTE (home page route)
app.get('/', (req, res) => {
    res.render('home')
});


// CONTROLLER ROUTE
const stocksController = require('./controllers/stocks_controller');
app.use('/stocks', stocksController);


// 404 PAGE (error page)
app.get('*', (req, res) => {
    res.render('error404')
});


// SERVER LISTEN
app.listen(PORT, () => {
    console.log('We out here on port', PORT);
});