import './App.css';
import { Outlet, Link } from "react-router-dom";


import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
// import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import brintik from './components/brintik';



function Halaman3() {
  return (
    <div ClassName="App">
      <Navbar />
      <brintik/>
      {/* <div className="container mt-4">
        <Content/>
      </div> */}
       <br/>  
       <Footer />
       <Outlet />
     </div>
   );
 }
 
export default Halaman3;