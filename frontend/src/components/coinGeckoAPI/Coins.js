// IMPORTS
import React from 'react';

// FUNCTIONAL COMPONENT
const Coins = ( { symbol, name, price, image } ) => {
    // VANILLA JS SECTION

    // helper function (add to table when onClick)
    const onSubmitForm = async(e) => {
        e.preventDefault();
        try {
          const body = { symbol, price, name };
          await fetch("http://localhost:3006/stocks", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body),
            });
        
            window.location = '/';
    
          } catch (err) {
            console.error(err.message)
          }
        };    


    // JSX SECTION
  return (
    <div className="coin-container">

        <div style={{display: 'flex', justifyContent: 'space-between', backgroundColor: '#414345', color: 'white'}} className="coin-row" >
          <div className="coinImage">
            <img className="coin-image" src={image}></img>
          </div>
          <div className="coinSymbol">
            <p className="coin-symbol" onClick={onSubmitForm}>{symbol}</p>
          </div>
          <div className="coinName">
            <p className="coin-name" onClick={onSubmitForm}>{name}</p>
          </div>
          <div className="coinPrice">
            <p className="coin-price" onClick={onSubmitForm}>${price}</p>
          </div>
        </div>

    </div>
  )
}

export default Coins;