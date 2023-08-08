import React from 'react';
import AddUser from './components/AddUser';
import { useState } from 'react';
import Cards from './UI/Cards';
import UsersList from './components/UsersList';

function App() {
  const [usernameInput, setUsernameInput] = useState('');
  const [ageInput, setAgeInput] = useState('');
  const [users, setUsers] = useState([]);
  function handleSubmit(e){
    e.preventDefault();
    if(ageInput<0){
      console.log("Age cannot be negative");
    }
    else if(usernameInput.trim().length == 0 || ageInput.trim().length ==0){
      console.log("Username and age cannot be empty");
    }
    else{
      setUsers([...users,`${usernameInput}(${ageInput})`]);
      console.log(users);
    }
    setUsernameInput('');
    setAgeInput('');
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
    <>
    <div className='flex flex-col bg-black h-screen items-center'>
      <AddUser 
      onSubmut = {handleSubmit}
      username = {usernameInput}
      age = {ageInput}
      handleUsernameChange = {handleUsernameChange}
      handleAgeChange = {handleAgeChange}
      />
      {users.length>0 && <UsersList users={users}/>}
    </div>
    </>
  );
}

export default App;
