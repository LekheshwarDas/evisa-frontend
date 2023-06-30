import React, { useState, useEffect } from "react";
import axios from 'axios'
import '../../../App.css'
import { HomeUser } from "./view_user";

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

function Approve() {
  const [tableData, setTableData] = useState([]);
  const [selectedUser, setSelectedUser] = useState([]);
  const [view, setView] = useState(false);

  const viewDetails = (user) => {
    setSelectedUser(user);
    setView(true);
  }

  useEffect(() => {
    axios.get("https://evisa-backend-10ey.onrender.com/auth-user/userdetails").then((response) => {
      setTableData(response.data);
    });
  }, []);

  const Approve = async (user) => {

    try {
      const result = await axios.post("https://evisa-backend-10ey.onrender.com/auth-user/activate", user);
      alert(result.data.message);
    } catch (error) {
      console.error(error);
    }

  }

  const Reject = async (user) => {

    try {
      const result = await axios.post("https://evisa-backend-10ey.onrender.com/auth-user/reject", user);
      alert(result.data.message);
    } catch (error) {
      console.error(error);
    }

  }

  return (
    <div style={{ height: "400px", margin: "20px" }}>
      {
        !view ? (
          <div>
            <h4 className="text-center">Approve Users</h4>
            <table style={tableStyle} className='my-table'>
              <thead>
                <tr>
                  <th style={thStyle}>S.No</th>
                  <th style={thStyle}>User ID</th>
                  <th style={thStyle}>Name</th>
                  <th style={thStyle}>father's Name</th>
                  <th style={thStyle}>Action</th>
                  <th style={thStyle}>Approve</th>
                  <th style={thStyle}>Reject</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((user, index) => (
                  <tr key={user._id}>
                    <td style={tdStyle}>{index + 1}</td>
                    <td style={tdStyle}>{user.userId}</td>
                    <td style={tdStyle}>{user.firstname} {user.lastname}</td>
                    <td style={tdStyle}>{user.fatherName}</td>
                    <td style={tdStyle}><button type="button" className="btn btn-sm btn-link" style={btnStyle} onClick={() => viewDetails(user)}>View Details</button></td>
                    <td style={tdStyle}><button type="button" className="btn btn-sm btn-outline-success" style={btnStyle} disabled={user.isActive} onClick={() => Approve(user)}>Approve</button></td>
                    <td style={tdStyle}><button type="button" className="btn btn-sm btn-outline-danger" style={btnStyle} onClick={() => Reject(user)}>Reject</button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )
          :
          <HomeUser user={selectedUser} view={setView} />
      }

    </div>
  );
}

export default Approve;
