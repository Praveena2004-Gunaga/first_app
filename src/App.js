import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Text from './components/Text';

import React, { useState } from 'react';
function App() {
  const [mode , setMode]=useState('dark');
  
 
  const handleToggle=(()=>{
if(mode==='light'){
  setMode('dark');
  document.body.style.backgroundColor="gray";
  document.body.style.color="white";
  
} else {
  setMode('light');
  document.body.style.backgroundColor="white";
  document.body.style.color="black";
  
}
  })
  return (

    <div>
      
      <Navbar mode={mode} handleToggle={handleToggle} />
      
      <Text mode={mode} />
      

    </div>
  );
}

export default App;
