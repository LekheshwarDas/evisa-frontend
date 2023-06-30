import React, { useState, useEffect } from "react";
import axios from "axios";
import { Process_visa } from "./process_visa";

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


export const Visa_applications_hr = () => {

  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    axios.get("https://evisa-backend-10ey.onrender.com/application/visaApplications").then((response) => {
      setTableData(response.data);
    });
  }, []);

  function handleDate(event) {
    const date = new Date(event);
    const formattedDate = date.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    }).replace(/\//g, '-');
    return formattedDate;
  }

  const [view, setView] = useState(false);
  const [selectedUser, setSelectedUser] = useState([]);

  const handleView = (user) => {
    setSelectedUser(user)
    setView(true);
  }

  const Process = async (user) => {
    const formId = user.personalInfo.formId;
    try {
      const result = await axios.post(`https://evisa-backend-10ey.onrender.com/interview/createInterview/${formId}`);
      alert(result.data.message);
    } catch (error) {
      console.error(error);
    }

  }

  const Reject = async (user) => {
    const formId = user.personalInfo.formId;
    try {
      const result = await axios.post(`https://evisa-backend-10ey.onrender.com/application/reject/${formId}`);
      alert(result.data.message);
    } catch (error) {
      console.error(error);
    }
  }

  const [renwalData, setRenewalData] = useState([]);

  useEffect(() => {
    axios.get("https://evisa-backend-10ey.onrender.com/application/renewal").then((response) => {
      setRenewalData(response.data);
    });
  }, []);

  const Approve = (user) => {
    const userId = user.userId;
    alert(userId);
  }

  const rejectRenewal = async(user) =>{
    const userId = user.userId;
    try {
      const result = await axios.post(`https://evisa-backend-10ey.onrender.com/application/rejectRenewal/${userId}`);
      alert(result.data.message);
    } catch (error) {
      console.error(error);
    }
  }


  return (<>
    {!view ?
      (<div style={{ margin: "20px", textAlign: "center", height: '100%', minHeight: '480px' }}>
        <h4>Visa Request</h4>
        <table style={tableStyle} className='my-table'>
          <thead>
            <tr>
              <th style={thStyle}>S.No</th>
              <th style={thStyle}>Application No</th>
              <th style={thStyle}>Name</th>
              <th style={thStyle}>Visa country</th>
              <th style={thStyle}>Applied Time</th>
              <th style={thStyle}>Status</th>
              <th style={thStyle}>Action</th>
              <th style={thStyle}>Process Visa</th>
              <th style={thStyle}>Reject</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((user, index) => (
              <tr key={user._id}>
                <td style={tdStyle}>{index + 1}</td>
                <td style={tdStyle}>{user.personalInfo.formId}</td>
                <td style={tdStyle}>{user.personalInfo.firstname} {user.personalInfo.lastname}</td>
                <td style={tdStyle}>{user.travelInfo.appliedCountry}</td>
                <td style={tdStyle}>{handleDate(user.formInfo.appliedTime)}</td>
                <td style={tdStyle}>{user.formInfo.status}</td>
                <td style={tdStyle}><button type="button" className="btn btn-sm btn-link" style={btnStyle} onClick={() => handleView(user)}>View Details</button></td>
                <td style={tdStyle}><button type="button" className="btn btn-sm btn-success" style={btnStyle} onClick={() => Process(user)}>Process</button></td>
                <td style={tdStyle}><button type="button" className="btn btn-sm btn-danger" style={btnStyle} onClick={() => Reject(user)}>Reject</button></td>
              </tr>
            ))}
          </tbody>
        </table>
        <h4 className="my-3">Visa Renewal Request</h4>
        <table className="my-table" style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>S.No</th>
              <th style={thStyle}>User Id</th>
              <th style={thStyle}>Name</th>
              <th style={thStyle}>Visa No</th>
              <th style={thStyle}>Status</th>
              <th style={thStyle}>Time</th>
              <th style={thStyle}>Action</th>
              <th style={thStyle}>Reject</th>
            </tr>
          </thead>
          <tbody>
            {renwalData.map((user, index) => (
              <tr key={user._id}>
                <td style={tdStyle}>{index + 1}</td>
                <td style={tdStyle}>{user.userId}</td>
                <td style={tdStyle}>{user.fullName}</td>
                <td style={tdStyle}>{user.visaNo}</td>
                <td style={tdStyle}>{user.status}</td>
                <td style={tdStyle}>{handleDate(user.appliedtime)}</td>
                <td style={tdStyle}><button type="button" className="btn btn-sm btn-success" style={btnStyle} onClick={() => Approve(user)}>Approve</button></td>
                <td style={tdStyle}><button type="button" className="btn btn-sm btn-danger" style={btnStyle} onClick={() => rejectRenewal(user)}>Reject</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>)
      :
      <Process_visa user={selectedUser} setView={setView} />
    }
  </>
  )
}
