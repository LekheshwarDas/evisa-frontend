import React from 'react';

const PersonalInfoStep = (props) => {
    const { fullName, passportNumber, expiryDate, country, handleChange, nextStep } = props;

    const handleNext = (e) => {
        e.preventDefault();
        nextStep();
    };

    return (
        <div>
            <div className='d-grid justify-content-center'>
                <h4>Personal Information</h4>
                <form onSubmit={handleNext}>

                    <label className='form-label'>Full Name: </label>
                    <input
                        className='form-control mb-2 bg-light'
                        type="text"
                        name="fullName"
                        value={fullName}
                        onChange={handleChange}
                        required
                    />


                    <label className='form-label'>Passport Number: </label>
                    <input
                        className='form-control mb-2 bg-light'
                        type="text"
                        name="passportNumber"
                        value={passportNumber}
                        onChange={handleChange}
                        required
                    />


                    <label className='form-label'>Expiry Date: </label>
                    <input
                        className='form-control mb-2 bg-light'
                        type="date"
                        name="expiryDate"
                        value={expiryDate}
                        onChange={handleChange}
                        required
                    />


                    <label className='form-label'>Country: </label>
                    <input
                        className='form-control mb-2 bg-light'
                        type="text"
                        name="country"
                        value={country}
                        onChange={handleChange}
                        required
                    />


                    <center><button type="submit" className='btn btn-sm btn-success my-3 w-25'>Next</button></center>
                </form>
            </div>
        </div>
    );
};

export default PersonalInfoStep;
