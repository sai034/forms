import React, { useState, createContext } from 'react';
import './App.css';
import NormalForm from './components/NormalForm';
import AntDesignForm from './components/AntDesignForm';
// import TableWithContext from './components/TableWithContext';



function App() {
 const [ button1Click,setButton1Click ] = useState(false); 
 const [ button2Click,setButton2Click ] = useState(false); 
  const handleButton1Click = () => {
    setButton1Click(true)
    setButton2Click(false)
}
const handleButton2Click = () => {
 setButton1Click(false)
 setButton2Click(true)
}


  return (
    <div className="App">
      <div>
   <button onClick={handleButton1Click}>Normal Form</button>
   <button onClick={handleButton2Click}>Ant Design Form</button>
   <br />
   <br />
      {button1Click && <NormalForm />}
      {button2Click && <AntDesignForm />}
    </div>
    </div>
  );

}
export default App;
