import React, {useState, useEffect} from 'react'
import axios from 'axios';
import moment from 'moment';

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

export const Onsite_details = () => {

  const [arrival, setArrival] = useState([]);
  useEffect(() => {
    axios.get("https://evisa-backend-10ey.onrender.com/visa/arrivals").then((response) => {
      setArrival(response.data);
    });
  }, []);

  const [departure, setDeparture] = useState([]);
  useEffect(() => {
    axios.get("https://evisa-backend-10ey.onrender.com/visa/departures").then((response) => {
      setDeparture(response.data);
    });
  }, []);

  return (
    <div style={{ margin: "20px", textAlign: "center", height: '100%', minHeight: '480px' }}>
    <h4>Onsite Arrival Details</h4>
    <table style={tableStyle} className='my-table'>
      <thead>
        <tr>
          <th style={thStyle}>S.No</th>
          <th style={thStyle}>Visa No.</th>
          <th style={thStyle}>Name</th>
          <th style={thStyle}>Ticket No.</th>
          <th style={thStyle}>Flight No.</th>
          <th style={thStyle}>From</th>
          <th style={thStyle}>Via</th>
          <th style={thStyle}>To</th>
          <th style={thStyle}>Flight Date</th>
          <th style={thStyle}>Flight Time</th>
          {/* <th style={thStyle}>Approved By</th> */}
        </tr>
      </thead>
      <tbody>
        {arrival.map((user, index) => (
          <tr key={user._id}>
            <td style={tdStyle}>{index + 1}</td>
            <td style={tdStyle}>{user.visaNo}</td>
            <td style={tdStyle}>{user.name}</td>
            <td style={tdStyle}>{user.tktNo}</td>
            <td style={tdStyle}>{user.flightNo}</td>
            <td style={tdStyle}>{user.from}</td>
            <td style={tdStyle}>{user.via}</td>
            <td style={tdStyle}>{user.to}</td>
            <td style={tdStyle}>{moment(user.flightDate).format('DD/MM/YYYY')}</td>
            <td style={tdStyle}>{user.flightTime}</td>
            {/* <td style={tdStyle}></td> */}
          </tr>
        ))}
      </tbody>
    </table>

    <h4 className="my-3">Onsite Departure Details</h4>
    <table style={tableStyle} className='my-table'>
      <thead>
        <tr>
          <th style={thStyle}>S.No</th>
          <th style={thStyle}>Visa No.</th>
          <th style={thStyle}>Name</th>
          <th style={thStyle}>Ticket No.</th>
          <th style={thStyle}>Flight No.</th>
          <th style={thStyle}>From</th>
          <th style={thStyle}>Via</th>
          <th style={thStyle}>To</th>
          <th style={thStyle}>Flight Date</th>
          <th style={thStyle}>Flight Time</th>
          {/* <th style={thStyle}>Approved By</th> */}
        </tr>
      </thead>
      <tbody>
        {departure.map((user, index) => (
          <tr key={user._id}>
            <td style={tdStyle}>{index + 1}</td>
            <td style={tdStyle}>{user.visaNo}</td>
            <td style={tdStyle}>{user.name}</td>
            <td style={tdStyle}>{user.tktNo}</td>
            <td style={tdStyle}>{user.flightNo}</td>
            <td style={tdStyle}>{user.from}</td>
            <td style={tdStyle}>{user.via}</td>
            <td style={tdStyle}>{user.to}</td>
            <td style={tdStyle}>{moment(user.flightDate).format('DD/MM/YYYY')}</td>
            <td style={tdStyle}>{user.flightTime}</td>
            {/* <td style={tdStyle}></td> */}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  )
}
