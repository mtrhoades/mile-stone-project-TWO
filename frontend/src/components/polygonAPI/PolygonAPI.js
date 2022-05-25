// IMPORTS
import React, { useState, useEffect } from 'react';
import Stocks from './Stocks';


// FUNCTIONAL COMPONENT
const PolygonAPI = () => {
// VANILLA JS SECTION

    // useState section
    const [stocks, setStocks] = useState([]);
    const [search, setSearch] = useState('');


    
    
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

    const filteredStocks = stocks.filter(stock => stock.T.toLowerCase().includes(search.toLowerCase()))


// JSX SECTION
  return (
    <div style={{color: 'white'}} className="stock-app">
        <div className="stock-search">
            <h3 style={{padding: "0"}}>Search a Stock from API</h3>
            <h6 style={{padding: "0"}}>*Search by company's Ticker</h6>
            <form>
                <input type='text' placeholder='Search' onChange={handleChange}></input>
                <select>
                    <option value="selectStock"></option>
                </select>
            </form>
            {/* <button
                type='search'
                class="btn btn-outline-primary"
                onClick={() => polygonApi()}
            >
                Search
            </button> */}
        </div>
        {filteredStocks.map(stock => {

            return (
                <Stocks key={stock.T} symbol={stock.T} price={stock.c}/>
                )
        })}

    </div>
    
  )
}



export default PolygonAPI;