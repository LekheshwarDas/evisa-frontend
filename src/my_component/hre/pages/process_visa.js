import React, { useState, useEffect } from 'react'
import axios from 'axios';
import '../../user/Application/form.css'
import brand from '../../../images/vIcon.png';
import brand2 from '../../../images/worldIcon.png';

const tdStyle = {
  border: '1px solid #ddd',
  padding: '8px',
  textAlign: 'center',
};

export const Process_visa = ({ user, setView }) => {

  const [payments, setPayments] = useState([]);

  const formId = user && user.personalInfo ? user.personalInfo.formId : null;
  const payId = payments && payments.response ? payments.response.razorpay_payment_id : null;

  useEffect(() => {
    if (formId) {
      axios.get(`https://evisa-backend-10ey.onrender.com/api/payment/${formId}`)
        .then(response => {
          setPayments(response.data);
        })
        .catch(error => {
          console.error(error);
        });
    }
  }, [formId]);

  function handleDate(event) {
    const date = new Date(event);
    const formattedDate = date.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    }).replace(/\//g, '-');
    return formattedDate;
  }

  const [files, setFiles] = useState(null);

  useEffect(() => {
    if (formId) {
      axios.get(`https://evisa-backend-10ey.onrender.com/application/files/${user.userId}`)
        .then(response => {
          setFiles(response.data);
        })
        .catch(error => {
          console.error(error);
        });
    }
  }, [user.userId]);

  const currentDate = new Date();

  return (
    <>
      <div className='form-container container my-5' id="content">
        <h4 className='text-center'>Applicant Details</h4><hr />
        <div className='d-flex justify-content-between mx-3'>
          <div style={{ width: '200px', height: '100px'}} >
          <img src={brand} alt='myBrand' style={{ width: '140px', height: '100px', marginTop: '15px', marginLeft: "15px" }} />
          </div>
          <div className='text-center'>
            <h1>eVisa Service</h1>
            <p><i>An Online Visa Processing<br /> & Follow-up System</i></p>
          </div>
          <img src={brand2} alt='myBrand' style={{ width: '200px', height: '100px', marginTop: '15px' }} />
        </div>

        <div className='d-flex justify-content-evenly'>
          <div className='text-center'>User ID: {user.userId}</div>
          <div className='text-center'>Application ID: {user.personalInfo.formId}</div>
        </div>
        <header className='bg-primary text-light my-2 p-2'>Personal Details</header>
        <div className='row mb-2 text-center'>
          <div className='col'>
            First Name: <b>{user.personalInfo.firstname}</b>
          </div>
          <div className='col'>
            Last Name: <b>{user.personalInfo.lastname}</b>
          </div>
        </div>
        <div className='row mb-2 text-center'>
          <div className='col'>
            Father's Name: <b>{user.personalInfo.fatherName}</b>
          </div>
          <div className='col'>
            Mother's Name: <b>{user.personalInfo.motherName}</b>
          </div>
        </div>
        <div className='row mb-2 text-center'>
          <div className='col'>
            Gender: <b>{user.personalInfo.gender}</b>
          </div>
          <div className='col'>
            Date of Birth: <b>{handleDate(user.personalInfo.dateOfBirth)}</b>
          </div>
        </div>
        <div className='row mb-2 text-center'>
          <div className='col'>
            Email ID: <b>{user.personalInfo.email}</b>
          </div>
          <div className='col'>
            Mobile Number: <b>{user.personalInfo.phone}</b>
          </div>
        </div>

        <header className='bg-primary text-light my-2 p-2'>Address Details</header>
        <h5>Permanant Address</h5><hr />
        <div className='row mb-2 text-center'>
          <div className='col'>
            <b>{user.permanentAddress.addressline1}, {user.permanentAddress.addressline2}</b>
          </div>
          <div className='col'>
            <b>{user.permanentAddress.city}, {user.permanentAddress.state}, {user.permanentAddress.country}</b>
          </div>
        </div>

        <h5>Present Address</h5><hr />
        <div className='row mb-2 text-center'>
          <div className='col'>
            <b>{user.currentAddress.addressline1}, {user.currentAddress.addressline2}</b>
          </div>
          <div className='col'>
            <b>{user.currentAddress.city}, {user.currentAddress.state}, {user.currentAddress.country}</b>
          </div>
        </div>

        <header className='bg-primary text-light my-2 p-2'>Travel Details</header>
        <h5>Passport Information</h5><hr />
        <div className='row mb-2 text-center'>
          <div className='col'>
            Passport Number: <b>{user.passportInfo.passport}</b>
          </div>
          <div className='col'>
            Date of Issue: <b>{handleDate(user.passportInfo.issue)}</b>
          </div>
        </div>
        <div className='row mb-2 text-center'>
          <div className='col'>
            Date of Expiration: <b>{handleDate(user.passportInfo.expiration)}</b>
          </div>
          <div className='col'>
            Country of Issuance: <b>{user.passportInfo.issuance}</b>
          </div>
        </div>
        <h5>Travel Information</h5><hr />
        <div className='row mb-2 text-center'>
          <div className='col'>
            Purpose of Trip:: <b>{user.travelInfo.purpose}</b>
          </div>
          <div className='col'>
            Intended Length of Stay: <b>{user.travelInfo.stay}</b>
          </div>
        </div>
        <div className='col mb-2 text-center w-50'>
          Applied Country: <b>{user.travelInfo.appliedCountry}</b>
        </div>
        <p className='mx-5'><u><b>Dates of Intended Travel</b></u></p>
        <div className='row mb-2 text-center'>
          <div className='col'>
            Departure Date: <b>{handleDate(user.travelInfo.departure)}</b>
          </div>
          <div className='col'>
            Arrival Date: <b>{handleDate(user.travelInfo.arrival)}</b>
          </div>
        </div>

        <header className='bg-primary text-light my-2 p-2'>Fee Payment</header>
        <div className='d-grid justify-content-center w-100'>
          {!(payments === null) ? (
            <table className='table border border-2 m-3'>
              <tr className='border'>
                <td className='border px-3 py-1 bg-light'>Transaction Date</td>
                <td className='px-3 w-100'>{handleDate(payments.paidTime)}</td>
              </tr>
              <tr className='border'>
                <td className='border px-3 py-1 bg-light'>Amount</td>
                <td className='px-3'>{payments.amount} {payments.currency}</td>
              </tr>
              <tr className='border'>
                <td className='border px-3 py-1 bg-light'>Transaction Id</td>
                <td className='px-3'>
                  {
                    (payId) ? <>{payId}</> : console.log("No data")
                  }
                </td>
              </tr>
              <tr className='border'>
                <td className='border px-3 py-1 bg-light'>Transaction Status</td>
                <td className='px-3 text-success'><b>Paid</b></td>
              </tr>
            </table>
          )
            : <p className='m-3'>No Payment Available</p>
          }
        </div>



        <header className='bg-primary text-light my-2 p-2'>Declaration</header>
        <div className='m-3'>
          I, {user.personalInfo.firstname + ' ' + user.personalInfo.lastname}, hereby declare that:
          <br />&nbsp; 1. I have completed the visa application form and provided all required documents.

          <br />&nbsp; 2. All information provided in the visa application form and supporting documents is true and correct &nbsp;to the best of my knowledge.

          <br />&nbsp; 3. I understand that any false statements or misrepresentations in my visa application may result in the &nbsp;rejection of my application, as well as other legal consequences.
          <br />
          <br />  I understand and agree to the above terms and conditions.
          <br />
          <br />  Date: {handleDate(currentDate)}
          <br />
        </div>
        <div className='text-end text-primary'>
          Signed: {user.personalInfo.firstname + ' ' + user.personalInfo.lastname}
        </div>

      </div>

      <center>
        <button type="button" class="btn btn-sm btn-outline-secondary my-3 px-3" onClick={() => setView(false)}>Back</button>
      </center>
    </>
  )
}
