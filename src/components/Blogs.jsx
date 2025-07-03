import axios from "axios";
import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, Route, Routes } from "react-router-dom";

const Blogs = () => {
 
   const [data, setData] = useState([]);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState(null);
 
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
              <td><Link to={`/delete/${post.id}`}>Delete</Link></td>
              {/* <td><a href="#">delete</a></td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>  
     </ul>
   );
 };
 

export default Blogs;