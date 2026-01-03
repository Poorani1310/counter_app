import Counter from './components/Counter';
import './App.css';
import { useState } from 'react';

function App() {
  
  const [counter, setCounter] = useState(0);

  const inc_cntr = () => {
    setCounter(counter + 1 );
  }
  
  const dec_cntr = () => {
    setCounter(counter - 1 );
  }
  
  const reset_cntr = () => {
    setCounter(0);
  }

  return (
    <div className='App'>
      <Counter counter={counter} inc_cntr={inc_cntr} dec_cntr={dec_cntr} reset_cntr={reset_cntr}/>
    </div>    
  );
}

export default App;
