import axios from "axios";
import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, Navigate, Route, Routes, useNavigate } from "react-router-dom";

const Blogs = () => {
 
   const [data, setData] = useState([]);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState(null);

   const navigate = useNavigate();
 
   useEffect(() => {
     axios.get(`http://localhost:8081/product/viewDevDetails`)
       .then((response) => {
         console.log(response)
         setData(response.data);
         setLoading(false);
       })
       .catch((err) => {
         setError(err.message);
         setLoading(false);
       });
   }, []);

    const [editRowId, setEditRowId] = useState(null); // ID of the row being edited
  const [editFormData, setEditFormData] = useState({ marketName: '', location: '', customerCare: '', email: '', managerName: '', managerId: '' });

const handleEditClick = (post) => {
    setEditRowId(post.id);
    setEditFormData({ marketName: post.marketName, location: post.location,customerCare: post.customerCare,email: post.email,managerName: post.managerName,managerId: post.managerId });
  navigate(`/edit/${post.id}`);
  };



   const handleDelete = async (id) => {
  if (window.confirm('Are you sure you want to delete this row?')) {
    try {
      await fetch(`/product/delete/${id}`, { method: 'DELETE' });
      setData(data.filter((item) => item.id !== id));
    } catch (err) {
      console.error('Delete failed', err);
    }
  }
};

   if (loading) return <p>Loading...</p>;
   if (error) return <p>Error: {error}</p>;
 
   return (
     <ul>
        <div>
      <h2>User Table</h2>
      <table border="1" cellPadding="10" style={{ borderCollapse: 'collapse',backgroundColor:"wheat" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Market Name</th>
            <th>Location</th>
             <th>Customer Care</th>
              <th>Email</th>
               <th>Manager Name</th>
                <th>Manager Id</th>
                <th colSpan={2}>Action</th>
                
          </tr>
        </thead>
        <tbody>
          {data.map(post => (
            <tr key={post.id}>

              

              <td>{post.id}</td>
              <td>{post.marketName}</td>
              <td>{post.location}</td>
              <td>{post.customerCare}</td>
              <td>{post.email}</td>
              <td>{post.managerName}</td>
              <td>{post.managerId}</td>
               <button onClick={() => handleDelete(post.id)}>Delete</button>
              <td>
                  <button onClick={() => handleEditClick(post)}>Edit</button>
                </td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>  
     </ul>
   );
 };
 

export default Blogs;