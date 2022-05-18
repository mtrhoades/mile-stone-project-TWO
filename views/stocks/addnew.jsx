// IMPORTS
const React = require('react');
const stocks = require('../../models/stocks');
const Def = require('../default');


// STUB FUNCTION
const addnew = () => {
    return (
        <Def>
            <h2>Add New Stock</h2>

            <form style={{display: 'flex', flexDirection: 'column', width: '25vw'}}>
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
                <label
                    htmlFor="price"
                    >Stock Price
                </label>
                <input 
                    type="number"
                    name="price"
                    id="price"
                    required
                >
                </input>
                <br></br>
                <a href="">
                    <button className="btn btn-success">Add Stock</button></a>
            </form>

        </Def>
    )
}


module.exports = addnew;