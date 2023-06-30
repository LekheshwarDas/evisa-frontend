import React, { useState } from 'react'
import axios from 'axios';

export const Result = ({ user, setResult, hre }) => {
    const [issueDate, setIssueDate] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const visaNo = 'VISA' + Math.floor(Math.random() * 1000000).toString().padStart(6, '0');
    const approvedBy = hre.firstname + ' ' + hre.lastname;

    const handleTimeChange = (event) => {
        setIssueDate(event.target.value);
    };

    const handleVenueChange = (event) => {
        setExpiryDate(event.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = {
            'formId': user.formId,
            'visaNo': visaNo,
            'name': user.name,
            'appliedCountry': user.appliedCountry,
            'issueDate': issueDate,
            'expiryDate': expiryDate,
            'approvedBy': approvedBy,
        }
        try {
            const result = await axios.post("https://evisa-backend-10ey.onrender.com/visa/visaResult", formData);
            alert(result.data.message);
            setResult(false);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className='d-grid justify-content-center'>
            <h4>Visa Result</h4>
            <form onSubmit={handleSubmit}>
                <p className='text-primary'>Applicantion Id: {user.formId}</p>
                <label className='form-label'>Visa Issue Date:</label>
                <input type="date" className='form-control mb-2 bg-light w-100' value={issueDate} onChange={handleTimeChange} />

                <label className='form-label'>Visa Expiry Date</label>
                <input type="date" className='form-control mb-3 bg-light w-100' value={expiryDate} onChange={handleVenueChange} />
                <button type="submit" className='btn btn-outline-danger w-100 mt-2'>Approve</button><hr />
                <button type="button" className='btn btn-outline-dark w-100' onClick={() => setResult(false)}>Back</button>

            </form>
        </div>
    )
}
