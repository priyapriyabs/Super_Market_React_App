import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const EditProduct = () => {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({ marketName: "", location: "" ,customerCare: "", email: "", managerName: "", managerId: ""});
  const [editingId, setEditingId] = useState(null);

  // Fetch all users (READ)
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const res = await axios.get("http://localhost:8081/product/viewDevDetails/users");
    setUsers(res.data);
  };

  // Create or Update user
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (editingId) {
      // Update
      await axios.put(`http://localhost:8081/product/users/${editingId}`, formData);
    } else {
      // Create
      await axios.post("http://localhost:8081/product/users", formData);
    }

    setFormData({ marketName: "", location: "",customerCare: "",email: "",managerName: "",managerId: "" });
    setEditingId(null);
    fetchUsers();
  };

  // Delete
  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:8081/product/users/${id}`);
    fetchUsers();
  };

  // Prepare form for edit
  const handleEdit = (user) => {
    setFormData({ marketName: user.marketName, location: user.location,customerCare: user.customerCare,email: user.email,managerName: user.managerName,managerId: user.managerId });
    setEditingId(user.id);
  };

  return (
    <div>
      <h2>User Management</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={formData.marketName}
          onChange={(e) => setFormData({ ...formData, marketName: e.target.value })}
          placeholder="marketName"
          required
        />
        <input
          type="text"
          value={formData.location}
          onChange={(e) => setFormData({ ...formData, location: e.target.value })}
          placeholder="location"
          required
        />
        <input
          type="number"
          value={formData.customerCare}
          onChange={(e) => setFormData({ ...formData, customerCare: e.target.value })}
          placeholder="customerCare"
          required
        />
        <input
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          placeholder="email"
          required
        />
        <input
          type="text"
          value={formData.managerName}
          onChange={(e) => setFormData({ ...formData, managerName: e.target.value })}
          placeholder="managerName"
          required
        />
        <input
          type="number"
          value={formData.managerId}
          onChange={(e) => setFormData({ ...formData, managerId: e.target.value })}
          placeholder="managerId"
          required
        />
        <button type="submit">{editingId ? "Update" : "Create"}</button>
      </form>

      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.marketName} ({user.location}) ({user.customerCare}) ({user.email}) ({user.managerName}) ({user.managerId})
            <button onClick={() => handleEdit(user)}>Edit</button>
            <button onClick={() => handleDelete(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EditProduct;
