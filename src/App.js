import React     from 'react';
import './App.css';
import UsersList from './components/UsersList';
import UserCard from './components/UserCard';

const testUser = {
  firstName: 'Test',
  lastName: 'Testovich',
  email: 'Test@gmail.com',
  profilePicture: null,
};

function App () {
  return (
    <UserCard user={testUser}/>
  );
}

export default App;
