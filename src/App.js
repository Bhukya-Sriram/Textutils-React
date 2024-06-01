import React, { useState } from 'react';
// import React, { Component } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';


function App() {
  const [mode, setmode] = useState("light");
  const [alert, setAlert] = useState('');
  const showAlert = (message, type)=>{
    setAlert({
      msg:message,
      type:type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = ()=>{
    if(mode === "light"){
      setmode("dark");
      document.body.style.backgroundColor = '#073562';
      showAlert("Dark mode has been enabled", "success");
      document.title = "Textutils - Dark mode";
    }
    else{
      setmode("light");
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = "Textutils - Light mode";
    }
  }

  return (
    <React.Fragment>
      <Navbar title="Textutils" aboutText="About Textutils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
        <Textform showAlert={showAlert} heading="Enter the text to analyze" mode={mode} toggleMode={toggleMode}/>
        {/* <About/> */}
      </div>
    </React.Fragment>
  );
}

export default App;
