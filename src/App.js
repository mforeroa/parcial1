
import './App.css';
import NavBar from "./components/navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Vehiculos from "./components/Vehiculos";
import FormLogIn from './components/FormLogIn';

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FormLogIn />} /> 
          <Route path="/home" element={<Vehiculos />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
