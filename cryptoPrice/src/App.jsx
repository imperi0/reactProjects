import { useEffect, useState } from "react"
import Axios from "axios"
import Coin from "./Coin";
import Header from "./Header"

function App() {

  const [listOfCoins, setListOfCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  const filteredList = listOfCoins.filter((coin) => {
    return coin.name.toLowerCase().includes(search.toLowerCase());
  })

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
      <div className='CryptoHeader'>
        <Header setSearch={setSearch}/>
      </div>
      <div className='CryptoMain'>
        {(!loading) && filteredList.map((coin) => {
          return(
            <Coin key={coin.id} obj={coin} />
          )
        })}
      </div>
    </div>
  )
}

export default App
