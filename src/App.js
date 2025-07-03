import logo from './logo.svg';
import './App.css';
import Products from './components/Products';
import Header from './components/Header';
import Footer from './components/Footer';
import Layout from './components/Layout';
import Blogs from './components/Blogs';
import Contact from './components/Contact';
import Home from './components/Home';
import { Navbar } from 'react-bootstrap';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import SchedulerStatus from './components/SchedulerStatus ';
import EditProduct from './components/EditProduct';


function App() {
  return (
    <div className="App">
      <Header />
       <h1>Welcome to the Super-Market</h1>
       {/* <Products /> */}
       <SchedulerStatus />
      <div>
        <h1>My React App with Routing</h1>

        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/blog" element={<Blogs />} />
          <Route  path="/save" element={<Contact  />} />
         
        </Routes>
        
      </div>
<Footer />
    </div>
  );
}

export default App;
