import React, { useState } from 'react';
import PersonalInfoStep from './personalInfo';
import PreviewStep from './preview';
import { PaymentStep } from './payment';

const VisaRenewalForm = ({ user, visaNo, setActiveId }) => {
  const [step, setStep] = useState(1);
  const [fullName, setFullName] = useState('');
  const [passportNumber, setPassportNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [country, setCountry] = useState('');

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case 'fullName':
        setFullName(value);
        break;
      case 'passportNumber':
        setPassportNumber(value);
        break;
      case 'expiryDate':
        setExpiryDate(value);
        break;
      case 'country':
        setCountry(value);
        break;
      default:
        break;
    }
  };

  // Render form steps based on the current step state
  const renderForm = () => {
    switch (step) {
      case 1:
        return (
          <PersonalInfoStep
            fullName={fullName}
            passportNumber={passportNumber}
            expiryDate={expiryDate}
            country={country}
            handleChange={handleChange}
            nextStep={nextStep}
          />
        );
      case 2:
        return (
          <PreviewStep
            fullName={fullName}
            passportNumber={passportNumber}
            expiryDate={expiryDate}
            country={country}
            prevStep={prevStep}
            nextStep={nextStep}
          />
        );
      case 3:
        return (
          <PaymentStep
            userId = {user.userId}
            visaNo = {visaNo}
            fullName={fullName}
            passportNumber={passportNumber}
            expiryDate={expiryDate}
            country={country}
            prevStep={prevStep}
            setActiveId={setActiveId}
          />
        );
      default:
        return null;
    }
  };

  return <div>{renderForm()}</div>;
};

export default VisaRenewalForm;
