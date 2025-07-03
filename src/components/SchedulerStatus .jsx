// SchedulerStatus.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SchedulerStatus = () => {
  const [status, setStatus] = useState('');
   const [getMsg, setGetMsg] = useState('');

  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const response = await axios.get('http://localhost:8081/product/status');
        const response1 = await axios.get('http://localhost:8081/product/getMsg');
       setStatus(response.data);
    setGetMsg(response1.data);
   
      } catch (error) {
        console.error('Failed to fetch scheduler status:', error);
      }
    };

    fetchStatus();

    const interval = setInterval(fetchStatus, 50000); // auto-refresh every 5 sec
    return () => clearInterval(interval); // cleanup on unmount
  }, []);

  return (
    <div>
      {/* <h2>Scheduler Status</h2> */}
      <p>{status}</p>
      <p>{getMsg}</p>
    </div>
  );
};

export default SchedulerStatus;
