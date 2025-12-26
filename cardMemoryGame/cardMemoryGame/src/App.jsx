import { useEffect, useState } from 'react'
import Card from "./components/Card"
import Header from "./components/Header"

function App() {
  
  const emo = [
    "1","2","3","4","5","6","7","8","1","2","3","4","5","6","7","8"
  ];

  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);

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


  const handleClick = (card) => {
    if (card.isFlipped || card.isMatched || flipped.length === 2)
      return;

    const newCards = cards.map(c =>
      c.id === card.id ? { ...c, isFlipped: true } : c
    );

    if (flipped.length === 0) {
      setCards(newCards);
      setFlipped([card.id]);
      return;
    }

    if (flipped.length === 1) {
      const firstCard = cards.find(c => c.id === flipped[0]);

      if (firstCard.value === card.value) {
        const matchedCards = newCards.map(c =>
          c.id === firstCard.id || c.id === card.id
            ? { ...c, isMatched: true }
            : c
        );
        setCards(matchedCards);
      } else {
        setTimeout(() => {
          const flippedBack = newCards.map(c =>
            c.id === firstCard.id || c.id === card.id
              ? { ...c, isFlipped: false }
              : c
          );
          setCards(flippedBack);
        }, 80);
      }

      setFlipped([]);
    }
  };


  return (
    <div className='app'>
      <div>
        <Header/>
      </div>
      <div className='cards'>
        {cards.map((card) => (
          <Card card = {card} key = {card.id} handleClick={handleClick}/>
        ))}
      </div>
    </div>
  )
}

export default App
