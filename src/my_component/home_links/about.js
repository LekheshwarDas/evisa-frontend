import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';

export const About = () => {
  return (
    <div className='disclaimer p-4'>
    <div className='about-us'>
       <h2>About Us: eVisa Service - Simplifying Visa Processing</h2>
       <a className='nav-link text-primary' href='/'><FontAwesomeIcon icon={faAngleLeft}/> Back To Home</a>
      <p>
        Welcome to eVisa Service, your trusted partner in simplifying the visa application and processing experience.
        We are a web-based visa processing system designed to make the visa application process efficient, convenient,
        and hassle-free. Our goal is to provide a user-friendly platform that enables travelers to apply for visas online,
        saving time and effort.
      </p>
      <p>
        At eVisa Service, we understand that obtaining a visa can be a complex and time-consuming task.
        That's why we have developed a comprehensive online platform that streamlines the entire process,
        from application submission to visa approval. Our system is designed to cater to a wide range of visa types,
        including tourist visas, business visas, student visas, and more.
      </p>
      <p>
        What sets us apart is our commitment to delivering exceptional customer service. We believe that every traveler
        deserves a smooth and stress-free visa application experience. With our intuitive interface and dedicated support team,
        we strive to provide prompt assistance and guidance throughout the entire process. Our customer-centric approach ensures
        that your needs are met, and any concerns are addressed promptly and professionally.
      </p>
      <h3>Key Features of eVisa Service:</h3>
      <ul>
        <li>User-Friendly Interface: Our online platform is designed to be user-friendly, making it easy for travelers to navigate through the visa application process.</li>
        <li>Fast and Efficient Processing: We leverage advanced technology to expedite the application process, aiming to deliver quick turnaround times without compromising on accuracy.</li>
        <li>Secure and Confidential: Your privacy and security are our top priorities. We employ robust security measures to safeguard your personal and sensitive information.</li>
        <li>Comprehensive Visa Information: eVisa Service offers a wealth of information on various visa types, entry requirements, supporting documents, and visa fees.</li>
        <li>Dedicated Customer Support: Our exceptional customer support team is readily available to assist you throughout your visa application journey.</li>
        <li>Multi-language Support: We offer multi-language support to cater to our global user base.</li>
      </ul>
      <p>
        At eVisa Service, we strive to transform the way travelers obtain visas, making the process simpler, more efficient, and stress-free.
        We aim to empower individuals and businesses to explore new horizons, foster international collaborations, and experience the joys of travel.
        Trust eVisa Service for a seamless visa application experience, and let us take care of your visa processing needs.
      </p>
      </div>
    </div>
  )
}
