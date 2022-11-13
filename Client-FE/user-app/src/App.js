import './App.css';

import { useState, useEffect } from 'react';

import Axios from 'axios';

function App() {

  const [getUserList, setUserList] = useState( [] );
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [username, setUserName] = useState("");

  useEffect(() => {
    Axios.get('http://localhost:3001/getUsers').then ((response) => {
      setUserList(response.data); 
    })
  }, []);

  const createUser = () => {
    Axios.post('http://localhost:3001/createUser', 
    {
      name, // Same as name: name,
      age, // Same as age: age,
      username // Same as username: username
    }).then ((response) => {
      alert( 'User Created' );
      setUserList( [...getUserList, {name, age, username}] )
    })
  };

  return (
    <div className="App">
      <div className="userDisplay">
        {
          getUserList.map( (user) => {
           return (
            <div>
                <h1> Name : {user.name} </h1>
                <h2> Age : {user.age} </h2>
                <h2> Username : {user.username} </h2>
            </div> 
           ); 
          })
        }
      </div>

      <div>
        <input type="text" placeholder='Name' onChange={ (event) => {setName(event.target.value)} } />
        <input type="number" placeholder='Age' onChange={ (event) => {setAge(event.target.value)} } />
        <input type="text" placeholder='userName' onChange={ (event) => {setUserName(event.target.value)} } />

        <button onClick={createUser}> Create User </button>
        
      </div>
    </div>
  );
}

export default App;
