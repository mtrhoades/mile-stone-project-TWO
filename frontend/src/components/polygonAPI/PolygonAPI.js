// IMPORTS
import React, { useState, useEffect } from 'react';
import Stocks from './Stocks';
// import SearchBar from './SearchBar';


// FUNCTIONAL COMPONENT
const PolygonAPI = () => {
// VANILLA JS SECTION

    // useState section
    const [stocks, setStocks] = useState([]);
    const [search, setSearch] = useState('');

    const [symbol, setSymbol] = useState('');
    // const [stock_name, setStockName] = useState('');
    const [price, setPrice] = useState('');
 


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

    
// HELPER FUNCTION SECTION
    // polygon api fetch request:
    const polygonApi = async () => {
        try {
            const response = await fetch(
            `https://api.polygon.io/v2/aggs/grouped/locale/us/market/stocks/2022-05-23?adjusted=true&apiKey=KcdzRHM5pcd6apVHZ71g00TSMXc89CUh`
            );
            const jsonData = await response.json();
            
            console.log(response)
            
            setStocks(jsonData.results);
            
            console.log(jsonData.results);

        } catch (err) {
            console.error(err.message);
        }
    }


// useEffect section
    useEffect(() => {
    polygonApi();
    }, [])


    // helper function
    const handleChange = (e) => {
        setSearch(e.target.value)
    }

    // const filteredStocks = stocks.filter(stock => stock.T.toLowerCase().includes(search.toLowerCase()))


// JSX SECTION
  return (
    <div style={{color: 'white'}} className="stock-app">
        <h3>Search a Stock from API</h3>
        <div className="search">
        <div style={{display: 'flex'}} className="searchInput">
            <input type="text" placeholder='Enter Stock Symbol Here...'></input>
            <div className="searchButton">
                <input className="btn btn-primary" type="button" value="Search"></input>
            </div>
        </div>
        <div className="dataResult">
            {stocks.map(stock => {
                return (
                    <ul style={{display: 'flex'}} key={stock.T} symbol={stock.T} price={stock.c}>
                        <li onClick={onSubmitForm}>
                            {stock.T}
                        </li>
                        <li>
                            ${stock.c}
                        </li>
                    </ul>
                )
            })}
        </div>
        </div>
    </div>
    
  )
}



export default PolygonAPI;