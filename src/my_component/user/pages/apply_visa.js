import React, { useState } from 'react';
import axios from 'axios';
import { First } from '../Application/First';
import { Second } from '../Application/Second';
import { Third } from '../Application/Third';
import { Forth } from '../Application/Forth';
import {PaymentComponent}  from '../Application/PaymentComponent';

export const Apply_visa = ({ user }) => {

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});

  const handleNext = (data) => {
    setFormData({ ...formData, ...data });
    setStep(step + 1);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const fileData = new FormData();
    fileData.append('financial',formData.financial);
    fileData.append('passportFile',formData.passportFile);
    fileData.append('photo',formData.photo);
    fileData.append('signature',formData.signature);
    fileData.append('currentaddressLine1',formData.personalInfo.current.addressLine1);
    fileData.append('currentaddressLine2',formData.personalInfo.current.addressLine2);
    fileData.append('currentpincode',formData.personalInfo.current.pincode);
    fileData.append('currentcity',formData.personalInfo.current.city);
    fileData.append('currentstate',formData.personalInfo.current.state);
    fileData.append('currentcountry',formData.personalInfo.current.country);
    fileData.append('permanentaddressLine1',formData.personalInfo.permanent.addressLine1);
    fileData.append('permanentaddressLine2',formData.personalInfo.permanent.addressLine2);
    fileData.append('permanentpincode',formData.personalInfo.permanent.pincode);
    fileData.append('permanentcity',formData.personalInfo.permanent.city);
    fileData.append('permanentstate',formData.personalInfo.permanent.state);
    fileData.append('permanentcountry',formData.personalInfo.permanent.country);
    fileData.append('firstname',formData.personalInfo.firstname);
    fileData.append('lastname',formData.personalInfo.lastname);
    fileData.append('fatherName',formData.personalInfo.fatherName);
    fileData.append('motherName',formData.personalInfo.motherName);
    fileData.append('gender',formData.personalInfo.gender);
    fileData.append('dateOfBirth',formData.personalInfo.dateOfBirth);
    fileData.append('phone',formData.personalInfo.phone);
    fileData.append('email',formData.personalInfo.email);
    fileData.append('passport',formData.travelDetails.passport);
    fileData.append('issue',formData.travelDetails.issue);
    fileData.append('expiration',formData.travelDetails.expiration);
    fileData.append('issuance',formData.travelDetails.issuance);
    fileData.append('purpose',formData.travelDetails.purpose);
    fileData.append('appliedCountry',formData.travelDetails.appliedCountry);
    fileData.append('stay',formData.travelDetails.stay);
    fileData.append('departure',formData.travelDetails.departure);
    fileData.append('arrival',formData.travelDetails.arrival);
    fileData.append('occupation',formData.travelDetails.occupation);
    fileData.append('salary',formData.travelDetails.salary);
    fileData.append('employerName',formData.travelDetails.employerName);
    fileData.append('address',formData.travelDetails.address);
    fileData.append('income',formData.travelDetails.income);
    fileData.append('savings',formData.travelDetails.savings);
    fileData.append('assets',formData.travelDetails.assets);
    try {
      const result = await axios.post("https://evisa-backend-10ey.onrender.com/application/addApplicant", fileData);
      alert(result.data.message);
      setStep(5);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div style={{ minHeight: "450px" }}>
      <div>
        <ul class="nav w-100 py-3 justify-content-center">
          <li class="nav-item">

            {
              !(step === 1) ? <a class="nav-link nav-link-sm bg-dark px-5">Personal Info</a>
                : <a class="nav-link nav-link-sm bg-success px-5" >Personal Info</a>
            }
          </li>

          <li class="nav-item">
            {
              !(step === 2) ? <a class="nav-link nav-link-sm bg-dark px-5">Travel Details</a>
                : <a class="nav-link nav-link-sm bg-success px-5">Travel Details</a>

            }
          </li>
          <li class="nav-item">
            {
              !(step === 3) ? <a class="nav-link nav-link-sm bg-dark px-5 ">Upload Document</a>
                : <a class="nav-link nav-link-sm bg-success px-5 " >Upload Document</a>
            }
          </li>
          <li class="nav-item">
            {
              !(step === 4) ? <a class="nav-link nav-link-sm bg-dark px-5">Declaration</a>
                : <a class="nav-link nav-link-sm bg-success px-5" >Declaration</a>

            }
          </li>
          <li class="nav-item">
            {
              !(step === 5) ? <a class="nav-link nav-link-sm bg-dark px-5" onClick={()=>setStep(5)}>Payment</a>
                : <a class="nav-link nav-link-sm bg-success px-5" >Payment</a>

            }
          </li>
        </ul>

        <div>
          {step === 1 && <First onNext={handleNext} user={user} />}
          {step === 2 && <Second onNext={handleNext} />}
          {step === 3 && <Third onNext={handleNext} />}
          {step === 4 && <Forth onNext={handleNext} formData={formData} handleSubmit={handleSubmit} user={user} />}
          {step === 5 && <PaymentComponent user={user} />}
        </div>

      </div>
    </div>
  )
}
