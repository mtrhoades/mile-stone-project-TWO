// IMPORTS
import React, { useEffect, useState } from 'react';
import Coins from './Coins'


// FUNCTIONAL COMPONENT
const CoinGeckoAPI = () => {
    // VANILLA JS SECTION

        // useState section:
    const [coins, setCoins] = useState([]);


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



    // JSX SECTION
  return (
    <div>

        <h3 style={{color: 'white'}}>Search a CryptoCurrency from API</h3>
        <div className="searchInput">
            <input type="text" placeholder='Enter Coin Symbol Here...'></input>
        </div>
        <div style={{display: 'flex', alignItems: 'flex-end'}} className='resultBoxPlusDisclaimer'>
            <div className="dataResult">
                {coins.map(coin => {
                    return (
                        <Coins key={coin.id} symbol={coin.symbol} price={coin.current_price} name={coin.name} />
                    )
                })}
            </div>
        </div>

    </div>
  )
}

export default CoinGeckoAPI;