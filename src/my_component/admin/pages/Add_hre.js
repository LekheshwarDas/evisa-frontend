import React, { useState } from 'react';
import CSC from 'country-state-city';
import axios from 'axios';

export const Add_hre = () => {

    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        fatherName: "",
        motherName: "",
        email: "",
        addressLine1: "",
        addressLine2: "",
        phone: "",
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
            addressLine1: "",
            addressLine2: "",
            phone: "",
            pincode: "",
            dateOfBirth: "",

        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = new FormData();
        data.append('email', formData.email);
        data.append('firstname', formData.firstname);
        data.append('lastname', formData.lastname);
        data.append('fatherName', formData.fatherName);
        data.append('motherName', formData.motherName);
        data.append('phone', formData.phone);
        data.append('dateOfBirth', formData.dateOfBirth);
        data.append('addressLine1', formData.addressLine1);
        data.append('addressLine2', formData.addressLine2);
        data.append('pincode', formData.pincode);
        data.append('state', selectedState.name);
        data.append('city', selectedCity.name);
        data.append('country', selectedCountry.name);
        data.append('gender', gender);
        data.append('profilePhoto', profilePhoto);

        try {
            const result = await axios.post("https://evisa-backend-10ey.onrender.com/auth-hre/register", data, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            alert(result.data.message);
        } catch (error) {
            console.error(error);
        }


    }

    const [gender, setGender] = useState("");

    const handleGenderChange = (event) => {
        setGender(event.target.value);
    };

    const [profilePhoto, setProfilePhoto] = useState(null);

    const handleFileChange = (e) => {
        setProfilePhoto(e.target.files[0]);
    }


    const [selectedCountry, setSelectedCountry] = useState(null);
    const [selectedState, setSelectedState] = useState(null);
    const [selectedCity, setSelectedCity] = useState(null);

    const handleCountryChange = (event) => {
        const countryId = event.target.value;
        setSelectedCountry(CSC.getCountryById(countryId));
        setSelectedState(null);
        setSelectedCity(null);
    };

    const handleStateChange = (event) => {
        const stateId = event.target.value;
        setSelectedState(CSC.getStateById(stateId));
        setSelectedCity(null);
    };

    const handleCityChange = (event) => {
        const cityId = event.target.value;
        setSelectedCity(CSC.getCityById(cityId));
    };

    const countryOptions = CSC.getAllCountries().map((country) => (
        <option key={country.id} value={country.id}>
            {country.name}
        </option>
    ));

    const stateOptions = selectedCountry
        ? CSC.getStatesOfCountry(selectedCountry.id).map((state) => (
            <option key={state.id} value={state.id}>
                {state.name}
            </option>
        ))
        : [];

    const cityOptions = selectedState
        ? CSC.getCitiesOfState(selectedState.id).map((city) => (
            <option key={city.id} value={city.id}>
                {city.name}
            </option>
        ))
        : [];

    return (
        <div className='container my-4 justify-content-center bg-light'>
            <form className='p-3' onSubmit={handleSubmit} encType='multipart/form-data'>
                <h4 className='my-4'><b>HR Registration</b></h4>
                <div class="row mb-2">
                    <div class="col">
                        <label class="form-label">First Name</label>
                        <input
                            type="text"
                            class="form-control bg-light form-control-sm"
                            name='firstname'
                            value={formData.firstname}
                            onChange={handleChange}
                            placeholder="First name"
                        />
                    </div>
                    <div class="col">
                        <label class="form-label">Last Name</label>
                        <input
                            type="text"
                            class="form-control bg-light form-control-sm"
                            name='lastname'
                            value={formData.lastname}
                            onChange={handleChange}
                            placeholder="Last name"
                        />
                    </div>
                </div>
                <div class="row mb-2">
                    <div class="col">
                        <label class="form-label">Father Name</label>
                        <input
                            type="text"
                            class="form-control bg-light form-control-sm"
                            name='fatherName'
                            value={formData.fatherName}
                            onChange={handleChange}
                            placeholder="Father name"
                        />
                    </div>
                    <div class="col">
                        <label class="form-label">Mother Name</label>
                        <input type="text"
                            class="form-control bg-light form-control-sm"
                            name='motherName'
                            value={formData.motherName}
                            onChange={handleChange}
                            placeholder="Mother name"
                        />
                    </div>
                </div>
                <div class="row mb-2">
                    <div class="col">
                        <label class="form-label">Gender</label>
                        <select class='form-select bg-light form-select-sm' id="gender" value={gender} onChange={handleGenderChange}>
                            <option value="">Select Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <div class="col">
                        <label class="form-label">Date of Birth</label>
                        <input
                            type="date"
                            class="form-control bg-light form-control-sm"
                            name='dateOfBirth'
                            value={formData.dateOfBirth}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div class="row mb-2">
                    <div class="col">
                        <label class="form-label">Photo</label>
                        <input
                            type="file"
                            class="form-control bg-light form-control-sm"
                            name='profilePhoto'
                            id='profilePhoto'
                            onChange={handleFileChange}
                        />
                    </div>
                    <div class="col">
                        <label class="form-label">Email ID</label>
                        <input
                            type='text'
                            class="form-control bg-light form-control-sm"
                            name='email'
                            value={formData.email}
                            onChange={handleChange}
                            placeholer="Email ID"
                        />
                    </div>
                </div>
                <div class="col w-25">
                    <label class="form-label">Mobile No</label>
                    <input
                        type="text"
                        class="form-control bg-light form-control-sm"
                        name='phone'
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Mobile No"
                    />
                </div>
                <h5 className='my-4'>Address</h5>
                <div class="row mb-2">
                    <div class="col">
                        <label class="form-label">Address Line 1</label>
                        <input
                            type="text"
                            class="form-control bg-light form-control-sm"
                            name='addressLine1'
                            value={formData.addressLine1}
                            onChange={handleChange}
                        />
                    </div>
                    <div class="col">
                        <label class="form-label">Address Line 2</label>
                        <input
                            type="text"
                            class="form-control bg-light form-control-sm"
                            name='addressLine2'
                            value={formData.addressLine2}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div class="row mb-2">
                    <div class='col'>
                        <label class='form-label'>Country</label>
                        <select class='form-select bg-light form-select-sm' value={selectedCountry?.id} onChange={handleCountryChange}>
                            <option value="">Select country</option>
                            {countryOptions}
                        </select>
                    </div>
                    <div class='col'>
                        <label class='form-label'>State</label>
                        <select class='form-select bg-light form-select-sm' value={selectedState?.id} onChange={handleStateChange} disabled={!selectedCountry}>
                            <option value="">Select state</option>
                            {stateOptions}
                        </select>
                    </div>
                </div>
                <div class='row mb-2'>
                    <div class='col'>
                        <label class='form-label'>City</label>
                        <select class='form-select bg-light form-select-sm' value={selectedCity?.id} onChange={handleCityChange} disabled={!selectedState}>
                            <option value="">Select city</option>
                            {cityOptions}
                        </select>
                    </div>
                    <div class='col'>
                        <label class='form-label'>Postcode</label>
                        <input
                            type='text'
                            class='form-control bg-light form-control-sm'
                            name='pincode'
                            value={formData.pincode}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <center><button type="submit" class="btn btn-sm btn-outline-primary my-3 mx-2">Submit</button>
                    <button type="reset" class="btn btn-sm btn-outline-secondary my-3" onClick={handleReset}>Reset</button>
                </center>
            </form>
        </div>
    )
}
