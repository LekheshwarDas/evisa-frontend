import React from 'react'
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

export const Visa_details = ({ visaDetails, arrival, departure }) => {

  return (
    <div style={{ margin: "20px", textAlign: "center", minHeight: '450px' }}>
      <h4>Visa Details</h4>
      <table style={tableStyle} className='my-table'>
        <thead>
          <tr>
            <th style={thStyle}>Application Id</th>
            <th style={thStyle}>Visa No</th>
            <th style={thStyle}>Name</th>
            <th style={thStyle}>Visa country</th>
            <th style={thStyle}>Visa Issue Date</th>
            <th style={thStyle}>Visa Expiry Date</th>
          </tr>
        </thead>
        <tbody>
          {visaDetails ?
            <tr>
              <td style={tdStyle}>{visaDetails.formId}</td>
              <td style={tdStyle}>{visaDetails.visaNo}</td>
              <td style={tdStyle}>{visaDetails.name}</td>
              <td style={tdStyle}>{visaDetails.appliedCountry}</td>
              <td style={tdStyle}>{moment(visaDetails.issueDate).format('DD/MM/YYYY')}</td>
              <td style={tdStyle}>{moment(visaDetails.expiryDate).format('DD/MM/YYYY')}</td>
            </tr>
            : <p>No Data Available</p>}
        </tbody>
      </table>
      <h4 className='mt-3'>Onsite Arrival Details</h4>
      <table style={tableStyle} className='my-table'>
        <thead>
          <tr>
            <th style={thStyle}>Visa No</th>
            <th style={thStyle}>Name</th>
            <th style={thStyle}>Ticket No</th>
            <th style={thStyle}>Flight No</th>
            <th style={thStyle}>From</th>
            <th style={thStyle}>Via</th>
            <th style={thStyle}>To</th>
            <th style={thStyle}>Flight Date</th>
            <th style={thStyle}>Flight Time</th>
            {/* <th style={thStyle}>Apporved By</th> */}
          </tr>
        </thead>
        <tbody>
          {arrival ?
            <tr>
              <td style={tdStyle}>{arrival.visaNo}</td>
              <td style={tdStyle}>{arrival.name}</td>
              <td style={tdStyle}>{arrival.tktNo}</td>
              <td style={tdStyle}>{arrival.flightNo}</td>
              <td style={tdStyle}>{arrival.from}</td>
              <td style={tdStyle}>{arrival.via}</td>
              <td style={tdStyle}>{arrival.to}</td>
              <td style={tdStyle}>{moment(arrival.flightDate).format('DD/MM/YYYY')}</td>
              <td style={tdStyle}>{arrival.flightTime}</td>
            </tr>
            : <p>No Data Available</p>}
        </tbody>
      </table>
      <h4 className='mt-3'>Onsite Departure Details</h4>
      <table style={tableStyle} className='my-table'>
        <thead>
          <tr>
            <th style={thStyle}>Visa No</th>
            <th style={thStyle}>Name</th>
            <th style={thStyle}>Ticket No</th>
            <th style={thStyle}>Flight No</th>
            <th style={thStyle}>From</th>
            <th style={thStyle}>Via</th>
            <th style={thStyle}>To</th>
            <th style={thStyle}>Flight Date</th>
            <th style={thStyle}>Flight Time</th>
            {/* <th style={thStyle}>Apporved By</th> */}
          </tr>
        </thead>
        <tbody>
          {departure ?
            <tr>
              <td style={tdStyle}>{departure.visaNo}</td>
              <td style={tdStyle}>{departure.name}</td>
              <td style={tdStyle}>{departure.tktNo}</td>
              <td style={tdStyle}>{departure.flightNo}</td>
              <td style={tdStyle}>{departure.from}</td>
              <td style={tdStyle}>{departure.via}</td>
              <td style={tdStyle}>{departure.to}</td>
              <td style={tdStyle}>{moment(departure.flightDate).format('DD/MM/YYYY')}</td>
              <td style={tdStyle}>{departure.flightTime}</td>
            </tr>
            : <p>No Data Available</p>}
        </tbody>
      </table>
    </div>
  )
}
