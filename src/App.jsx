import React from 'react';
import Navbar from './components/Navbar';
import Card from './components/Card';
import './App.css';
import data from './data';

function App() {
  const cardList = data.map((card) => <Card card={card} key={card.id} />);

  return (
    <div className='App'>
      <Navbar />
      <section>{cardList}</section>
    </div>
  );
}

export default App;
