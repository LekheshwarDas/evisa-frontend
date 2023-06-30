import React, { useState } from 'react';
import axios from 'axios';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';

export const Register = ({ setRegistered }) => {

    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        fatherName: "",
        motherName: "",
        email: "",
        password: "",
        reEnterPassword: "",
        pincode: "",
        dateOfBirth: ""
    });


    const handleChange = (e) => {
        const value = e.target.value;
        setFormData({
            ...formData,
            [e.target.name]: value
        })
    }

    const handleReset = (e) => {
        e.preventDefault();
        setFormData({
            firstname: "",
            lastname: "",
            fatherName: "",
            motherName: "",
            email: "",
            password: "",
            reEnterPassword: "",
            phone: "",
            dateOfBirth: ""
        })
        setPhone('');
        setGender('');
    }

    const passwordCheck = formData.password === formData.reEnterPassword;
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!passwordCheck) {
            alert('password not matched');
        } else {
            const fileData = {
                'email': formData.email,
                'password': formData.password,
                'reEnterPassword': formData.reEnterPassword,
                'firstname': formData.firstname,
                'lastname': formData.lastname,
                'fatherName': formData.fatherName,
                'motherName': formData.motherName,
                'phone': phone,
                'dateOfBirth': formData.dateOfBirth,
                'gender': gender,
            }

            try {
                const result = await axios.post("https://evisa-backend-10ey.onrender.com/auth-user/register", fileData);
                alert(result.data.message);
                setRegistered(false);
            } catch (error) {
                console.error(error);
            }
        }

    }

    const [gender, setGender] = useState("");

    const handleGenderChange = (event) => {
        setGender(event.target.value);
    };

    const [phone, setPhone] = useState('');


    return (
        <div className='my-4 d-flex about-us justify-content-center'>
            <form onSubmit={handleSubmit}>
                <h4 className='my-4'><b>User Registration</b></h4>
                <p>Already registered? Please <a type="submit" class="underline" href='/user'>Login</a></p>
                <div class="row-1 mb-2">
                    <div class="col mb-3">
                        <label class="form-label">First Name</label>
                        <input
                            type="text"
                            class="form-control form-control-sm bg-light"
                            name='firstname'
                            value={formData.firstname}
                            onChange={handleChange}
                            placeholder="First name"
                            required
                        />
                    </div>
                    <div class="col mb-3">
                        <label class="form-label">Last Name</label>
                        <input
                            type="text"
                            class="form-control form-control-sm bg-light"
                            name='lastname'
                            value={formData.lastname}
                            onChange={handleChange}
                            placeholder="Last name"
                            required
                        />
                    </div>
                    <div class="col mb-3">
                        <label class="form-label">Father Name</label>
                        <input
                            type="text"
                            class="form-control form-control-sm bg-light"
                            name='fatherName'
                            value={formData.fatherName}
                            onChange={handleChange}
                            placeholder="Father name"
                            required
                        />
                    </div>
                    <div class="col mb-3">
                        <label class="form-label">Mother Name</label>
                        <input type="text"
                            class="form-control form-control-sm bg-light"
                            name='motherName'
                            value={formData.motherName}
                            onChange={handleChange}
                            placeholder="Mother name"
                            required
                        />
                    </div>
                    <div class="col mb-3">
                        <label class="form-label">Gender</label>
                        <select class='form-select' id="gender" value={gender} onChange={handleGenderChange} required>
                            <option value="">Select Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <div class="col mb-3">
                        <label class="form-label">Date of Birth</label>
                        <input
                            type="date"
                            class="form-control form-control-sm bg-light"
                            name='dateOfBirth'
                            value={formData.dateOfBirth}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div class="col mb-3">
                        <label class="form-label">Email ID</label>
                        <input
                            type='text'
                            class="form-control form-control-sm bg-light"
                            name='email'
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Email ID"
                            required
                        />
                    </div>
                    <div class="col mb-3">
                        <label class="form-label">Mobile No</label>
                        <PhoneInput
                            className='form-control form-control-sm bg-light'
                            placeholder="Enter phone number"
                            value={phone}
                            onChange={setPhone}
                            defaultCountry="US"
                            required
                        />

                    </div>
                    <div class="col mb-3">
                        <label class="form-label">Create Password</label>
                        <input
                            type='password'
                            class="form-control form-control-sm bg-light"
                            name='password'
                            value={formData.password}
                            onChange={handleChange}
                            placeholder='Password'
                            required
                        />
                    </div>
                    <div class="col mb-3">
                        <label class="form-label">Re-enter Password</label>
                        <input
                            type='password'
                            class="form-control form-control-sm bg-light"
                            name='reEnterPassword'
                            value={formData.reEnterPassword}
                            onChange={handleChange}
                            placeholder='Re-enter Password'
                            required
                        />
                        {!passwordCheck && <p style={{fontSize: '14px', color: 'red', textShadow: 'initial'}}>Password not matched</p>}
                    </div>
                </div>

                <div class="form-check mb-2">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1" required/>
                    <label class="form-check-label" for="exampleCheck1">I agree all the <a href='#'>terms</a> and <a href='#'>conditions</a></label>
                </div>
                <center><button type="submit" class="btn btn-sm btn-outline-primary my-3 mx-2">Submit</button>
                    <button type="reset" class="btn btn-sm btn-outline-secondary my-3" onClick={handleReset}>Reset</button>
                </center>
            </form>
        </div>
    )
}
