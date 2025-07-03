import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const EditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({ marketName: '', location: '', customerCare: '', email: '', managerName: '', managerId: ''  });

  useEffect(() => {
    fetch(`/product/${id}`)
      .then(res => res.json())
      .then(user => setFormData({ marketName: user.marketName, location: user.location, customerCare: user.customerCare, email: user.email, managerName: user.managerName, managerId: user.managerId }))
      .catch(err => console.error('Error fetching user:', err));
  }, [id]);

  const handleChange = (e) => {
    const { marketName, value } = e.target;
    setFormData(prev => ({ ...prev, [marketName]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`/product/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    })
      .then(res => {
        if (!res.ok) throw new Error('Failed to update user');
        navigate('/');
      })
      .catch(err => console.error('Error updating user:', err));
  };

  return (
    <div>
      <h2>Edit User</h2>
      <form onSubmit={handleSubmit}>
        <label>
         Market Name: <input name="marketName" value={formData.marketName} onChange={handleChange} />
        </label><br /><br />
        <label>
          Location: <input name="location" type="text" value={formData.location} onChange={handleChange} />
        </label><br /><br />
          <label>
         Customer Care: <input name="customerCare" value={formData.customerCare} onChange={handleChange} />
        </label><br /><br />
          <label>
         Email: <input name="email" value={formData.email} onChange={handleChange} />
        </label><br /><br />
          <label>
         Manager Name: <input name="managerName" value={formData.managerName} onChange={handleChange} />
        </label><br /><br />
          <label>
        managerId: <input name="managerId" value={formData.managerId} onChange={handleChange} />
        </label><br /><br />
        <button type="submit">Save</button>
        <button type="button" onClick={() => navigate('/')}>Cancel</button>
      </form>
    </div>
  );
};


export default EditProduct;
