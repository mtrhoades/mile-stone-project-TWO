import React from 'react'

const Stocks = ({ symbol, price }) => {

    const onSubmitForm = async(e) => {
        e.preventDefault();
        try {
          const body = { symbol, price };
          const response = await fetch("http://localhost:3006/stocks", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body),
            });
    
            console.log(response);
    
            window.location = '/';
    
    
          } catch (err) {
            console.error(err.message)
          }
        };    


  return (
    <div style={{color: 'black'}} className="stock-container">
        <div style={{display: 'flex', padding: '0'}} className="stock-row">
            <div className="stock">
                <p className="stock-symbol" onClick={onSubmitForm}>{symbol}</p>
            </div>
            <div className="stock-data">
                <p className="stock-price" onClick={onSubmitForm}>${price}</p>
            </div>
        </div>
    </div>
  )
}

export default Stocks