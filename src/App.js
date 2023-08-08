import React from 'react';
import AddUser from './components/AddUser';
import { useState } from 'react';
import Cards from './UI/Cards';
import UsersList from './components/UsersList';
import ErrorModal from './components/ErrorModal';
function App() {
  const [usernameInput, setUsernameInput] = useState('');
  const [ageInput, setAgeInput] = useState('');
  const [users, setUsers] = useState([]);
  const [error, setError] = useState();
  function handleSubmit(e){
    e.preventDefault();
    if(ageInput<0){
      setError({title:'Invalid age', message:'Please enter a valid age > 0'})
    }
    else if(usernameInput.trim().length == 0 || ageInput.trim().length ==0){
      setError({title:'Invalid input', message:'Please enter a valid name'})
    }
    else{
      setUsers([...users,`${usernameInput}(${ageInput})`]);
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
  function handleError() {
    setError(null);
  }

  return (
    <>
    <div className='flex flex-col bg-black h-screen items-center'>
    {error && <ErrorModal title={error.title} message={error.message} onError={handleError}></ErrorModal> }
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
