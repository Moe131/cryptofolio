import React from "react";
import "./Home.css"
import { Link } from "react-router-dom";
import { Amplify } from 'aws-amplify';
import { generateClient } from "aws-amplify/api"
import { listCoins, getCoin } from "../../graphql/queries";
import { createCoin , deleteCoin} from "../../graphql/mutations";
import addIcon from "../../assets/add.png"
import removeIcon from "../../assets/remove.png"
import adjustIcon from "../../assets/adjust.png"
import nextIcon from "../../assets/next.png"
import backIcon from "../../assets/back.png"





function Home(props){
    const [allCoins , setAllCoins ] = React.useState([]);
    const [displayCoins, setDisplay] = React.useState([]);
    const [editMode, setEditMode] = React.useState(false)
    const [userCoins, setUserCoins ] = React.useState();
    const [coinToAdd, setCoinToAdd]  = React.useState("");
    const [index, setIndex] = React.useState(0);
    const [input, setInput] = React.useState("");

    function fetchAll(){
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              'x-cg-demo-api-key': import.meta.env.VITE_API_KEY
            }
          };
          fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd', options)
            .then(response => response.json())
            .then(response => { setAllCoins(response);
                setDisplay( response);
            } )
            .catch(err => console.error(err));
    }


    React.useEffect(
        () => {
             fetchAll()
             if (props.isAuthenticated){
                fetchUserCoins()
             }
        }, [] )

    function handleChange(event){
        setInput(event.target.value)
        if (event.target.value === ""){
            setDisplay(allCoins)
        }
        else {
            setDisplay( allCoins.filter(
                (item) => { return item.name.toLowerCase().includes(event.target.value.toLowerCase())}
            ))
        }
    }

    function handleCoinsToAdd(event){
        setCoinToAdd(event.target.value)
    }

    function handleSubmit(event){
        event.preventDefault()
    }

    function getTop10(index){
        return displayCoins.slice(index*10, (index*10)+10)
    }

    async function fetchUserCoins(){
        try {
            const client = generateClient()
            const coinsData = await client.graphql( {query : listCoins, 
                variables: {
                filter: {
                    user: {eq : window.localStorage.getItem("user")}
                    }
                }
            } )

            const coins = coinsData.data.listCoins.items
            const hashMap = new Map()
            coins.forEach((c) => {
                hashMap.set(c.coinid, c.id);
              });
            setUserCoins( hashMap)
            if (hashMap.size === 0){
                setEditMode(true)
            }
        } catch(err){
            console.error(err)
        }
    }

    async function addUserCoin(coinToAdd){
        const client = generateClient()
        const res = await client.graphql( {query : createCoin,
            variables: {
                input: {
                    watchlist: "main",
                    user: window.localStorage.getItem("user"),
                    coinid: coinToAdd,
                }
            }
        } )
        fetchUserCoins()
    }
    
    async function deleteUserCoin(coinId){
        const client = generateClient()
        const res = await client.graphql( {query : deleteCoin,
            variables: {
                input: {
                    id : coinId,
                }
            }
        } )
        fetchUserCoins()
    }

    return (
        <div className="home">
            { props.isAuthenticated &&

                <div className="hero">
                    <div className="title-div">
                    <h1>Your Watchlist</h1>
                    <img className="adjust"  src={adjustIcon} onClick={() => setEditMode(!editMode)} />
                    </div>
                    <div className="crypto-table">
                        <div className="table-layout">
                            <p>#</p>
                            <p>Coins</p>
                            <p>Price</p>
                            <p>24H Change</p>
                            <p className="market-cap">Market Cap</p>
                        </div>
                        {userCoins ? 
                        allCoins.map( (coin, index) => {
                            if ( userCoins.has(coin.id) ) {
                                return (
                                    <div className={editMode ? "watchlist": "watchlist-hide"}  key={index}>
                                    <img className={editMode ? "remove" : "remove-hide"} src={removeIcon} onClick={() => deleteUserCoin(userCoins.get(coin.id))}/>
                                    <Link to={"/coin/"+coin.id} className="table-layout" > 
                                        <p> {coin.market_cap_rank} </p>
                                        <div className="logo-name"> 
                                            <img src={coin.image} alt = "Coin logo"/>
                                            <p> {coin.name + " - " + coin.symbol} </p>                        
                                        </div>
                                        <p> ${coin.current_price} </p>
                                        <p className={coin.price_change_percentage_24h > 0 ? "green" : "red"}
                                        > { Math.floor(coin.price_change_percentage_24h * 100)/100 }% </p>
                                        <p className="market-cap"> ${coin.market_cap.toLocaleString()} </p>
                                    </Link>
                                    </div>
                                    )
                                }
                            } ) 
                        : 
                        <div className="loading">
                            <div className="spin"></div>
                        </div>
                    }
                    <form className={editMode ? "add-form" : "add-form-hide"}>
                    <select className="add-select"onChange={handleCoinsToAdd} value={coinToAdd}>
                        <option value="">Select a Coin to Add</option>
                        {allCoins.map((coin) => { return  <option key={coin.id} value={coin.id}>{coin.name}</option> })}
                        </select>
                        <img className="add" src={addIcon} onClick={() => addUserCoin(coinToAdd)}/>   
                    </form>


                    </div>  
                </div>            
            }
            <div className="hero">
                <h1>Largest <br/> Crypto Coins by Market Capitalization</h1>
                <p>Track Your Favorite Cryptocurrencies: Create Custom Watchlists with Our Secure Crypto Tracking App 
                </p>
                <form className="hero-form" onSubmit={handleSubmit}>
                    <input onChange={handleChange} value={input} type="text" placeholder="Search Coin"  required/>
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
                {
                allCoins.length != 0 ? 
                getTop10(index).map( (coin, index) => {
                        return (
                        <Link to={"/coin/"+coin.id} className="table-layout" key={index}> 
                            <p> {coin.market_cap_rank} </p>
                            <div className="logo-name"> 
                                <img src={coin.image} alt = "Coin logo"/>
                                <p> {coin.name + " - " + coin.symbol} </p>                        
                            </div>
                            <p> ${coin.current_price} </p>
                            <p className={coin.price_change_percentage_24h > 0 ? "green" : "red"}
                            > { Math.floor(coin.price_change_percentage_24h * 100)/100 }% </p>
                            <p className="market-cap"> ${coin.market_cap.toLocaleString()} </p>
                        </Link>
                        )
                    } )
                :
                <div className="loading">
                <div className="spin"></div>
                </div>
                }
             </div>
             <div className="next">
                <img src={backIcon}/>
                 <img src={nextIcon}/>
             </div>
        </div>
    )
}

export default Home