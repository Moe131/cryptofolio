import React from "react";
import { useParams } from "react-router-dom";
import "./Coin.css"
import Tradingview from "./TradingViewWidget";


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
                    <h2>{coinData.name}</h2>
                    <span>{coinData.symbol.toUpperCase()}</span>
                </div>
                <div className="coin-details">
                    <h1> $ {coinData.market_data.current_price.usd.toLocaleString()}</h1>
                    <div className="coin-info">
                    <div className="chart">
                        <Tradingview  symbol={coinData.symbol.toUpperCase()} />
                    </div>
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
                    <br />
                    <h2>About {coinData.name} </h2>
                    <br />
                    <p dangerouslySetInnerHTML={{__html: coinData.description.en}}></p>
                    <br />
                    <p> Website : <a href={coinData.links.homepage[0]}>{coinData.links.homepage[0]}</a></p>
                    <br />
                </div>
                <a className="buy-button" href={coinData.tickers[3].trade_url}>Buy {coinData.name} Now</a>
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