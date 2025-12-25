import { useEffect, useState } from 'react'
import Card from "./components/Card"

function App() {
  
  const emo = [
    "1","2","3","4","5","6","7","8","1","2","3","4","5","6","7","8"
  ];

  const [cards, setCards] = useState([]);

  const initCards = () => {
    const finalCards = emo.map((value, index) => (
      {
        id : index,
        value,
        isFlipped : false,
        isMatched : false,
      }
    ))
    setCards(finalCards);
  };

  useEffect(() => {
    initCards();
  }, []);

  const handleClick = (id) => {
    const newCards = cards.map((c) => {
      if(c.id === id){
        return {...c,isFlipped: true};
      }
      else{
        return c;
      }
    })
    setCards(newCards);
  }

  return (
    <div className='app'>
      <div className='cards'>
        {cards.map((card) => (
          <Card card = {card} key = {card.id} handleClick={handleClick}/>
        ))}
      </div>
    </div>
  )
}

export default App
