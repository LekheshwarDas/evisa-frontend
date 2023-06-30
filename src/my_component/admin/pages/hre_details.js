import React, { useState, useEffect } from "react";
import axios from 'axios'
import '../../../App.css'
import { HomeHr } from "./view_hre";

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

function Hre_details() {
  const [tableData, setTableData] = useState([]);
  const [selectedUser, setSelectedUser] = useState([])
  const [view, setView] = useState(false);

  useEffect(() => {
    axios.get("https://evisa-backend-10ey.onrender.com/auth-hre/hrdetails").then((response) => {
      setTableData(response.data);
    });
  }, []);

  const viewDetails = (user) => {
    setSelectedUser(user);
    setView(true);
  }

  const Reject = async (user) => {
    const Id = {
      'email': user.email
    }
    try {
      const result = await axios.post("https://evisa-backend-10ey.onrender.com/auth-hre/reject", Id);
      alert(result.data.message);
    } catch (error) {
      console.error(error);
    }

  }


  return (
    <div style={{ height: "100%", margin: "20px", minHeight: "50vh" }}>
      {!view ?
        (<>
          <h1>HR List</h1>
          <table style={tableStyle} className='my-table'>
            <thead>
              <tr>
                <th style={thStyle}>S.No</th>
                <th style={thStyle}>HRE ID</th>
                <th style={thStyle}>Name</th>
                <th style={thStyle}>State</th>
                <th style={thStyle}>Country</th>
                <th style={thStyle}>Action</th>
                <th style={thStyle}>Reject</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((user, index) => (
                <tr key={user._id}>
                  <td style={tdStyle}>{index + 1}</td>
                  <td style={tdStyle}>{user.hrId}</td>
                  <td style={tdStyle}>{user.firstname} {user.lastname}</td>
                  <td style={tdStyle}>{user.state}</td>
                  <td style={tdStyle}>{user.country}</td>
                  <td style={tdStyle}><button type="button" className="btn btn-sm btn-link" style={btnStyle} onClick={() => viewDetails(user)}>View Details</button></td>
                  <td style={tdStyle}><button type="button" className="btn btn-sm btn-outline-danger" style={btnStyle} onClick={() => Reject(user)}>Remove</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </>)

        : (<HomeHr user={selectedUser} view={setView} />)}

    </div>
  );
}

export default Hre_details;
