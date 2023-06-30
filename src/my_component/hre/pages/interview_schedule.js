import React, { useState } from 'react';
import axios from 'axios'

export const Schedule_interview = ({ user, setAction }) => {
    const [interviewTime, setInterviewTime] = useState('');
    const [interviewVenue, setInterviewVenue] = useState('');

    const handleTimeChange = (event) => {
        setInterviewTime(event.target.value);
    };

    const handleVenueChange = (event) => {
        setInterviewVenue(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = {
            'formId': user.formId,
            'interviewTime': interviewTime,
            'interviewVenue': interviewVenue
        }
        try {
            const result = await axios.post("https://evisa-backend-10ey.onrender.com/interview/schedule", formData);
            alert(result.data.message);
            setAction(false);
        } catch (error) {
            console.error(error);
        }
    };

    const Reject = async(e)=>{
        e.preventDefault();
        const formId = user.formId;
        try {
            const result = await axios.post(`https://evisa-backend-10ey.onrender.com/interview/reject/${formId}`);
            alert(result.data.message);
            setAction(false);
        } catch (error) {
            console.error(error);
        }
      
    }


    return (
        <div className='d-grid justify-content-center'>
            <h4>Interview Schedule</h4>
            <form onSubmit={handleSubmit}>
                <p className='bg-secondary p-1 text-light'>Applicantion Id: {user.formId}</p>
                <label className='form-label'>Interview Time:</label>
                <input type="datetime-local" className='form-control mb-2 bg-light w-100' value={interviewTime} onChange={handleTimeChange} />
                <label className='form-label'>Interview Venue:</label>
                <input type="text" className='form-control mb-3 bg-light w-100' value={interviewVenue} onChange={handleVenueChange} />
                <button type="submit" className='btn btn-outline-danger w-100 mt-2'>Schedule Interview</button><hr/>
                <button type="button" className='btn btn-outline-secondary w-100 mt-2' onClick={Reject}>Delete</button>
            </form>
        </div>
    )
}
