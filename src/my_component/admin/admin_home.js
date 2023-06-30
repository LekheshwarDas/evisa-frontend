import React, {useState} from 'react'
import { Dashboard_Admin } from './pages/navbar';
import { Login } from './pages/login';
export const Admin = () => {
  const [Loggedin, setLoggedin] = useState(false);
  const [adminId, setId] = useState('');

  return (
    <div>
      {
        Loggedin?<Dashboard_Admin adminId={adminId}/>:<Login setLoggedin={setLoggedin} setId={setId}/>
      }
    </div>
  )
}
