import React, { useState, useEffect } from 'react';
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

const btnStyle = {
  fontSize: "14px",
};

export const Visa_status_hr = () => {

  const [tableData, setTableData] = useState([]);
  const [selectedUser, setSelectedUser] = useState([]);
  const [view, setView] = useState(false);
  const [condition1, setCondition1] = useState(false);
  const [condition2, setCondition2] = useState(false);

  const viewDetails = (user) => {
    setSelectedUser(user);
    setView(true);
  }
  
  const viewArrival = (user) => {
    setSelectedUser(user);
    setCondition1(true);
  }

  const viewDeparture = (user) => {
    setSelectedUser(user);
    setCondition2(true);
  }

  useEffect(() => {
    axios.get("https://evisa-backend-10ey.onrender.com/visa/approvedVisa").then((response) => {
      setTableData(response.data);
    });
  }, []);

  const [arrival, setArrival] = useState({
    tktNo: '',
    flightNo: '',
    from: '',
    via: '',
    to: '',
    flightDate: '',
    flightTime: '',
  });

  const handleArrivalChange = (e) => {
    const value = e.target.value;
    setArrival({
      ...arrival,
      [e.target.name]: value
    })
  }

  const [departure, setDeparture] = useState({
    tktNo: '',
    flightNo: '',
    from: '',
    via: '',
    to: '',
    flightDate: '',
    flightTime: '',
  });


  const handleDepartureChange = (e) => {
    const value = e.target.value;
    setDeparture({
      ...departure,
      [e.target.name]: value
    })
  }

  const handleArrivalSubmit = async (e) => {
    e.preventDefault();
    const fileData = {
      'visaNo': selectedUser.visaNo,
      'name': selectedUser.name,
      'tktNo': arrival.tktNo,
      'flightNo': arrival.flightNo,
      'from': arrival.from,
      'via': arrival.via,
      'to': arrival.to,
      'flightDate': arrival.flightDate,
      'flightTime': arrival.flightTime,
    };
    try {
      const result = await axios.post("https://evisa-backend-10ey.onrender.com/visa/onsiteArrival", fileData);
      alert(result.data.message);
      setCondition1(false);
    } catch (error) {
      console.error(error);
    }
  }


  const handleDepartureSubmit = async (e) => {
    e.preventDefault();
    const fileData = {
      'visaNo': selectedUser.visaNo,
      'name': selectedUser.name,
      'tktNo': departure.tktNo,
      'flightNo': departure.flightNo,
      'from': departure.from,
      'via': departure.via,
      'to': departure.to,
      'flightDate': departure.flightDate,
      'flightTime': departure.flightTime,
    };
    try {
      const result = await axios.post("https://evisa-backend-10ey.onrender.com/visa/onsiteDeparture", fileData);
      alert(result.data.message);
      setCondition2(false);
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div style={{ margin: "20px", textAlign: "center", height: '100%', minHeight: '480px' }}>
      <h4>Approved Visa Status</h4>
      {view ? (
        <div className='d-grid justify-content-center'>
          <h4>Visa Details</h4>
          <p>Application No: {selectedUser.formId}</p>
          <p>Full Name: {selectedUser.name}</p>
          <p>Applied Country: {selectedUser.appliedCountry}</p>
          <p>Visa No: {selectedUser.visaNo}</p>
          <p>Visa Issue Date: {moment(selectedUser.issueDate).format('DD/MM/YYYY')}</p>
          <p>Visa Expiry Date: {moment(selectedUser.expiryDate).format('DD/MM/YYYY')}</p>
          <button type="button" className='btn btn-outline-dark w-100' onClick={() => setView(false)}>Back</button>
        </div>
      ) : condition1 ? (<div className='d-grid justify-content-center'>
        <h4>Onsite Arrival Details</h4>
        <form onSubmit={handleArrivalSubmit}>
          <label className='form-label'>Ticket No:</label>
          <input type="text" className='form-control mb-2 bg-light w-100' name='tktNo' value={arrival.tktNo} onChange={handleArrivalChange} />

          <label className='form-label'>Flight No:</label>
          <input type="text" className='form-control mb-3 bg-light w-100' name='flightNo' value={arrival.flightNo} onChange={handleArrivalChange} />

          <label className='form-label'>Flight From:</label>
          <input type="text" className='form-control mb-3 bg-light w-100' name='from' value={arrival.from} onChange={handleArrivalChange} />

          <label className='form-label'>Flight To:</label>
          <input type="text" className='form-control mb-3 bg-light w-100' name='to' value={arrival.to} onChange={handleArrivalChange} />

          <label className='form-label'>Flight Via:</label>
          <input type="text" className='form-control mb-3 bg-light w-100' name='via' value={arrival.via} onChange={handleArrivalChange} />

          <label className='form-label'>Flight Date:</label>
          <input type="date" className='form-control mb-3 bg-light w-100' name='flightDate' value={arrival.flightDate} onChange={handleArrivalChange} />

          <label className='form-label'>Flight Time:</label>
          <input type="time" className='form-control mb-3 bg-light w-100' name='flightTime' value={arrival.flightTime} onChange={handleArrivalChange} />

          <button type="submit" className='btn btn-outline-danger w-100 mt-2'>Submit</button><hr />
          <button type="button" className='btn btn-outline-dark w-100' onClick={() => setCondition1(false)}>Back</button>

        </form>
      </div>
      ) : condition2 ? (<div className='d-grid justify-content-center'>
        <h4>Onsite Arrival Details</h4>
        <form onSubmit={handleDepartureSubmit}>
          <label className='form-label'>Ticket No:</label>
          <input type="text" className='form-control mb-2 bg-light w-100' name='tktNo' value={departure.tktNo} onChange={handleDepartureChange} />

          <label className='form-label'>Flight No:</label>
          <input type="text" className='form-control mb-3 bg-light w-100' name='flightNo' value={departure.flightNo} onChange={handleDepartureChange} />

          <label className='form-label'>Flight From:</label>
          <input type="text" className='form-control mb-3 bg-light w-100' name='from' value={departure.from} onChange={handleDepartureChange} />

          <label className='form-label'>Flight To:</label>
          <input type="text" className='form-control mb-3 bg-light w-100' name='to' value={departure.to} onChange={handleDepartureChange} />

          <label className='form-label'>Flight Via:</label>
          <input type="text" className='form-control mb-3 bg-light w-100' name='via' value={departure.via} onChange={handleDepartureChange} />

          <label className='form-label'>Flight Date:</label>
          <input type="date" className='form-control mb-3 bg-light w-100' name='flightDate' value={departure.flightDate} onChange={handleDepartureChange} />

          <label className='form-label'>Flight Time:</label>
          <input type="time" className='form-control mb-3 bg-light w-100' name='flightTime' value={departure.flightTime} onChange={handleDepartureChange} />

          <button type="submit" className='btn btn-outline-danger w-100 mt-2'>Submit</button><hr />
          <button type="button" className='btn btn-outline-dark w-100' onClick={() => setCondition2(false)}>Back</button>

        </form>
      </div>
      ) : (<table style={tableStyle} className='my-table'>
        <thead>
          <tr>
            <th style={thStyle}>S.No</th>
            <th style={thStyle}>Application No</th>
            <th style={thStyle}>Name</th>
            <th style={thStyle}>Visa country</th>
            <th style={thStyle}>Visa Issue Date</th>
            <th style={thStyle}>Action</th>
            <th style={thStyle}>Onsite Arrival</th>
            <th style={thStyle}>Onsite Departure</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((user, index) => (
            <tr key={user._id}>
              <td style={tdStyle}>{index + 1}</td>
              <td style={tdStyle}>{user.formId}</td>
              <td style={tdStyle}>{user.name}</td>
              <td style={tdStyle}>{user.appliedCountry}</td>
              <td style={tdStyle}>{moment(user.issueDate).format('DD/MM/YYYY')}</td>
              <td style={tdStyle}><button type="button" className="btn btn-sm btn-link" style={btnStyle} onClick={() => viewDetails(user)}>View Details</button></td>
              <td style={tdStyle}><button type="button" className="btn btn-sm btn-primary" style={btnStyle} onClick={() => viewArrival(user)}>Onsite Arrival</button></td>
              <td style={tdStyle}><button type="button" className="btn btn-sm btn-secondary" style={btnStyle} onClick={() => viewDeparture(user)}>Onsite Departure</button></td>
            </tr>
          ))}
        </tbody>
      </table>)}
    </div>
  )
}
