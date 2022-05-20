// DEPENDENCIES
const express = require('express');
const pool = require('../models/db');

const stocks = express.Router();


// ROUTES:

    // INDEX (READ) ROUTE - list of all stocks data from the database
stocks.get('/', async (req, res) => {
    try {
        const allStocks = await pool.query(
            "SELECT * FROM stocks"
        );
        
        res.json(allStocks.rows);

    } catch (err) {
        res.status(404).send('Error 404 PAGE NOT FOUND!');
    }
});

    // Read Route for a single stock to update or delete that one stock in particular
stocks.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const stock = await pool.query(
            "SELECT * FROM stocks WHERE stock_id = $1",
            [id]
        );

            res.json(stock.rows[0]);

    } catch (err) {
        res.status(404).send('Error 404 PAGE NOT FOUND!');
    }
});


    // CREATE ROUTE (add new stock)    
stocks.post('/', async (req, res) => {
    try {
        const { symbol, stock_name, price } = req.body;
        const newStock = await pool.query(
            "INSERT INTO stocks(symbol, stock_name, price) VALUES($1, $2, $3) RETURNING *",
            [symbol, stock_name, price]
            );

            res.json(newStock.rows[0]);

    } catch (err) {
        res.status(404).send('Error 404 PAGE NOT FOUND!');
    }
});


    // UPDATE ROUTE
stocks.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { symbol, stock_name, price} = req.body;
        const updateStock = await pool.query(
            "UPDATE stocks SET symbol = $1 WHERE stock_id = $2",
            [symbol, id]
        );

            res.json('Stock was UPDATED!')
            console.log(res.json())

    } catch (err) {
        res.status(404).send('Error 404 PAGE NOT FOUND!');
    }
});


    // DELETE ROUTE
stocks.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const deleteStock = await pool.query(
            "DELETE FROM stocks WHERE stock_id = $1",
            [id]
        );

            res.json("Stock was DELETED!")

    } catch (err) {
        res.status(404).send('Error 404 PAGE NOT FOUND!');
    }
});


module.exports = stocks;