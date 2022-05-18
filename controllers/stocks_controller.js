// DEPENDENCIES
const express = require('express');
const db = require('../models/stocks.js');

const stocks = express.Router();


// ROUTES:

    // INDEX (READ) ROUTE
stocks.get('/', async (req, res) => {
    try {
        res.json([
            {
             name: "Apple",
             symbol: 'AAPL',
             price: '$240.45'
            },
            {
             name: "Amazon",
             symbol: 'AMZN',
             price: '$2,231.65'
            },
            {
             name: "Twitter",
             symbol: 'TWTR',
             price: '$41.97'
            },
            {
             name: "Microsoft",
             symbol: 'MSFT',
             price: '$352.85'
            }
        ])

        // use as template for when connecting to mongo:
            // employee.get("/", async (req, res) => {
            //     const myEmployees = await Employee.find();
            //     res.json(myEmployees);
            //     }); 
    } catch (err) {
        res.status(404).render('error404');
    }
});



    // CREATE ROUTE (new stock)


    // UPDATE ROUTE



    // DELETE ROUTE



module.exports = stocks;