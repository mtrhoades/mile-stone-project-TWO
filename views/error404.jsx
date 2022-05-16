// IMPORTS
const React = require('react');
const Def = require('./default');


// STUB FUNCTION
const error404 = () => {
    return (
        <Def>
            <h1 style={{color: 'red'}}>404 PAGE NOT FOUND!</h1>
        </Def>
    )
}


module.exports = error404;