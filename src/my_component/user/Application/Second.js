import React, { useState, useEffect } from 'react'
import axios from 'axios';

export const Second = ({ onNext }) => {

    const [countries, setCountries] = useState([]);
    
    useEffect(() => {
        const fetchCountries = async () => {
            try {
                const response = await axios.get('https://restcountries.com/v2/all');
                setCountries(response.data);
            } catch (error) {
                console.error('Error fetching countries:', error);
            }
        };

        fetchCountries();
    }, []);

    const occupations = [
        { id: 1, name: 'Software Developer' },
        { id: 2, name: 'Data Analyst' },
        { id: 3, name: 'Graphic Designer' },
        { id: 4, name: 'Marketing Manager' },
      ];

    const [formData, setFormData] = useState({
        passport: '',
        issue: '',
        expiration: '',
        issuance: '',
        purpose: '',
        stay: '',
        departure: '',
        arrival: '',
        occupation: '',
        salary: '',
        employerName: '',
        address: '',
        income: '',
        savings: '',
        assets: '',
        appliedCountry: ''
    });


    const handleChange = (e) => {
        const value = e.target.value;
        setFormData({
            ...formData,
            [e.target.name]: value
        })
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        const travelDetails = {
            'passport': formData.passport,
            'issue': formData.issue,
            'expiration': formData.expiration,
            'issuance': formData.issuance,
            'purpose': formData.purpose,
            'stay': formData.stay,
            'departure': formData.departure,
            'arrival': formData.arrival,
            'occupation': formData.occupation,
            'salary': formData.salary,
            'employerName': formData.employerName,
            'address': formData.address,
            'income': formData.income,
            'savings': formData.savings,
            'assets': formData.assets,
            'appliedCountry': formData.appliedCountry
        }
        try {
            onNext({ travelDetails })
        } catch (error) {
            console.error(error);
        }

    }

    return (
        <div className='container'>
            <form onSubmit={handleSubmit}>
                <div class="section">
                    <h4>Passport Information</h4><hr />
                    <div className='row mb-2'>
                        <div class="col mb-3">
                            <label htmlFor="passport">Passport Number:</label>
                            <input type="text" className='form-control bg-light' value={formData.passport} onChange={handleChange} id="passport" name="passport" required />
                        </div>
                        <div class="col mb-3">
                            <label htmlFor="issue">Date of Issue:</label>
                            <input type="date" className='form-control bg-light' value={formData.issue} onChange={handleChange} id="issue" name="issue" required />
                        </div>
                    </div>
                    <div className='row mb-2'>
                        <div class="col mb-3">
                            <label htmlFor="expiration">Date of Expiration:</label>
                            <input type="date" className='form-control bg-light' value={formData.expiration} onChange={handleChange} id="expiration" name="expiration" required />
                        </div>
                        <div class="col mb-3">
                            <label htmlFor="issuance">Country of Issuance:</label>
                            <select onChange={handleChange} id="issuance" className='form-select bg-light' value={formData.issuance} name="issuance" required>
                            <option value="">Select a country</option>
                                {countries.map((country) => (
                                    <option key={country.alpha2Code} value={country.name}>
                                        {country.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>

                <div class="section">
                    <h4>Travel Information</h4><hr />
                    <div className='row mb-2'>
                        <div class="col mb-3">
                            <label htmlFor="purpose">Purpose of Trip:</label>
                            <select onChange={handleChange} id="purpose" className='form-select bg-light' value={formData.purpose} name="purpose" required>
                                <option value="">-- Select --</option>
                                <option>Tourism</option>
                                <option>Education</option>
                                <option>Business</option>
                                <option>Medical Treatment</option>
                            </select>
                        </div>
                        <div class="col mb-3">
                            <label htmlFor="appliedCountry">Applied Country</label>
                            <select onChange={handleChange} id="appliedCountry" className='form-select bg-light' value={formData.appliedCountry} name="appliedCountry" required>
                            <option value="">Select a country</option>
                                {countries.map((country) => (
                                    <option key={country.alpha2Code} value={country.name}>
                                        {country.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div class="col mb-3">
                            <label htmlFor="stay">Intended Length of Stay</label>
                            <input type="text" className='form-control bg-light' value={formData.stay} onChange={handleChange} id="stay" name="stay" required />
                        </div>
                    </div>
                    <h6><u>Dates of Intended Travel</u></h6>
                    <div className='row mb-2'>
                        <div class="col mb-3">
                            <label htmlFor="departure">Departure Date</label>
                            <input type="date" className='form-control bg-light' value={formData.departure} onChange={handleChange} id="departure" name="departure" required />
                        </div>
                        <div class="col mb-3">
                            <label htmlFor="arrival">Arrival Date</label>
                            <input type="date" className='form-control bg-light' value={formData.arrival} onChange={handleChange} id="arrival" name="arrival" required />
                        </div>
                    </div>
                </div>

                <center>
                    <button type="submit" class="btn btn-sm btn-outline-primary my-3 mx-2">Save & Next</button>
                    <button type="reset" class="btn btn-sm btn-outline-secondary my-3">Reset</button>
                </center>
            </form>
        </div>
    )
}
