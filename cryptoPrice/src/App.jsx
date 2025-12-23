import { useEffect, useState } from "react"
import Axios from "axios"
import Coin from "./Coin";

function App() {

  const [listOfCoins, setListOfCoins] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("Useeffect called");

    Axios.get("https://api.coinlore.net/api/tickers/")
      .then((response) => {
        setListOfCoins(response.data.data);
        console.log(response.data.data[0])
        setLoading(false);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
      
    }, []);

  return (
    <div className='App'>
      <div className='CryptoHeader'></div>
      <div className='CryptoMain'>
        {(!loading) && listOfCoins.slice(0,10).map((coin) => {
          return(
            <Coin key={coin.id} obj={coin} />
          )
        })}
      </div>
    </div>
  )
}

export default App
