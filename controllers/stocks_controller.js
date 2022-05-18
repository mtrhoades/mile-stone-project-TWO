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
        res.status(404).render('error404');
    }
});


    // ADD NEW STOCK (page) ROUTE
stocks.get('/addnew', (req, res) => {
    try {
        res.render('stocks/addnew')
    } catch (err) {
        res.status(404).render('error404')
    }
});


    // CREATE ROUTE (new stock)


    // UPDATE ROUTE



    // DELETE ROUTE



module.exports = stocks;