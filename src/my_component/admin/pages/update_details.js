import React, { useState } from 'react';
import axios from 'axios';

export const Update = ({adminId}) => {
    const [formData, setFormData] = useState({
        newEmail: '',
        password: '',
        confirmEmail: '',
        newPassword: '',
        confirmPassword: '',
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const fileData = {
            'id': adminId, 
            'newEmail': formData.newEmail,
            'password': formData.password,
            'newPassword': formData.newPassword,
        }
        try {
            const result = await axios.post('https://evisa-backend-10ey.onrender.com/auth/update',fileData);
            alert(result.data.message);
        } catch (error) {
            console.error(error);
        }
        setFormData({
            newEmail: '',
            password: '',
            confirmEmail: '',
            newPassword: '',
            confirmPassword: '',
        });
    };

    return (
        <div className='d-grid justify-content-center' style={{ margin: "20px", minHeight: '400px' }}>
            <div>
                <h4>Change Email-Password</h4>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label className='form-label my-1' htmlFor="email">New Email</label>
                        <input
                            className='form-control bg-light form-control-sm my-1'
                            type="email"
                            id="newEmail"
                            name="newEmail"
                            value={formData.newEmail}
                            onChange={handleInputChange}
                            required
                        />
                        <label className='form-label my-1' htmlFor="email">Confirm Email</label>
                        <input
                            className='form-control bg-light form-control-sm my-1'
                            type="email"
                            id="confirmEmail"
                            name="confirmEmail"
                            value={formData.confirmEmail}
                            onChange={handleInputChange}
                            required
                        />
                        {formData.newEmail!==formData.confirmEmail && <div style={{color: 'red', fontSize:'12px'}}>Confirm email not matched</div>}
                    </div>
                    <div>
                        <label className='form-label my-1' htmlFor="password">Old Password</label>
                        <input
                            className='form-control bg-light form-control-sm my-1'
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleInputChange}
                            required
                        />
                        <label className='form-label my-1' htmlFor="password">New Password</label>
                        <input
                            className='form-control bg-light form-control-sm my-1'
                            type="password"
                            id="newPassword"
                            name="newPassword"
                            value={formData.newPassword}
                            onChange={handleInputChange}
                            required
                        />
                        <label className='form-label my-1' htmlFor="password">Confirm Password</label>
                        <input
                            className='form-control bg-light form-control-sm my-1'
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleInputChange}
                            required
                        />
                        {formData.newPassword!==formData.confirmPassword && <div style={{color: 'red', fontSize:'12px'}}>Confirm password not matched</div>}
                    </div>
                    <button className='btn btn-outline-primary btn-sm my-2 w-100' type="submit">Update Profile</button>

                </form>
            </div>
        </div>
    )
}
