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
              'x-cg-demo-api-key': 'CG-r6niR1noVmBu5S5vAvxheV6U	'
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
                    <p><b>{coinData.name}</b></p>
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