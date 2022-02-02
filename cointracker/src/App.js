import { useEffect, useState } from 'react';




function App() {
  const [loading, setloding] = useState(true);
  const [coins, setcoins] = useState([])
  useEffect(()=>{
    fetch ("https://api.coinpaprika.com/v1/tickers")
    .then((res) => res.json())
    .then((json) => {
      setcoins(json);
      setloding(false);
      }
    )
  },[])

  return (
    <div>
      <h1>Coin Price!</h1>
      {loading ? <strong>"is Loding"</strong> : null}
      <ul>
      {coins.map((el) =>
            <li key ={el.id}>{el.name} ({el.symbol}) : {el.quotes.USD.price} USD </li>
          )
        }
      </ul>
      
    </div>
  );
}

export default App;
