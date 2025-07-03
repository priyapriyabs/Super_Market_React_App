import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';


const Contact = () => {

  const [marketName, setMarketName] = useState('');
   const [location, setLocation] = useState('');
    const [customerCare, setCustomerCare] = useState('');
     const [email, setEmail] = useState('');
      const [managerName, setManagerName] = useState('');
      const [managerId, setManagerId] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8081/product', { marketName,location,customerCare,email,managerName,managerId});
      alert('Product saved!');
    } catch (err) {
      console.error(err);
      alert('Error saving Product.');
    }
  };
 
  return (
    <div>
      <h2>Users Form</h2>
     
       <form onSubmit={handleSubmit} style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
      <input 
        type="text"
        value={marketName}
        onChange={(e) => setMarketName(e.target.value)}
        placeholder="Enter marketName"
      />
      <input 
        type="text"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        placeholder="Enter location"
      />
      <input 
        type="number"
        value={customerCare}
        onChange={(e) => setCustomerCare(e.target.value)}
        placeholder="Enter customerCare"
      />
      <input 
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter email"
      />
      <input 
        type="text"
        value={managerName}
        onChange={(e) => setManagerName(e.target.value)}
        placeholder="Enter managerName"
      />
      <input 
        type="number"
        value={managerId}
        onChange={(e) => setManagerId(e.target.value)}
        placeholder="Enter managerId"
      />
      <button type="submit">Save</button>
    </form>
    </div>
  );
};

export default Contact;
