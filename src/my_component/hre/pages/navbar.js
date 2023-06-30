import React, { useState } from 'react'
import Approve from './approve_user';
import { Home_hr } from './home';
import { Interview } from './interview';
import { Onsite_details } from './onsite_details';
import { Reports_hr } from './reports';
import User_details_hr from './user_details';
import { Visa_applications_hr } from './visa_application';
import { Visa_status_hr } from './visa_status';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCalendar, faEnvelope, faPhone, faMapMarker } from '@fortawesome/free-solid-svg-icons';

const cardStyle = {
  marginTop: '20px',
  paddingTop: '30px',
  height: 'fit-content',
  width: '250px',
  boxShadow: '0 2px 4px rgb(0 0 0 / 10%), 0 8px 16px rgb(0 0 0 / 10%)',
};

const imgStyle = {
  border: "1px solid black",
  width: '70px',
  height: '90px',
  borderRadius: '60px',
  marginBottom: '20px'
};

export const Dashboard_hr = ({ user }) => {

  const base64 = btoa(
    String.fromCharCode(...new Uint8Array(user.profilePhoto.data.data))
  );

  const date = new Date(user.dateOfBirth);
  const formattedDate = date.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  }).replace(/\//g, '-');

  const [activeId, setActiveId] = useState('c1');

  const renderComponent = () => {
    switch (activeId) {
      case 'c1':
        return <Home_hr user={user} />;
      case 'c2':
        return <Approve />;
      case 'c3':
        return <User_details_hr />;
      case 'c4':
        return <Visa_applications_hr />;
      case 'c5':
        return <Interview hre={user}/>;
      case 'c6':
        return <Visa_status_hr />;
      case 'c7':
        return <Onsite_details />;
      case 'c8':
        return <Reports_hr />;
      default:
        return null;
    }
  };

  return (
    <div>
      <div className='d-flex bg-primary py-2'>
        <ul class="nav w-100">
          <li class="nav-item">
            <a class="nav-link text-center" onClick={() => setActiveId('c1')}>Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-center" onClick={() => setActiveId('c2')}>Approve Users</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-center " onClick={() => setActiveId('c3')}>User Details</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-center" onClick={() => setActiveId('c4')}>Visa Applications</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-center" onClick={() => setActiveId('c5')}>Interview</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-center" onClick={() => setActiveId('c6')}>Visa Status</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-center" onClick={() => setActiveId('c7')}>Onsite Details</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-center" onClick={() => setActiveId('c8')}>Reports</a>
          </li>
        </ul>

      </div>
      <div className='d-flex'>
        <div style={cardStyle}>
          <h6 className='text-center'>Executive Id: {user.hrId}</h6>
          
          <center><img src={`data:image/*;base64,${base64}`} alt='this is user' style={imgStyle} /></center>
          <div className='row-3 ps-2'>
            <div className='col text-small py-1 border-top'><FontAwesomeIcon icon={faUser} className='mx-2'/> {user.firstname} {user.lastname}</div>
            <div className='col text-small py-1 border-top'><FontAwesomeIcon icon={faEnvelope} className='mx-2'/> {user.email}</div>
            <div className='col text-small py-1 border-top'> <FontAwesomeIcon icon={faPhone} className='mx-2'/> {user.phone}</div>
            <div className='col text-small py-1 border-top'><FontAwesomeIcon icon={faCalendar} className='mx-2'/>  {formattedDate}</div>
            <div className='col text-small py-1 border-top'><FontAwesomeIcon icon={faMapMarker} className='mx-2'/> {user.city}, {user.country}</div>
          </div>

          <a type='button' className='btn btn-secondary rounded-0 w-100 btn-sm' href='/hre'>Logout</a>
        </div>
        <div className='w-100'>
          {renderComponent()}
        </div>
      </div>

    </div>
  )
}
