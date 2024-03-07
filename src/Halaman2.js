import './App.css';
import { Outlet, Link } from "react-router-dom";


import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
// import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import Sigedhang from './components/Sigedhang';



function Halaman2() {
  return (
    <div ClassName="App">
      <Navbar />
      <Sigedhang/>
      {/* <div className="container mt-4">
        <Content/>
      </div> */}
       <br/>  
       <Footer />
       <Outlet />
     </div>
   );
 }
 
export default Halaman2;