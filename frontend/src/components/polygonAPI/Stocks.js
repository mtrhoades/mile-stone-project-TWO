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
    <div className="stock-container">
        
        <div style={{display: 'flex'}} className="stock-row" >
            <div className="stock">
                {/* <h5>Ticker Symbol</h5> */}
                <p className="stock-symbol" onClick={onSubmitForm}>{symbol}</p>
            </div>
            <div className="stock-data">
                {/* <h5>Closing Price (05/23/2022)</h5> */}
                <p className="stock-price" onClick={onSubmitForm}>${price}</p>
            </div>
        </div>
    </div>
  )
}

export default Stocks