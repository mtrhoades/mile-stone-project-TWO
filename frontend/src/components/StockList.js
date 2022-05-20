// IMPORTS
import React, { useState, useEffect } from 'react';

// FUNCTIONAL COMPONENT
const StockList = () => {
    // VANILLA JS SECTION
    // useState section:
    const [stocks, setStocks] = useState([]);


   // helper function section:
   // fetch request:
   const getStocks = async () => {
       try {
         const response = await fetch('http://localhost:3006/stocks');
         const jsonData = await response.json();

         console.log(jsonData);
         
            setStocks(jsonData);
           
        } catch (err) {
            console.error(err.message);
        }
    };


    // delete stock function fetch request:
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
    };
    
    
    // useEffect section:
     useEffect(() => {
         getStocks();
     }, [])
    

    // JSX SECTION
  return (
    <div >
        <h2>Stock List</h2>
        <table class=" center table table-sm table-striped table-dark text-center">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Symbol</th>
                    <th scope="col">Name</th>
                    <th scope="col">Price</th>  
                    <th scope="col">Options</th>  
                </tr>
            </thead>
            <tbody >
                {stocks.map(stock => (
                    <tr key={stock.stock_id}>
                        <th scope="col">{stock.stock_id}</th>
                        <td>{stock.symbol}</td>
                        <td>{stock.stock_name}</td>
                        <td>{stock.price}</td>
                        <td>
                          <button
                            type="button"
                            class="btn btn-outline-success btn-sm"
                          >
                            edit
                          </button>
                          <button
                            onClick={() => deleteStock(stock.stock_id)}
                            type="button"
                            class="btn btn-outline-danger btn-sm"
                          >
                            Delete
                          </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}


export default StockList;