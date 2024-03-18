
import './App.css';
import NavBar from "./components/navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Vehiculos from "./components/Vehiculos";
import FormLogIn from './components/FormLogIn';
import Footer from './components/Footer';
import {Image} from "react-bootstrap";
import imagen from './frontPage.png';

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <div className='ImgContainer'><Image src={imagen} /></div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FormLogIn />} /> 
          <Route path="/home" element={<Vehiculos />} />
        </Routes>
      </BrowserRouter>
      <Footer></Footer>
    </div>
  );
}

export default App;
