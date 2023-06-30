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

function User_details_hr() {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    axios.get("https://evisa-backend-10ey.onrender.com/auth-user/userdetails").then((response) => {
      setTableData(response.data);
    });
  }, []);

  const [view, setView] = useState(false);
  const [selectedUser, setSelectedUser] = useState([]);

  const viewDetails = (user) => {
    setSelectedUser(user)
    setView(true);
  }

  return (
    <div style={{ height: "100%", margin: "20px", minHeight: "400px" }}>
      {
        !view ? (<>
          <h4 className="text-center">User List</h4>
          <table style={tableStyle} className='my-table'>
            <thead>
              <tr>
                <th style={thStyle}>S.No</th>
                <th style={thStyle}>User ID</th>
                <th style={thStyle}>Name</th>
                <th style={thStyle}>Father's Name</th>
                <th style={thStyle}>Email ID</th>
                <th style={thStyle}>Contact</th>
                <th style={thStyle}>Action</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((user, index) => (
                <tr key={user._id}>
                  {user.isActive && <>
                    <td style={tdStyle}>{index + 1}</td>
                    <td style={tdStyle}>{user.userId}</td>
                    <td style={tdStyle}>{user.firstname} {user.lastname}</td>
                    <td style={tdStyle}>{user.fatherName}</td>
                    <td style={tdStyle}>{user.email}</td>
                    <td style={tdStyle}>{user.phone}</td>
                    <td style={tdStyle}><button type="button" className="btn btn-sm btn-link" style={btnStyle} onClick={() => viewDetails(user)}>View Details</button></td>
                  </>
                  }
                </tr>
              ))}
            </tbody>
          </table></>
        )
          : <HomeUser user={selectedUser} view={setView} />
      }


    </div>
  );
}

export default User_details_hr;
