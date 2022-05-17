// IMPORTS
const React = require('react');
const Def = require('./default');


// STUB FUNCTION
const home = () => {
    return (
        <Def>
            <h1>Stocks HOME Page</h1>

            <a href="/stocks"><button>Index Page</button></a>
        </Def>
    )
}


module.exports = home;