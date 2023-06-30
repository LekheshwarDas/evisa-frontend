import React from 'react';
import './homepage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';


export const Disclaimer = () => {
  return (
    <div className='disclaimer p-4'>
    <div className='about-us'>
      <h2>Disclaimer</h2>
      <a className='nav-link text-primary' href='/'><FontAwesomeIcon icon={faAngleLeft}/> Back To Home</a>
      <p>
        Thank you for choosing our eVisa service, a web-based visa processing system. We would like to draw your attention to the following disclaimer:
      </p>
      <ol>
        <li>
          <strong>Visa Approval:</strong> Our eVisa service provides assistance in the visa application process; however, the final decision regarding visa approval rests solely with the respective government authorities. We do not guarantee the approval of any visa application submitted through our system.
        </li>
        <li>
          <strong>Accuracy of Information:</strong> While we strive to ensure the accuracy of the information provided on our website, we cannot guarantee that all information is up to date, complete, or error-free. Visa requirements, fees, and processing times are subject to change without notice. It is the applicant's responsibility to verify the latest information from the relevant government authorities.
        </li>
        <li>
          <strong>Personal Responsibility:</strong> The visa application process requires the submission of personal information and supporting documents. It is the applicant's responsibility to ensure the accuracy and completeness of the provided information. We are not liable for any consequences arising from incomplete, inaccurate, or misleading information provided by the applicant.
        </li>
        <li>
          <strong>Third-Party Services:</strong> Our eVisa service may provide links or references to third-party websites or services. We do not endorse or have control over the content, accuracy, or security of these external resources. Any interactions or transactions with third-party services are at your own risk, and we are not responsible for any damages or losses incurred.
        </li>
        <li>
          <strong>Technical Issues:</strong> While we make every effort to maintain the availability and functionality of our eVisa service, we cannot guarantee uninterrupted access or the absence of technical issues. We are not responsible for any loss or inconvenience caused by system outages, network failures, or other technical problems beyond our control.
        </li>
        <li>
          <strong>Legal Advice:</strong> Our eVisa service does not provide legal advice. The information provided on our website is for general guidance purposes only. For specific visa requirements or legal advice, we recommend consulting with the relevant government authorities or seeking professional assistance.
        </li>
        <li>
          <strong>Privacy and Security:</strong> We take the privacy and security of your personal information seriously. However, please be aware that no online system can guarantee absolute security. While we employ industry-standard measures to protect your data, we cannot be held liable for any unauthorized access, data breaches, or other security incidents beyond our control.
        </li>
      </ol>
      <p>
        By using our eVisa service, you acknowledge and agree to the above disclaimer. It is essential to review and understand the terms and conditions before proceeding with any visa application through our system.
      </p>
      <p>
        If you have any questions or concerns regarding our eVisa service or this disclaimer, please contact our customer support team for further assistance.
      </p>
    </div>
    </div>
  )
}
