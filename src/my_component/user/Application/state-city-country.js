import React, { useState } from 'react'

export const Address = ({ address }) => {

    const [local, setLocal] = useState({
        addressLine1: '',
        addressLine2: '',
        pincode: '',
        country:'',
        state:'',
        city:'', 
    })

    const handleChange = (e) => {
        const value = e.target.value;
        setLocal({
            ...local,
            [e.target.name]: value
        })
        address(local);
    }

    return (
        <div>
            <div class="row mb-2">
                <div class="col">
                    <label class="form-label">Address Line 1</label>
                    <input
                        type="text"
                        class="form-control bg-light"
                        name='addressLine1'
                        value={local.addressLine1}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div class="col">
                    <label class="form-label">Address Line 2</label>
                    <input
                        type="text"
                        class="form-control bg-light"
                        name='addressLine2'
                        value={local.addressLine2}
                        onChange={handleChange}
                        required
                    />
                </div>
            </div>
            <div class="row mb-2">
                <div class='col'>
                    <label class='form-label'>Country</label>
                    <input
                        type="text"
                        class="form-control bg-light"
                        name='country'
                        value={local.country}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div class='col'>
                    <label class='form-label'>State</label>
                    <input
                        type="text"
                        class="form-control bg-light"
                        name='state'
                        value={local.state}
                        onChange={handleChange}
                        required
                    />
                </div>
            </div>
            <div class='row mb-2'>
                <div class='col'>
                    <label class='form-label'>City</label>
                    <input
                        type="text"
                        class="form-control bg-light"
                        name='city'
                        value={local.city}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div class='col'>
                    <label class='form-label'>Postcode</label>
                    <input
                        type='text'
                        class='form-control bg-light'
                        name='pincode'
                        value={local.pincode}
                        onChange={handleChange}
                        required
                    />
                </div>
            </div>
        </div>
    )
}
