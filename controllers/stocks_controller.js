// DEPENDENCIES
const express = require('express');
const db = require('../models/stocks.js');

const stocks = express.Router();


// ROUTES:

    // INDEX (READ) ROUTE
stocks.get('/', (req, res) => {
    try {
        res.render('stocks/index', {
            stocks: db,
            title: 'Stocks'
        });
    } catch (err) {
        res.status(404).send('404 page not found!');
    }
});


    // CREATE ROUTE



    // UPDATE ROUTE



    // DELETE ROUTE



module.exports = stocks;