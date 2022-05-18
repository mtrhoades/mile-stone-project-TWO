// IMPORTS
const React = require('react');
const Def = require('./default');


// STUB FUNCTION
const home = () => {
    return (
        <Def>
            <h1>Stocks HOME Page</h1>

            <a href="/stocks">
            <div class="text-center">
  <button type="button" class="btn btn-outline-primary">Your Stocks</button>
</div>
            </a>

        </Def>
    )
}


module.exports = home;