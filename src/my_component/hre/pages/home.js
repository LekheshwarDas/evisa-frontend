import React, { useState, useEffect } from 'react';
import '../../../App.css';

const brandStyle = {
  fontFamily: 'Arial, sans-serif',
  background: '-webkit-linear-gradient(#ee7752, #e73c7e)',
  WebkitBackgroundClip: 'text',
  color: 'transparent',
}


export const Home_hr = ({ user }) => {

  const base64 = btoa(
    String.fromCharCode(...new Uint8Array(user.profilePhoto.data.data))
  );

  function capitalizeWords(str) {
    const words = str.split(" ");
    const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
    return capitalizedWords.join(" ");
  }

  const FullName = user.firstname + ' ' + user.lastname;

  const date = new Date(user.dateOfBirth);
  const formattedDate = date.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  }).replace(/\//g, '-');


  return (
      <div className='m-5 ms-5' style={{margin: "20px", textAlign: "center", height: '100%', minHeight: '480px'}}>
        
        <div className='d-flex justify-content-center'>
        <p className='login w-75'>
        <h4>Rules and Criteria for approving Visa Applications</h4>
          <br />The rules and criteria for approving a visa application vary depending on the country and type of visa being applied for. While each country has its own specific requirements, there are some common factors that are typically considered during the visa approval process. Here are some general rules and criteria that may be taken into account:
          <br />
          <br />1. Valid Passport: The applicant must possess a valid passport that meets the validity requirements set by the issuing country.
          <br />
          <br />2. Purpose of Travel: The applicant must clearly state the purpose of their visit, such as tourism, business, education, employment, or family visit. The supporting documents provided should align with the stated purpose.
          <br />
          <br />3. Financial Capability: The applicant must demonstrate sufficient financial means to cover the expenses of their stay, including accommodation, transportation, and living costs. This can be shown through bank statements, sponsorship letters, or proof of employment and income.
          <br />
          <br />4. Strong Ties to Home Country: The applicant must prove their intention to return to their home country after the authorized stay. This can be demonstrated through family ties, property ownership, employment contracts, or other commitments that indicate their strong ties to their home country.
          <br />
          <br />5. Compliance with Immigration Laws: The applicant should have a clean immigration history and should not have violated immigration laws or overstayed visas in the past.
          <br />
          <br />6. Health and Security: The applicant may need to provide a medical certificate, vaccination records, and undergo security checks to ensure they do not pose a health or security risk to the issuing country.
          <br />
          <br />7. Invitation or Sponsorship: In some cases, the applicant may need to provide an invitation letter or sponsorship from a host or organization in the destination country, detailing the purpose and duration of the visit.
          <br />
          <br />8. Travel Itinerary: The applicant should provide a comprehensive travel itinerary, including details of accommodation, transportation, and planned activities during their stay.
          <br />
          <br />9. Documentation: The applicant must submit all required documentation accurately and completely, including completed visa application forms, photographs, and any additional documents specified by the issuing authority.
          <br />
          <br />10. Consular Discretion: Ultimately, the visa approval process involves a certain degree of discretion on the part of the consular officer or immigration official reviewing the application. They assess the overall credibility and eligibility of the applicant based on the provided information and supporting documents.
          <br />
          <br />It's important to note that these rules and criteria can vary significantly depending on the country, type of visa, and specific circumstances. It is advisable to consult the official website of the embassy or consulate of the destination country for the most accurate and up-to-date information regarding visa requirements and approval criteria.
        </p>
        </div>
      </div>
  )
}
