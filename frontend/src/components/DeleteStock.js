// IMPORTS
import React, { useState, useEffect } from 'react';


// FUNCTIONAL COMPONENT
const DeleteStock = () => {
        // VANILLA JS SECTION
    
   // useState section:
   const [stock, stocks, setStocks] = useState([]);



   // useEffect section:
   useEffect(() => {
    deleteStock();
}, [])


   // helper function section:
   const deleteStock = async (id) => {
    try {
        const deleteStock = await fetch(`http://localhost:3006/stocks/${id}`, {
            method: 'DELETE'
        });

        console.log(deleteStock);

        setStocks(stocks.filter(stock => stock.stock_id !== id)); // .filter sets a condition where if the stocks fit that condition of (stocks.stock_id DOES NOT EQUAL the id of the one deleted) than return the list of stocks (that were not deleted yet).

    } catch (err) {
        console.error(err.message)
    }
}


    // JSX SECTION
  return (
    <div>
      <button
        className="btn btn-danger"
        onClick={() => deleteStock(stock.stock_id)}
      >
        Delete
      </button>
    </div>
  )
}


export default DeleteStock;