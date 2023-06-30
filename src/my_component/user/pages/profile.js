import React from 'react';

export const Profile = ({ user }) => {

  const date = new Date(user.dateOfBirth);
  const formattedDate = date.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  }).replace(/\//g, '-');

  return (
    <div className='frame'>
      <div className='m-5 container text-center'>
        <h3>USER INFORMATION</h3><hr/>
        <p className='mb-2 ms-2'>USER ID: {user.userId}</p>
        <header className='bg-secondary text-white mb-3'>Personal Details</header>
        <div className='row mb-2 mt-2'>
          <div className='col'>
            First Name: <b>{user.firstname}</b>
          </div>
          <div className='col'>
            Last Name: <b>{user.lastname}</b>
          </div>
        </div>
        <div className='row mb-2'>
          <div className='col'>
            Father's Name: <b>{user.fatherName}</b>
          </div>
          <div className='col'>
            Mother's Name: <b>{user.motherName}</b>
          </div>
        </div>
        <div className='row mb-2'>
          <div className='col'>
            Gender: <b>{user.gender}</b>
          </div>
          <div className='col'>
            Date of Birth: <b>{formattedDate}</b>
          </div>
        </div>
        <div className='row mb-2'>
          <div className='col'>
            Email ID: <b>{user.email}</b>
          </div>
          <div className='col'>
            Mobile Number: <b>{user.phone}</b>
          </div>
        </div>
      </div>

    </div>

  )
}
