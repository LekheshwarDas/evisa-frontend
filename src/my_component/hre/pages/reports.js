import React,{ useState, useEffect} from 'react';
import axios from 'axios';

export const Reports_hr = () => {
  const [user, setUser] = useState(0);
  useEffect(() => {
    axios.get("https://evisa-backend-10ey.onrender.com/auth-user/count").then((response) => {
      setUser(response.data.count)
    });
  }, []);

  const [active, setActive] = useState(0);
  useEffect(() => {
    axios.get("https://evisa-backend-10ey.onrender.com/auth-user/active-count").then((response) => {
      setActive(response.data.count)
    });
  }, []);

  const [applications, setApplications] = useState(0);
  useEffect(() => {
    axios.get("https://evisa-backend-10ey.onrender.com/application/application-count").then((response) => {
      setApplications(response.data.count)
    });
  }, []);

  const [interview, setInterview] = useState(0);
  useEffect(() => {
    axios.get("https://evisa-backend-10ey.onrender.com/interview/interview-count").then((response) => {
      setInterview(response.data.count)
    });
  }, []);

  const [visa, setVisa] = useState(0);
  useEffect(() => {
    axios.get("https://evisa-backend-10ey.onrender.com/visa/visa-count").then((response) => {
      setVisa(response.data.count)
    });
  }, []);

  const [renewals, setRenewals] = useState(0);
  useEffect(() => {
    axios.get("https://evisa-backend-10ey.onrender.com/application/renewal-count").then((response) => {
      setRenewals(response.data.count)
    });
  }, []);

  return (
    <div style={{ margin: "20px", minHeight: '480px'}}>
    <div className='container mb-5'>
    <h4 className='text-center mb-5'>Reports</h4>
        <div class="row mb-5">
          <div className="col-md-4">
            <div className="card px-2 text-light" style={{ boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',backgroundColor: '#FFC107 '}} >
              <h1 className='pt-5'>{user}</h1>
              <h6>Total Users</h6>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card px-2 text-light" style={{ boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',backgroundColor: '#4CAF50'}}>
              <h1 className='pt-5'>{active}</h1>
              <h6>Active Users</h6>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card px-2 text-light" style={{ boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',backgroundColor: '#F44336'}}>
              <h1 className='pt-5'>{applications}</h1>
              <h6>Visa Applications</h6>
            </div>
          </div>
        </div>

        <div class="row">
          <div className="col-md-4">
            <div className="card px-2 text-light" style={{ boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',backgroundColor: '#9C27B0'}}>
              <h1 className='pt-5'>{interview}</h1>
              <h6>Total Interviews</h6>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card px-2 text-light" style={{ boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',backgroundColor: '#607D8B'}}>
              <h1 className='pt-5'>{visa}</h1>
              <h6>Visa Approved</h6>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card px-2 text-light" style={{ boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',backgroundColor: '#2196F3 '}}>
              <h1 className='pt-5'>{renewals}</h1>
              <h6>Visa Renewals</h6>
            </div>
          </div>
      </div>

    </div>

  </div>
  )
}
