import React, { useState } from 'react';
import './App.css';
import Counter from './Counter';
import CounterHooks from './CounterHooks'; 
export const themeContext = React.createContext()
function App() {
  const [theme, setTheme] = useState('yellow')
  return (
    <>
    <themeContext.Provider value={{backgroundColor : theme}}>
    Counter
    <Counter initialCount ={1} />
    CounterHooks
    < CounterHooks initialCount ={10}  />
    <button onClick={ ()=> setTheme(prev =>{
      return prev ==='red'? 'blue':'red'})}>setTheme </button>
    </themeContext.Provider>
    
    </>
    
  );
}

export default App;
