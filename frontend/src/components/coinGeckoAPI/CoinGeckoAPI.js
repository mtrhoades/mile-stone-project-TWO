// IMPORTS
import React, { useEffect, useState } from 'react';
import Coins from './Coins'


// FUNCTIONAL COMPONENT
const CoinGeckoAPI = () => {
    // VANILLA JS SECTION

        // useState section:
    const [coins, setCoins] = useState([]);
    const [filteredData, setFilteredData] = useState([]);


    // helper function section:
        // coingecko api fetch request
    const coinGeckoApi = async () => {
        try {
            const response = await fetch(
            `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false`
            );
            const coinData = await response.json();
            
            console.log(response)
            
            setCoins(coinData);
            
            console.log(coinData);

        } catch (err) {
            console.error(err.message);
        }
    }


    // useEffect section:
    useEffect (() => {
        coinGeckoApi()
    },[])

    // filterd data function for search input
    const handleFilter = (e) => {
        const searchWord = e.target.value
        const newFilter = coins.filter((coin) => {
            return coin.name.toLowerCase().includes(searchWord.toLowerCase());
        });
        if (searchWord === "") {
            setFilteredData([])
        } else {
        setFilteredData(newFilter);
        }
    }


    // JSX SECTION
  return (
    <div>

        <h3 style={{color: 'white'}}>Search a CryptoCurrency from API</h3>
        <div className="searchInput">
            <input type="text" placeholder='Enter Coin Name Here...' onChange={handleFilter}></input>
        </div>
        <div className='resultBoxPlusDisclaimer'>
            {filteredData.length != 0 && (
            <div className="dataResult">
                {filteredData.map(coin => {
                    return (
                        <Coins key={coin.id} symbol={coin.symbol} price={coin.current_price} name={coin.name}
                        image={coin.image}
                        />
                    )
                })}
            </div>
            )}
        </div>

    </div>
  )
}

export default CoinGeckoAPI;