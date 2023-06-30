import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from 'moment';
import { Schedule_interview } from "./interview_schedule";
import { Result } from "./result";
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


export const Interview = ({hre}) => {

  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    axios.get("https://evisa-backend-10ey.onrender.com/interview/interviewDetails").then((response) => {
      setTableData(response.data);
    });
  }, []);


  const [action, setAction] = useState(false);
  const [result, setResult] = useState(false);
  const [selectedUser, setSelectedUser] = useState([]);

  const handleAction = (user) => {
    setSelectedUser(user)
    setAction(true);
  }

  const handleResult = (user) => {
    setSelectedUser(user)
    setResult(true);
  }

  function handleTime(date) {
    const formattedDate = moment(date).format('MMMM Do YYYY, h:mm A');
    return formattedDate;
  }

  return (
    <div style={{ margin: "20px", textAlign: "center", height: '100%', minHeight: '480px' }}>
      {action ? (
        <Schedule_interview user={selectedUser} setAction={setAction} />
      ) : result ? (
        <Result hre={hre} user={selectedUser} setResult={setResult} />
      ) : (
        <div>
          <h4>Interview Details</h4>
          <table style={tableStyle} className='my-table'>
            <thead>
              <tr>
                <th style={thStyle}>S.No</th>
                <th style={thStyle}>Application No</th>
                <th style={thStyle}>Name</th>
                <th style={thStyle}>Applied Country</th>
                <th style={thStyle}>Interview Time</th>
                <th style={thStyle}>Interview Venue</th>
                <th style={thStyle}>Process Time</th>
                <th style={thStyle}>Status</th>
                <th style={thStyle}>Action</th>
                <th style={thStyle}>Process Visa</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((user, index) => (
                <tr key={user._id}>
                  <td style={tdStyle}>{index + 1}</td>
                  <td style={tdStyle}>{user.formId}</td>
                  <td style={tdStyle}>{user.name}</td>
                  <td style={tdStyle}>{user.appliedCountry}</td>
                  {user.interviewTime?<td style={tdStyle}>{handleTime(user.interviewTime)}</td>:<td style={tdStyle}>Not Scheduled</td>}
                  <td style={tdStyle}>{user.interviewVenue}</td>
                  <td style={tdStyle}>{handleTime(user.processTime)}</td>
                  <td style={tdStyle}>{user.status}</td>
                  <td style={tdStyle}><button type="button" className="btn btn-sm btn-link" style={btnStyle} onClick={() => handleAction(user)}>Schedule</button></td>
                  <td style={tdStyle}><button type="button" className="btn btn-sm btn-success" style={btnStyle} onClick={() => handleResult(user)}>Result</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
