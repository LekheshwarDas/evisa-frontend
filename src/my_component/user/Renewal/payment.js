import React, { useState } from 'react';
import axios from "axios";
import moment from 'moment';

const boxStyle = {
    margin: '10%',
    paddingLeft: '10%',
}

export const PaymentStep = ({ userId, visaNo, fullName, passportNumber, expiryDate, country, prevStep, setActiveId }) => {
    const [order, setOrder] = useState(null);
    const [view, setView] = useState(null);
    const createOrder = async () => {
        try {
            const response = await axios.post('https://evisa-backend-10ey.onrender.com/api/createOrder', {
                amount: 100,
                currency: 'INR',
            });
            const { data } = response;
            setOrder(data);
        } catch (error) {
            console.error('Error creating order:', error);
        }
    };

    const handlePayment = () => {
        const options = {
            key: 'rzp_test_VhZWRTo5Vl8n6L',
            amount: order.amount,
            currency: order.currency,
            name: 'eVisa Serivce',
            description: 'Payment for Visa Renewal',
            order_id: order.id,
            handler: async (response) => {
                const formData = {
                    'visaNo': visaNo,
                    'userId': userId,
                    'fullName': fullName,
                    'passportNumber': passportNumber,
                    'expiryDate': expiryDate,
                    'country': country,
                    'response': response,
                    'amount': order.amount / 100,
                    'currency': order.currency
                }
                const result = await axios.post('https://evisa-backend-10ey.onrender.com/application/renewal', formData);
                alert(result.data.message);
                setView(result.data.newRenewal);
            },
            prefill: {
                name: 'John Doe',
                email: 'john.doe@example.com',
            },
        };

        const razorpay = new window.Razorpay(options);
        razorpay.open();
    };

    return (<>
        {!view ? (<div className='container text-center p-3'>
            <h4>Payment</h4>
            <div className='d-grid m-5 justify-content-center'>
                <button className='btn btn-sm btn-secondary my-3' onClick={prevStep}>Previous</button>
                <button className='btn btn-outline-success btn-sm' onClick={createOrder}>Pay Application Fee</button>
                {order && (
                    <>
                        <p className='shadow shadow-md rounded-2 my-3'>Amount: {order.amount / 100} {order.currency}</p>
                        <button className='btn btn-outline-primary btn-sm mb-3' onClick={handlePayment}>Proceed to Pay</button>
                        <button className='btn btn-outline-secondary btn-sm' onClick={() => setOrder(null)}>Close</button>
                    </>
                )}
            </div>
        </div>
        ) : (
            <div style={boxStyle}>
                <h4>Acknowledgement</h4>
                <div className='row border-top'>
                    <div className='col'>User Id</div>
                    <div className='col'>{view.userId}</div>
                </div>
                <div className='row border-top'>
                    <div className='col'>Visa Number</div>
                    <div className='col'>{view.visaNo}</div>
                </div>

                <div className='row border-top'>
                    <div className='col'>Full Name</div>
                    <div className='col'>{view.fullName}</div>
                </div>
                <div className='row border-top'>
                    <div className='col'>Passport Number</div>
                    <div className='col'>{view.passportNumber}</div>
                </div>
                <div className='row border-top'>
                    <div className='col'>Expiry Date</div>
                    <div className='col'>{moment(view.expiryDate).format('DD/MM/YYYY')}</div>
                </div>
                <div className='row border-top'>
                    <div className='col'>Country</div>
                    <div className='col'>{view.country}</div>
                </div>
                <div className='row border-top'>
                    <div className='col'>Payment Id</div>
                    <div className='col'>{view.response.razorpay_payment_id}</div>
                </div>
                <div className='row border-top'>
                    <div className='col'>Fee Amount</div>
                    <div className='col'>{view.amount} {view.currency}</div>
                </div>
                <div className='row border-top border-bottom'>
                    <div className='col'>Applied Date</div>
                    <div className='col'>{moment(view.appliedtime).format('DD/MM/YYYY')}</div>
                </div>

                <center>
                    <button className='btn btn-outline-danger btn-sm my-3' onClick={() => setActiveId('c1')}>Close</button>
                </center>
            </div>
        )}
    </>
    )
}
