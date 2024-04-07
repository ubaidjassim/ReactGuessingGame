import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Result from './Result';

const secretNum = Math.floor(Math.random() * 10) + 1

function App() {
  const [term, setTerm] = useState("")

  const handleChange = (e) => {
    setTerm(e.target.value)
  }

  console.log(term);

  return (
    <div className="container">
      <div className='head'>
        <label htmlFor='forText'>Guess the number from 1 to 10 (answer: {secretNum})</label>
      </div>
      <input
        type='text'
        id='forText'
        name='term'
        onChange={handleChange}
      />
      <Result secretNum={secretNum} term={term} />
    </div>
  );
}

export default App;
