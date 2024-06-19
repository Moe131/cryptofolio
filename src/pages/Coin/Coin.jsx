import React from "react";
import { useParams } from "react-router-dom";
import "./Coin.css"

function Coin(){
    const {coinId} = useParams()
    const [coinData, setCoinData] = React.useState()

    async function fetchCoin(){
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              'x-cg-demo-api-key': import.meta.env.VITE_API_KEY
            }
          };
          
        await fetch('https://api.coingecko.com/api/v3/coins/'+coinId, options)
            .then(response => response.json())
            .then(response => setCoinData(response))
            .catch(err => console.error(err));
    }
    React.useEffect(() => { fetchCoin() },[])
    if (coinData) {
        return (
            <div className="coin">
                <div className="coin-name">
                    <img src={coinData.image.large} />
                    <h1><b>{coinData.name} ({coinData.symbol})</b></h1>
                </div>
                <div className="coin-details">
                    <p>{coinData.description.en.split(".")[0]}</p>
                    <br />
                    <p> Website : <a href={coinData.links.homepage}>{coinData.links.homepage}</a></p>
                    <br/>
                    <div className="coin-info">
                    <ul>
                        <li>Crypto Market Rank</li>
                        <li> #{coinData.market_cap_rank}</li>
                    </ul>
                    <ul>
                        <li>Current Price</li>
                        <li> $ {coinData.market_data.current_price.usd.toLocaleString()}</li>
                    </ul>
                    <ul>
                        <li>Market Cap</li>
                        <li> $ {coinData.market_data.market_cap.usd.toLocaleString()}</li>
                    </ul>
                    <ul>
                        <li>24 hour change</li>
                        <li className={coinData.market_data.price_change_percentage_24h > 0 ? "green" : "red"}
                        > { Math.floor(coinData.market_data.price_change_percentage_24h * 100)/100 }% </li>
                    </ul>
                    <ul>
                        <li>7 day change</li>
                        <li className={coinData.market_data.price_change_percentage_7d > 0 ? "green" : "red"}
                        > { Math.floor(coinData.market_data.price_change_percentage_7d * 100)/100 }% </li>
                    </ul>
                    <ul>
                        <li>30 day change</li>
                        <li className={coinData.market_data.price_change_percentage_30d > 0 ? "green" : "red"}
                        > { Math.floor(coinData.market_data.price_change_percentage_30d * 100)/100 }% </li>
                    </ul>
                    <ul>
                        <li>1 year change</li>
                        <li className={coinData.market_data.price_change_percentage_1y > 0 ? "green" : "red"}
                        > { Math.floor(coinData.market_data.price_change_percentage_1y * 100)/100 }% </li>
                    </ul>
                    <ul>
                        <li>24 hour high</li>
                        <li> $ {coinData.market_data.high_24h.usd.toLocaleString()}</li>
                    </ul>
                    <ul>
                        <li>24 hour low</li>
                        <li> $ {coinData.market_data.low_24h.usd.toLocaleString()}</li>
                    </ul>
                    </div>

                </div>
            </div>
        )
    }
    else {
        return (
            <div className="loading">
                <div className="spin">
                </div>
            </div>
        )
    }

}

export default Coin