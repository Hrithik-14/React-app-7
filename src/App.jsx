import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    
    fetch('https://dummyjson.com/quotes')
      .then(response => response.json())
      .then(data => {
        
        const first10Quotes = data.quotes.slice(0, 10);
        setQuotes(first10Quotes);
      })
      .catch(error => console.error('Error fetching quotes:', error));
  }, []); 

  return (
    <div className="App">
      <h1>Top 10 Quotes</h1>
      {quotes.map((quote, index) => (
        <h1 key={quote.id}>{`${index + 1}. ${quote.quote} - ${quote.author}`}</h1>
      ))}
    </div>
  );
}

export default App;