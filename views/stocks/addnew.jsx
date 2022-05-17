// IMPORTS
const React = require('react');
const stocks = require('../../models/stocks');
const Def = require('../default');


// STUB FUNCTION
const addnew = () => {
    return (
        <Def>
            <h2>Add New Stock</h2>

            <form style={{display: 'flex', flexDirection: 'column'}}>
                <label style={{paddingRight: '1rem'}}
                    htmlFor="symbol"
                    >Ticker Symbol
                </label>
                <input
                    type="text"
                    name="symbol"
                    id="symbol"
                    required
                >
                </input>
                <label style={{paddingRight: '1rem'}}
                    htmlFor="name"
                    >Stock Name
                </label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    required
                >
                </input>
                <label style={{paddingRight: '1rem'}}
                    htmlFor="price"
                    >Stock Price
                </label>
                <input
                    type="text"
                    name="price"
                    id="price"
                    required
                >
                </input>
                <input
                    type="submit"
                    value="Add Stock"
                >
                </input>
            </form>

        </Def>
    )
}


module.exports = addnew;