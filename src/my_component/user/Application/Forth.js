import React, { useState } from 'react'
import { Preview } from './preview';

export const Forth = ({ user,formData,onNext,handleSubmit}) => {

  const [isPreview, setIsPreview] = useState(false);
  const currentDate = new Date();

  return (
    <div className='container'>
      {
        !isPreview ? (
          <form onSubmit={handleSubmit}>
            <p>
              I, {user.firstname + ' ' + user.lastname}, hereby declare that:
              <br />
              <br /> 1. I have completed the visa application form and provided all required documents.
              <br />
              <br /> 2. All information provided in the visa application form and supporting documents is true and correct to the best of my knowledge.
              <br />
              <br /> 3. I understand that any false statements or misrepresentations in my visa application may result in the rejection of my application, as well as other legal consequences.
              <br />
              <br /> 4. I understand that the issuance of a visa is subject to the discretion of the visa issuing authority, and that there is no guarantee that my visa application will be approved.
              <br />
              <br /> 5. I will comply with all laws and regulations of the country I am visiting, and will not engage in any activities that are prohibited by law.
              <br />
              <br /> 6. I will not overstay my visa or violate any visa conditions.
              <br />
              <br /> 7. I will obtain all necessary permits and authorizations for any activities I wish to undertake in the country I am visiting.
              <br />
              <br /> 8. I will purchase adequate travel and health insurance for the duration of my stay in the country I am visiting.
              <br />
              <br /> 9. I understand that the visa application process may involve the collection and processing of my personal information, and I consent to the collection and processing of my personal information for the purpose of processing my visa application.
              <br />
              <br /> 10. I agree to indemnify and hold harmless the visa issuing authority and its officers, employees, and agents from any and all claims, damages, and expenses arising from my visa application or my activities in the country I am visiting.
              <br />
              <br />  I understand and agree to the above terms and conditions.
              <br />
              <br />  Signed: <input className='rounded-2 border-none' placeholder='Write your Name' required/>
              <br />  Date: {currentDate.toDateString()}
              <br />
            </p>
            <center>
              <button type="submit" class="btn btn-sm btn-outline-primary my-3 mx-2">Submit Application</button>
              <button type="button" class="btn btn-sm btn-outline-secondary my-3 mx-2" onClick={()=>setIsPreview(true)}>Preview</button>

            </center>
          </form>
        )
          : <Preview user={user} formData={formData} setIsPreview={setIsPreview}/>
      }

    </div>
  )
}
