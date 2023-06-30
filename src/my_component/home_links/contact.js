import React, { useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faAngleLeft, faTrash, faEnvelope, faPhone, faRobot } from '@fortawesome/free-solid-svg-icons';

export const Contact = () => {
  const [messages, setMessages] = useState([]);
  const [empty, setEmpty] = useState(true);

  const sendMessageToAIModel = async (message) => {
    try {
      const response = await axios.post('https://evisa-backend-10ey.onrender.com/contact', { message });

      // Extract the AI model's reply from the response data
      const reply = response.data.reply;

      return reply;
    } catch (error) {
      console.error('Error communicating with AI model:', error);
      return 'Sorry, I am unable to process your request at the moment.';
    }
  };

  const handleUserMessage = async (message) => {

    const newMessage = {
      role: 'user',
      content: message,
    };

    setMessages((prevMessages) => [...prevMessages, newMessage]);
    setEmpty(false);
    
    // Clear the input field value
    document.querySelector('input').value = '';

    // Send user message to AI model and get response
    const response = await sendMessageToAIModel(message);

    // Add AI model's response to chat history
    setMessages((prevMessages) => [...prevMessages, { role: 'bot', content: response }]);
   
  };

  const handleDelete = (e) => {
    e.preventDefault();
    setMessages([]);
    setEmpty(true);
  }
  return (
    <div className="chat-container" style={{ minHeight: '100vh' }}>
      <h4 className='text-center mt-4'>Contact Us</h4>
      <div className='d-flex justify-content-between text-light'>
        <a className='nav-link text-light' href='/'><FontAwesomeIcon icon={faAngleLeft} /> Back To Home</a>
        <button onClick={handleDelete} className='send-button text-light me-3'>Delete Query <FontAwesomeIcon icon={faTrash} /></button>
      </div>
      <div className="scrollable-box">
        {empty ? (
          <div className='d-grid justify-content-center pt-5'>
            You can Directly contact with following Phone Number/Email Id:<br /><br/>
       <p className='ms-3'>    <FontAwesomeIcon icon={faEnvelope} className='mx-2' /> Email Id : evisaservice129@gmail.com </p> 
       <p className='ms-3'>     <FontAwesomeIcon icon={faPhone} className='mx-2' /> Phone : (+91) 68902 57324  </p>
         <p>   Or You can ask our<FontAwesomeIcon icon={faRobot} className='mx-2' />AI Assistant... </p>
          </div>)
          : (
            <div className="chat-history">
              {messages.map((message, index) => (
                <div key={index} className={`message ${message.role}`}>
                  <div className="message-bubble">{message.content}</div>
                </div>
              ))}
            </div>

          )}
      </div>
      <div className="chat-input-box">
        <input type="text" onKeyPress={(e) => e.key === 'Enter' && handleUserMessage(e.target.value)} placeholder='Type your message...' />
        <button type='reset' className='send-button' onClick={() => handleUserMessage(document.querySelector('input').value)}><FontAwesomeIcon icon={faPaperPlane} /></button>
      </div>

    </div>
  );
}
