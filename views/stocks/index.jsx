// IMPORTS
const React = require('react');
const stocks = require('../../models/stocks');
const Def = require('../default');


// STUB FUNCTION
const index = () => {
    return (
        <Def>
            <h1 style={{paddingBottom: '3rem'}}>Stocks INDEX Page</h1>



            <table>
                <thead>
                    <tr>
                        <th style={{paddingRight: '2rem'}} scope="col">Symbol</th>
                        <th style={{paddingRight: '3rem'}} scope="col">Name</th>
                        <th scope="col">Price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        stocks.map((stocks, index) => {
                            return (
                                <tr>
                                    <td>{stocks.symbol}</td>
                                    <td>{stocks.name}</td>
                                    <td>{stocks.price}</td>
                            </tr>

                            )                            
                        })
                    }
                </tbody>
            </table>

            <div style={{paddingTop: '2rem'}} className="addNewButton">
                <a href="/stocks/addnew">
                    <button className="btn btn-success">Add Stocks</button></a>
            </div>


        </Def>
    )
}


module.exports = index;