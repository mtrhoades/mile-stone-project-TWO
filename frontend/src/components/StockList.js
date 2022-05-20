// IMPORTS
import React, { useState, useEffect } from 'react';

// IMPORT COMPONENTS
import DeleteStock from './DeleteStock';

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
    <div>
        <h2>Stock List</h2>
        <table>
            <thead>
                <tr>
                    <th style={{paddingRight: '2rem'}} scope ="col">ID</th>
                    <th style={{paddingRight: '1.5rem'}} scope="col">Symbol</th>
                    <th style={{paddingRight: '3.5rem'}} scope="col">Name</th>
                    <th style={{paddingRight: '4rem'}} scope="col">Price</th>
                    <th style={{paddingRight: '2.5rem'}} scope="col">Edit</th>
                    <th scope="col">Delete</th>
                </tr>
            </thead>
            <tbody>
                {stocks.map(stock => (
                    <tr key={stock.stock_id}>
                        <th scope="col">{stock.stock_id}</th>
                        <td>{stock.symbol}</td>
                        <td>{stock.stock_name}</td>
                        <td>{stock.price}</td>
                        <td>Edit</td> {/* add edit component here */}
                        <td>
                            <button
                                className='btn btn-danger'
                                onClick={() => deleteStock(stock.stock_id)}    
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