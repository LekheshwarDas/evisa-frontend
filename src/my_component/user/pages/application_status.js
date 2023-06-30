import React, { useState, useEffect } from 'react'
import axios from 'axios';
import moment from 'moment';
import '../../../App.css'
import { Ack } from '../Application/Ack';
const tableStyle = {
  borderCollapse: 'collapse',
  width: '100%',
  marginTop: '20px',
  fontSize: "14px",
};

const thStyle = {
  border: '1px solid #ddd',
  fontWeight: '500',
  padding: '8px',
  textAlign: 'center',
};

const tdStyle = {
  border: '1px solid #ddd',
  padding: '8px',
  textAlign: 'center',
};

const btnStyle = {
  fontSize: "14px",
};

export const Application_status = ({ user, formData, interview, formId }) => {

  const Attend = async (event) => {
    event.preventDefault();
    if (formId) {
      try {
        const result = await axios.post(`https://evisa-backend-10ey.onrender.com/interview/attend/${formId}`);
        alert(result.data.message);
      } catch (error) {
        console.error(error);
      }
    }
  }
  const [view, setView] = useState(false);
  const [selectedUser, setSelectedUser] = useState([])
  const viewDetails = (user) => {
    setSelectedUser(user);
    setView(true);
  }

  return (
  <>
    {!view ?
      (
        <div style={{ margin: "20px", textAlign: "center", minHeight: '450px' }}>
          <h4>Application Status</h4>
          <table className='my-table' style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>User Id</th>
                <th style={thStyle}>Application No</th>
                <th style={thStyle}>Name</th>
                <th style={thStyle}>Applied Country</th>
                <th style={thStyle}>Applied Time</th>
                <th style={thStyle}>Status</th>
                <th style={thStyle}>Acknowledgement</th>
              </tr>
            </thead>
            <tbody>
              {formData ? <tr>
                <td style={tdStyle}>{user.userId}</td>
                <td style={tdStyle}>{formData.personalInfo.formId}</td>
                <td style={tdStyle}>{user.firstname} {user.lastname}</td>
                <td style={tdStyle}>{formData.travelInfo.appliedCountry}</td>
                <td style={tdStyle}>{moment(formData.formInfo.appliedTime).format('MMMM Do YYYY, h:mm A')}</td>
                <td style={tdStyle}>{formData.formInfo.status}</td>
                <td style={tdStyle}><button type="button" className="btn btn-sm btn-outline-primary px-3" style={btnStyle} onClick={() => viewDetails(formData)}>Click</button></td>

              </tr> : <p>No Data Available</p>
              }
            </tbody>
          </table>
          <h4 className='my-3'>Interview Details</h4>
          <table className='my-table' style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>User Id</th>
                <th style={thStyle}>Application No</th>
                <th style={thStyle}>Name</th>
                <th style={thStyle}>Applied Country</th>
                <th style={thStyle}>Interview Venue</th>
                <th style={thStyle}>Interview Time</th>
                <th style={thStyle}>Process Time</th>
                <th style={thStyle}>Status</th>
                <th style={thStyle}>Action</th>
              </tr>
            </thead>
            <tbody>
              {(interview) ? <tr>
                <td style={tdStyle}>{user.userId}</td>
                <td style={tdStyle}>{interview.formId}</td>
                <td style={tdStyle}>{user.firstname} {user.lastname}</td>
                <td style={tdStyle}>{interview.appliedCountry}</td>
                <td style={tdStyle}>{interview.interviewVenue}</td>
                <td style={tdStyle}>{moment(interview.interviewTime).format('MMMM Do YYYY, h:mm A')}</td>
                <td style={tdStyle}>{moment(interview.processTime).format('MMMM Do YYYY, h:mm A')}</td>
                <td style={tdStyle}>{interview.status}</td>
                <td style={tdStyle}><button style={btnStyle} className='btn btn-success btn-sm px-2' disabled={interview.status === 'Interview Completed'} onClick={Attend}>Attend</button></td>
              </tr> : <p>No Data Available</p>}
            </tbody>
          </table>
        </div>

      ) : (<Ack registeredData={user} user={selectedUser} view={setView} />)}
  </>


  )
}
