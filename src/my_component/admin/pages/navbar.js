import React, { useState } from 'react'
import { Add_hre } from './Add_hre';
import { Home_admin } from './home';
import Hre_details from './hre_details';
import { Update } from './update_details';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

const btnStyle = {
  fontSize: "16px",
};

export const Dashboard_Admin = ({ adminId }) => {
  const [activeId, setActiveId] = useState('c1');

  const renderComponent = () => {
    switch (activeId) {
      case 'c1':
        return <Home_admin />;
      case 'c2':
        return <Add_hre />;
      case 'c3':
        return <Hre_details />;
      case 'c4':
        return <Update adminId={adminId}/>
      default:
        return null;
    }
  };

  return (
    <div>
      <div className='d-flex bg-primary py-2'>
        <ul class="nav w-100">
          <li class="nav-item">
            <a class="nav-link" onClick={() => setActiveId('c1')}>Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" onClick={() => setActiveId('c2')}>Add HR Executive</a>
          </li>
          <li class="nav-item">
            <a class="nav-link " onClick={() => setActiveId('c3')}>HR Details</a>
          </li>
          <li class="nav-item">
            <a class="nav-link " onClick={() => setActiveId('c4')}>Update Profile</a>
          </li>
          <li class="nav-item">
          <a class="nav-link" style={btnStyle} href="/admin"><FontAwesomeIcon icon={faSignOutAlt} /> Logout</a>
        </li>
        </ul>
      </div>
      {renderComponent()}
    </div>
  )
}
