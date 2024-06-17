import React from "react";
import "./Home.css"


function Home(){
    const [allCoins , setAllCoins ] = React.useState([]);

    React.useEffect( () => {
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              'x-cg-demo-api-key': 'CG-r6niR1noVmBu5S5vAvxheV6U	'
            }
          };
          fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd', options)
            .then(response => response.json())
            .then(response => setAllCoins( (prev) => { return response}))
            .catch(err => console.error(err));
    }, [])

    return (
        <div className="home">
            <div className="hero">
                <h1>Largest <br/> Crypto Coins by Market Capitalization</h1>
                <p>Welcome to the world's largest cryptocurrency marketplace.
                    Sign up to explore more about cryptos. 
                </p>
                <form>
                    <input type="text" placeholder="Search Coin" />
                    <button type="submit">Search</button>
                </form>
            </div>
            <div className="crypto-table">
                <div className="table-layout">
                    <p>#</p>
                    <p>Coins</p>
                    <p>Price</p>
                    <p>24H Change</p>
                    <p className="market-cap">Market Cap</p>
                </div>
                {allCoins.map( (coin, index) => {
                        return <div className="table-layout" key={index}> 
                            <p> {index+1} </p>
                            <p> {coin.name} </p>                        
                            <p> {coin.current_price} </p>
                            <p> {coin.price_change_24h} </p>
                            <p className="market-cap"> {coin.market_cap} </p>
                        </div>
                    } )}
            </div>
        </div>
    )
}

export default Home