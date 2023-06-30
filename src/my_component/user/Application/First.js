import React, { useState } from 'react';
import { Address } from './state-city-country';

export const First = ({ user,onNext }) => {

    const [permanent,setPermanent] = useState({});
    const [current,setCurrent] = useState({});

    const date = new Date(user.dateOfBirth);
    const formattedDate = date.toLocaleDateString('en-GB', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
    }).replace(/\//g, '-');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const personalInfo = {
            "permanent": permanent,
            "current": current,
            'email':  user.email,
            'firstname':  user.firstname,
            'lastname':  user.lastname,
            'fatherName':  user.fatherName,
            'motherName':  user.motherName,
            'phone': user.phone,
            'dateOfBirth':  user.dateOfBirth,
            'gender': user.gender,
        }
        try {
            onNext({personalInfo})
        } catch (error) {
            console.error(error);
        }
    }
    

    return (
        <div className='container'>
            <h4>Personal Information</h4>
            <hr />
            <form onSubmit={handleSubmit}>
                <div class="row mb-2">
                    <div class="col mb-3">
                        <label class="form-label">First Name</label>
                        <input
                            type="text"
                            class="form-control bg-light"
                            name='firstname'
                            value={user.firstname}
                            placeholder="First name"
                            disabled
                        />
                    </div>
                    <div class="col mb-3">
                        <label class="form-label">Last Name</label>
                        <input
                            type="text"
                            class="form-control bg-light"
                            name='lastname'
                            value={user.lastname}
                            placeholder="Last name"
                            disabled
                        />
                    </div>
                </div>
                <div className='row mb-2'>
                    <div class="col mb-3">
                        <label class="form-label">Father Name</label>
                        <input
                            type="text"
                            class="form-control bg-light"
                            name='fatherName'
                            value={user.fatherName}
                            placeholder="Father name"
                            disabled
                        />
                    </div>
                    <div class="col mb-3">
                        <label class="form-label">Mother Name</label>
                        <input type="text"
                            class="form-control bg-light"
                            name='motherName'
                            value={user.motherName}
                            placeholder="Mother name"
                            disabled
                        />
                    </div>
                </div>
                <div class="row mb-2">
                    <div class="col mb-3">
                        <label class="form-label">Gender</label>
                        <select class='form-select bg-light' id="gender" value={user.gender} disabled>
                            <option value="">Select Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <div class="col mb-3">
                        <label class="form-label">Date of Birth</label>
                        <input
                            class="form-control bg-light"
                            name='dateOfBirth'
                            value={formattedDate}
                            disabled
                        />
                    </div>
                </div>
                <div class="row mb-2">
                    <div class="col mb-3">
                        <label class="form-label">Email ID</label>
                        <div className='d-flex'>
                            <input
                                type='text'
                                class="form-control bg-light"
                                name='email'
                                value={user.email}
                                placeholder="Email ID"
                                disabled
                            />
                        </div>
                    </div>

                    <div class="col mb-3">
                        <label class="form-label">Mobile No</label>
                        <div className='d-flex'>
                            <input
                                type='text'
                                class="form-control bg-light"
                                name='phone'
                                value={user.phone}
                                placeholder="Phone Number"
                                disabled
                            />
                        </div>
                    </div>
                </div>
                
                <h4>Permanent Address</h4><hr />
                <Address address = {setPermanent}/>
                <h4>Present Address</h4><hr />
                <Address address={setCurrent}/>
                <center><button type="submit" class="btn btn-sm btn-outline-primary my-3 mx-2">Save & Next</button>
                    <button type="reset" class="btn btn-sm btn-outline-secondary my-3">Reset</button>
                </center>
            </form>

        </div>
    )
}
