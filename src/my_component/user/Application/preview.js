import React from 'react'

export const Preview = ({ user, formData, setIsPreview }) => {

    function handleDate(event){
        const date = new Date(event);
        const formattedDate = date.toLocaleDateString('en-GB', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
        }).replace(/\//g, '-');
        return formattedDate;
    }

    return (
        <div>
            <header className='bg-primary text-light my-2 px-2'>Personal Details</header>
            <div className='m-3 mx-5 w-100'>
                <div className='row mb-2 '>
                    <div className='col'>
                        First Name: <b>{user.firstname}</b>
                    </div>
                    <div className='col'>
                        Last Name: <b>{user.lastname}</b>
                    </div>
                </div>
                <div className='row mb-2 '>
                    <div className='col'>
                        Father's Name: <b>{user.fatherName}</b>
                    </div>
                    <div className='col'>
                        Mother's Name: <b>{user.motherName}</b>
                    </div>
                </div>
                <div className='row mb-2 '>
                    <div className='col'>
                        Gender: <b>{user.gender}</b>
                    </div>
                    <div className='col'>
                        Date of Birth: <b>{handleDate(user.dateOfBirth)}</b>
                    </div>
                </div>
                <div className='row mb-2 '>
                    <div className='col'>
                        Email ID: <b>{user.email}</b>
                    </div>
                    <div className='col'>
                        Mobile Number: <b>{user.phone}</b>
                    </div>
                </div>
            </div>

            <header className='bg-primary text-light my-2 px-2'>Permanent Address</header>
            <div className='m-3 mx-5 w-100'>
                <div className='row mb-2 '>
                    <div className='col'>
                        Address Line 1: <b>{formData.personalInfo.permanent.addressLine1}</b>
                    </div>
                    <div className='col'>
                        Address Line 2: <b>{formData.personalInfo.permanent.addressLine2}</b>
                    </div>
                </div>
                <div className='row mb-2 '>
                    <div className='col'>
                        Country: <b>{formData.personalInfo.permanent.country}</b>
                    </div>
                    <div className='col'>
                        State: <b>{formData.personalInfo.permanent.state}</b>
                    </div>
                </div>
                <div className='row mb-2 '>
                    <div className='col'>
                        City: <b>{formData.personalInfo.permanent.city}</b>
                    </div>
                    <div className='col'>
                        Postcode: <b>{formData.personalInfo.permanent.pincode}</b>
                    </div>
                </div>
            </div>

            <header className='bg-primary text-light my-2 px-2'>Present Address</header>
            <div className='m-3 mx-5 w-100'>
                <div className='row mb-2 '>
                    <div className='col'>
                        Address Line 1: <b>{formData.personalInfo.current.addressLine1}</b>
                    </div>
                    <div className='col'>
                        Address Line 2: <b>{formData.personalInfo.current.addressLine2}</b>
                    </div>
                </div>
                <div className='row mb-2 '>
                    <div className='col'>
                        Country: <b>{formData.personalInfo.current.country}</b>
                    </div>
                    <div className='col'>
                        State: <b>{formData.personalInfo.current.state}</b>
                    </div>
                </div>
                <div className='row mb-2 '>
                    <div className='col'>
                        City: <b>{formData.personalInfo.current.city}</b>
                    </div>
                    <div className='col'>
                        Postcode: <b>{formData.personalInfo.current.pincode}</b>
                    </div>
                </div>
            </div>

            <header className='bg-primary text-light my-2 px-2'>Passport Information</header>
            <div className='m-3 mx-5 w-100'>
                <div className='row mb-2 '>
                    <div className='col'>
                    Passport Number: <b>{formData.travelDetails.passport}</b>
                    </div>
                    <div className='col'>
                    Date of Issue: <b>{handleDate(formData.travelDetails.issue)}</b>
                    </div>
                </div>
                <div className='row mb-2 '>
                    <div className='col'>
                    Date of Expiration: <b>{handleDate(formData.travelDetails.expiration)}</b>
                    </div>
                    <div className='col'>
                    Country of Issuance: <b>{formData.travelDetails.issuance}</b>
                    </div>
                </div>
            </div>

            <header className='bg-primary text-light my-2 px-2'>Travel Information</header>
            <div className='m-3 mx-5 w-100'>
                <div className='row mb-2 '>
                    <div className='col'>
                    Purpose of Trip: <b>{formData.travelDetails.purpose}</b>
                    </div>
                    <div className='col'>
                    Applied Country: <b>{formData.travelDetails.appliedCountry}</b>
                    </div>
                    
                </div>
                <div className='col'>
                    Intended Length of Stay: <b>{formData.travelDetails.stay}</b>
                    </div>
                <h6><u>Dates of Intended Travel</u></h6>
                <div className='row mb-2 '>
                    <div className='col'>
                    Departure Date: <b>{handleDate(formData.travelDetails.departure)}</b>
                    </div>
                    <div className='col'>
                    Arrival Date: <b>{handleDate(formData.travelDetails.arrival)}</b>
                    </div>
                </div>
            </div>

            <center>
                <button type="button" class="btn btn-sm btn-outline-secondary my-3 px-3" onClick={() => setIsPreview(false)}>Back</button>
            </center>
        </div>
    )
}
