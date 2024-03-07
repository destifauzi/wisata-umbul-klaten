//import logo from './logo.svg';
import './App.css';
import { Row, Col } from 'react-bootstrap';
//import Komponen1 from './components/Komponen1';
//import ClassKomponen from './components/ClassKomponen';
import { Outlet, Link } from "react-router-dom";


import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';


function App() {
  return (
    <div ClassName="App">
      <Navbar />
      <Header/>
      {/* <Flex/> */}
      <div className="container mt-4">
        <Content/>
      </div>
      {/* <div class="right-container">
        <Card/>
        <Card/>
        <Card/>
      </div>
      <Flex/> */}
       <br/>  
       <Footer />
       <Outlet />
     </div>
   );
 }
 
export default App;