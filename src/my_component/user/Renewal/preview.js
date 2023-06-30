import React from 'react';

const PreviewStep = (props) => {
    const { fullName, passportNumber, expiryDate, country, prevStep, nextStep } = props;
    const boxStyle = {
        margin: '10%',
        paddingLeft: '10%',

    }
    return (
        <div style={boxStyle}>
            <h4>Preview</h4>
            <div className='row'>
                <div className='col'>Full Name</div>
                <div className='col'>{fullName}</div>
            </div>
            <div className='row'>
                <div className='col'>Passport Number</div>
                <div className='col'>{passportNumber}</div>
            </div>
            <div className='row'>
                <div className='col'>Expiry Date</div>
                <div className='col'>{expiryDate}</div>
            </div>
            <div className='row'>
                <div className='col'>Country</div>
                <div className='col'>{country}</div>
            </div>
            
            <button className='btn btn-sm btn-secondary my-3' onClick={prevStep}>Previous</button>
            <button className='btn btn-sm btn-success ms-3 my-3 px-3' onClick={nextStep}>Next</button>
        </div>
    );
};

export default PreviewStep;
