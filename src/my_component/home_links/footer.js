import React from 'react'
import './homepage.css'
import line1 from '../../images/line1.png';
export const Footer = () => {
  return (
    <div>
         <div className='footer w-100 py-3 text-white'>
                <div className='d-flex justify-content-evenly'>
                    <div className='d-grid justify-content-center w-100'>
                        <p><b className='fs-6'>eVisa Service</b><br/>
                            eVisa Service is aimed at improving a long lasting <br />
                            processing system on visa. It is also aimed at keeping <br />
                            records of all immigrants and for processing visa with <br />
                            view of modifying it into a full computerized system.
                        </p>
                    </div>
                    <div>
                        
                        <ul class="nav d-grid flex-column justify-content-center">
                            <li class="nav-item mx-3 text-white">
                                <a><b href='#'>QUICK LINKS</b></a>
                            </li>
                            <li class="nav-item mr-btm">
                                <a class="nav-link"href="/">Home</a>
                            </li>
                            <li class="nav-item mr-btm">
                                <a class="nav-link" href="/about">About Us</a>
                            </li>
                            <li class="nav-item mr-btm">
                                <a class="nav-link" href="/disclaimer">Disclaimer</a>
                            </li>
                            <li class='nav-item mr-btm'>
                                <a class='nav-link' href='/contact'>Contact Us</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <center className='py-2 mr-btm'><img src={line1} alt="this is car"/></center>
                <footer className='text-center '>Copyright © 2023 www.evisaservice.com</footer>
            </div>
    </div>
  )
}
