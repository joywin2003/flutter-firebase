import React from 'react';
import AddUser from './components/AddUser';
import { useState } from 'react';
function App() {
  const [usernameInput, setUsernameInput] = useState('');
  const [ageInput, setAgeInput] = useState('');


  function handleSubmit(e){
    e.preventDefault();
    if(ageInput<0){
      console.log("Age cannot be negative");
    }
  }
  function handleUsernameChange(e) {
    setUsernameInput(e.target.value);
    console.log("Username: ", e.target.value);
  }
  function handleAgeChange(e) {
    setAgeInput(e.target.value);
    console.log("Age: ", e.target.value);
  }

  return (
    <div className='bg-black h-screen flex'>
      <AddUser 
      onSubmut = {handleSubmit}
      username = {usernameInput}
      age = {ageInput}
      handleUsernameChange = {handleUsernameChange}
      handleAgeChange = {handleAgeChange}
      />
    </div>
  );
}

export default App;
