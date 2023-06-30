import React, {useState} from 'react'
import { Dashboard_user } from './pages/navbar';
import { Login } from './pages/login';
import { Register } from './pages/register';
export const User = () => {
  const [Loggedin, setLoggedin] = useState(false)
  const [Registered, setRegistered] = useState(false)
  const [selectedUser, setSelectedUser] = useState([])
  
  const handleSignup = (e) => {
    e.preventDefault();
    setRegistered(true);
  }

  return (
    <div>
      {!Loggedin && !Registered && (<Login setLoggedin={setLoggedin} handleSignup={handleSignup} setSelectedUser={setSelectedUser}/>)}
      {Loggedin && (<Dashboard_user user={selectedUser}/>)}
      {Registered && (<Register setLoggedin={setLoggedin} setRegistered={setRegistered}/>)}
    </div>
  )
}
