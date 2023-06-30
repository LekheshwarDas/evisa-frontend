import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Application_status } from './application_status';
import { Apply_visa } from './apply_visa';
import { Home_user } from './home';
import { Profile } from './profile';
import { Visa_details } from './visa_details';
import Visa_renewal from '../Renewal/visa_renewal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

const btnStyle = {
  fontSize: "16px",
};

export const Dashboard_user = ({ user }) => {

  const [activeId, setActiveId] = useState('c1');
  const [formData, setFormData] = useState(null);
  useEffect(() => {
    const fetchApplicationData = async () => {
      try {
        const response = await axios.get(`https://evisa-backend-10ey.onrender.com/application/ack/${user.userId}`);
        setFormData(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchApplicationData();
  }, [user.userId]);

  const formId = formData && formData.personalInfo ? formData.personalInfo.formId : null;

  const [interview, setInterview] = useState(null);

  useEffect(() => {
    if (formId) {
      axios.get(`https://evisa-backend-10ey.onrender.com/interview/interviewDetails/${formId}`)
        .then(response => setInterview(response.data))
        .catch(error => console.log(error));
    }
  }, [formId]);

  const [visaDetails, setVisaDetails] = useState(null);

  useEffect(() => {
    if (formId) {
      axios.get(`https://evisa-backend-10ey.onrender.com/visa/approvedVisa/${formId}`).then((response) => {
        setVisaDetails(response.data);
      });
    }
  }, [formId]);

  const visaNo = visaDetails ? visaDetails.visaNo : null;
  const [arrival, setArrival] = useState(null);
  const [departure, setDeparture] = useState(null);

  useEffect(() => {
    if (visaNo) {
      axios.get(`https://evisa-backend-10ey.onrender.com/visa/arrival/${visaNo}`)
        .then(response => setArrival(response.data))
        .catch(error => console.log(error));
    }
  }, [visaNo]);

  useEffect(() => {
    if (visaNo) {
      axios.get(`https://evisa-backend-10ey.onrender.com/visa/departure/${visaNo}`)
        .then(response => setDeparture(response.data))
        .catch(error => console.log(error));
    }
  }, [visaNo]);

  const renderComponent = () => {
    switch (activeId) {
      case 'c1':
        return <Home_user />;
      case 'c2':
        return <Profile user={user} />;
      case 'c3':
        return <Apply_visa user={user} applicationData={formData}/>;
      case 'c4':
        return (
          <Visa_renewal
            user={user}
            visaNo={visaNo}
            setActiveId={setActiveId}
          />);
      case 'c5':
        return (
          <Application_status
            user={user}
            formData={formData}
            interview={interview}
            formId={formId}
          />);
      case 'c6':
        return (
          <Visa_details
            visaDetails={visaDetails}
            arrival={arrival}
            departure={departure}
          />);
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
            <a class="nav-link" onClick={() => setActiveId('c2')}>My Profile</a>
          </li>
          <li class="nav-item">
            <a class="nav-link " onClick={() => setActiveId('c3')}>Apply Visa</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" onClick={() => setActiveId('c4')}>Visa Renewal</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" onClick={() => setActiveId('c5')}>Application Status</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" onClick={() => setActiveId('c6')}>Visa Details</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" style={btnStyle} href="/user"><FontAwesomeIcon icon={faSignOutAlt} /> Logout</a>
          </li>
        </ul>
      </div>
      <div>
        {renderComponent()}
      </div>
    </div>
  )
}
