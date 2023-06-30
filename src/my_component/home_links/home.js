import React from 'react'
import './homepage.css'
import image1 from '../../images/image1.png';
import image2 from '../../images/image2.png';
import image3 from '../../images/image3.png';
import { Navbar } from './navbar';

export const Home = () => {
    
    return (
        <div>
            <Navbar/>
            <div className='hello'>
                
                <div className='d-flex homepage'>
                    <p class="fs-3"><b>E-Visa<br /> Proccessing<br /> Follow-up <br />System</b></p>
                    <p className='px-5 py-1 fs-6 text-small'>
                        Using this system user can apply their visa online. It is key <br/>
                        to enhancing both security and convenience.In this system user<br/>
                        has to upload some useful document for verification purpose. <br/>
                        Reduced and the applicant can apply for visa conveniently from<br/>
                        any place. As aresult, a new generation of e-Visa solutions <br/>
                        has emerged, User can view their all visa process online through<br/>
                        an e-Visa portal.
                    </p>
                </div>
            </div>
            <div class="alert text-center" role="alert">
                <marquee> <a href="#" class="link text-danger">New User can register first then login after the approval of HR Executive</a></marquee>
            </div>

            <div>
                <div className='d-flex my-5 py-3 justify-content-evenly'>

                    <p className='vertical-align my-2' ><b><i>Why is it necessary to have a visa to travel<br />
                        outside the home country?</i> </b><br />
                        There are visa policies and agreements present in many <br />
                        countries, and because of these policies, citizens can <br />
                        travel freely without a visa. However, if you would like to <br />
                        travel to a country that doesn’t have a visa policy in <br />
                        place with your home country, then visas become <br />
                        compulsory</p>


                    <img className="image-size"src={image1} alt="image1" />
                </div>
                <div className='d-flex my-5 py-3 justify-content-evenly'>
                    <img className="image-size"src={image2} alt="image2" />
                    <p className='vertical-align my-2'><b><i>What is the meaning of the Visa policy of a <br />
                        country?</i> </b><br />
                        The rule that states who may or may not enter the <br />
                        country is called a country’s visa policy. The passport <br />
                        holders of one country can enter visa-free, but passport <br />
                        holders of other countries need a visa as per this policy. <br />
                        Though most visas are bilateral, some country’s visa <br />
                        policies are not.</p>

                </div>
                <div className='d-flex my-5 py-3 justify-content-evenly'>

                    <p className='vertical-align my-3'><b><i>What is the reason some countries have <br />
                        Visa restrictions?</i> </b><br />
                        Prevention of illegal immigration, criminal activities, and <br />
                        control of the flow of visitors in and out of the country <br />
                        are the prominent reasons some countries have Visa <br />
                        restrictions in order. The authorities will be able to vet <br />
                        potential visitors by forcing travelers to apply for visas.</p>
                    <img className="image-size"src={image3} alt="image3" />
                </div>
            </div>
        </div>

    )
}
