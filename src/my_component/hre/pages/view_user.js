import React from 'react';


export const HomeUser = ({ user, view }) => {

  function capitalizeWords(str) {
    const words = str.split(" ");
    const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
    return capitalizedWords.join(" ");
  }

  const date = new Date(user.dateOfBirth);
  const formattedDate = date.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  }).replace(/\//g, '-');

  return (
    <div className='m-5 container text-center'>
    
        <h3 className='text-center'>USER INFORMATION</h3><hr className='bg-dark' />
        <div className='mb-2 ms-2'>USER ID: {user.userId}</div>
        <header className='bg-primary text-white px-2'>Personal Details</header>
        <div className='container'>
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
        <center><button type='button' className='btn btn-sm px-3 btn-secondary' onClick={() => view(false)}>Back</button></center>

      </div>
  )
}
