// IMPORTS
const React = require('react');
const stocks = require('../../models/stocks');
const Def = require('../default');


// STUB FUNCTION
const index = () => {
    return (
        <Def>
            <h1 style={{paddingBottom: '1rem'}}>Stocks INDEX Page</h1>
            <ul>
                {
                    stocks.map((stocks, index) => {
                        return (
                            <li key={index}>
                                <a href={`/stocks/${index}`}>
                                    {stocks.name}, {stocks.symbol}, {stocks.price}
                                </a>
                            </li>
                        )
                    })
                }
            </ul>
        </Def>
    )
}


module.exports = index;