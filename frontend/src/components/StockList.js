// IMPORTS
import React, { useState, useEffect } from 'react';



// FUNCTIONAL COMPONENT
const StockList = () => {
    // VANILLA JS SECTION
    const [stocks, setStocks] = useState([]);



   // useState section:
   


   // helper function section:
   // fetch request:
   const getStocks = async () => {
       try {
           const response = await fetch('http://localhost:3006/stocks');
           const jsonData = await response.json();
           
           setStocks(jsonData);
           
        } catch (err) {
            console.error(err.message);
        }
    }
    
    // useEffect section:
     useEffect(() => {
         getStocks();
     }, [])
    

    // JSX SECTION
  return (
    <div>
        <h2>StockList</h2>
        <table>
            <thead>
                <tr>
                    <th scope="col">Symbol</th>
                    <th scope="col">Name</th>
                    <th scope="col">Price</th>
                </tr>
            </thead>
            <tbody>
                {stocks.map(stock => (
                    <tr>
                        <td>{stocks.symbol}</td>
                        <td>{stocks.name}</td>
                        <td>{stocks.price}</td>
                    </tr>
                ))}
            </tbody>
        </table>

        
        
        
        
        
    </div>
  )
}


export default StockList;