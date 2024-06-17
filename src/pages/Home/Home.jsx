import React from "react";
import "./Home.css"

function Home(){
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
        </div>
    )
}

export default Home