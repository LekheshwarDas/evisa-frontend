import React, { useState, useEffect } from 'react';

export const HomeHr = ({ user,view }) => {

  const base64 = btoa(
    String.fromCharCode(...new Uint8Array(user.profilePhoto.data.data))
  );

  function capitalizeWords(str) {
    const words = str.split(" ");
    const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
    return capitalizedWords.join(" ");
  }

  const FullName = user.firstname + ' ' + user.lastname;

  const date = new Date(user.dateOfBirth);
  const formattedDate = date.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  }).replace(/\//g, '-');



  return (
    <div className='m-5'>
      <div className='container m-1 mx-5 px-5 w-100'>
        <h3>HR Information</h3><hr className='bg-dark'/>
        <div className='d-flex m-3'>
          <img src={`data:image/*;base64,${base64}`} alt='this is user' style={{ border: "2px solid rgb(255, 102, 102)", borderRadius: '5%', width: '10%', marginRight: '50px' }} />
          <div className='pt-4'>
            <h5>{capitalizeWords(FullName)}</h5>
            <h6>ID: {user.hrId}</h6>
          </div>
        </div><hr />

        <header className='bg-primary text-white px-2'>Personal Details</header>
        <div className='row-5 d-flex m-3 px-3 justify-content-between'>
          <tbody>
            <tb>
              <p>Father's Name: <b>{capitalizeWords(user.fatherName)}</b></p>
            </tb>
            <tb>
              <p>Mother's Name: <b>{capitalizeWords(user.motherName)}</b></p>
            </tb>
            <tb><p>Date of Birth: <b>{formattedDate}</b></p></tb>
          </tbody>
          <tbody className='me-5'>
            <tb >
              <p>Gender: <b>{capitalizeWords(user.gender)}</b></p>
            </tb>
            <tb>
              <p>Mobile No: <b>{user.phone}</b></p>
            </tb>
            <tb>
              <p>E-mail ID: <b>{user.email}</b></p>
            </tb>

          </tbody>
        </div>

        <header className='bg-primary text-white px-2'>Contact Details</header>

        <div className='row-5 d-flex m-3 px-3 justify-content-between'>
          <tbody>
            <tb>
              <p>Address Line-1: <b>{capitalizeWords(user.addressLine1)}</b></p>
            </tb>
            <tb>
              <p>City: <b>{user.city}</b></p>
            </tb>
            <tb>
              <p>Country: <b>{user.country}</b></p>
            </tb>
          </tbody>
          <tbody className='me-1'>

            <tb>
              <p>Address Line-2: <b>{capitalizeWords(user.addressLine2)}</b></p>
            </tb>
            <tb>
              <p>State: <b>{user.state}</b></p>
            </tb>
            <tb>
              <p>Postcode: <b>{user.pincode}</b></p>
            </tb>
          </tbody>
        </div>
      </div>
      <center><button type='button' className='btn btn-sm px-2 btn-secondary' onClick={()=>view(false)}>Back</button></center>
    </div>
  )
}
