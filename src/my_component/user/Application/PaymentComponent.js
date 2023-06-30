import React, { useState, useEffect } from 'react';
import axios from "axios";

export const PaymentComponent = ({ user }) => {
    const [order, setOrder] = useState(null);

    const createOrder = async () => {

        try {
            const response = await axios.post('https://evisa-backend-10ey.onrender.com/api/createOrder', {
                amount: 100,
                currency: 'INR',
                formId
            });
            if(response.data.flag){
                alert("Paid already...");
            } else{
                const { data } = response;
                setOrder(data);
            }
         
        } catch (error) {
            console.error('Error creating order:', error);
        }
    };

    const [formData, setFormData] = useState(null);

    useEffect(() => {
        const fetchApplicationData = async () => {
            try {
                const response = await axios.get(`https://evisa-backend-10ey.onrender.com/application/ack/${user.userId}`);
                setFormData(response.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchApplicationData();
    }, [user.userId]);

    const formId = formData && formData.personalInfo ? formData.personalInfo.formId : null;
    const appliedTime = formData && formData.formInfo ? formData.formInfo.appliedTime : null;

    const handlePayment = () => {
        const options = {
            key: 'rzp_test_VhZWRTo5Vl8n6L',
            amount: order.amount,
            currency: order.currency,
            name: 'eVisa Serivce',
            description: 'Payment for Application Fee',
            order_id: order.id,
            handler: async (response) => {
                // console.log('Payment success:', response);
                if (formId && appliedTime) {
                    const metaData = {
                        'formId': formId,
                        'appliedTime': appliedTime,
                        'response': response,
                        'amount': order.amount/100,
                        'currency': order.currency,
                    }
                    const result = await axios.post('https://evisa-backend-10ey.onrender.com/api/apply', metaData);
                    alert(result.data.message);
                }

            },
            prefill: {
                name: 'John Doe',
                email: 'john.doe@example.com',
            },
        };

        const razorpay = new window.Razorpay(options);
        razorpay.open();
    };

    return (
        <div className='container text-center p-3'>
            <h4>Application Fee</h4><hr />
            <p className='text-danger py-2 bg-warning'>You can make payment later but until you not pay fee the application will not be consider...</p>
            <div className='d-grid m-5 justify-content-center'>
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
    )
}
