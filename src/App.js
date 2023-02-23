import './App.css';
import About from './Components/About';
import Alert from './Components/Alert';
import Footer from './Components/Footer';
import Form from './Components/Form';
import Navbar from './Components/Navbar';
import React, { useState } from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
  Link
}
  from "react-router-dom";

function App() {
  const [mode, setMode] = useState("success")
  const [alert, setAlert] = useState(null)


  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1200);
  }

  const setmymodes = () => {
    if (mode === 'success') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark Mode Has Been Enabled", "success");
    }
    else {
      setMode('success');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode Has Been Enabled", "success");

    }
  }

  return (
    <>
      <BrowserRouter>
        <Navbar title="Text Converter" Text="About Us" mode={mode} mymodes={setmymodes} />
        <Alert alert={alert} />
        <div className='container'>
          <Routes>
            <Route path="/home" element={<Form mode={mode} showAlert={showAlert} />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
