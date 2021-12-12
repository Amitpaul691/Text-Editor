import './App.css'
import Navbar from './Navbar';
import Textform from './Textform';
import About from './About';
import React, { useState } from 'react'
import Alert from './Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');//whether dark mode is enable or not
  const [alert, setAlert] = useState(null)
  const removeBodyClasses=()=>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-success')
  }
  const toggleMode = (cls) => {
    removeBodyClasses();
    console.log(cls)
document.body.classList.add('bg-'+cls)
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#383863';
      showalert("Dark mode should be enable","success")
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showalert("Light mode should be enable","success")
    }
  }
  const showalert = (message,type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 3000);
  }
  return (
    <React.Fragment>
    <Router>
      <Navbar title="TextUtlis" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container">
    <Switch>
          <Route path="/about">
              <About mode={mode}/>
          </Route>
          <Route path="/">
            <Textform showalert={showalert} heading="Enter the text to analyze" mode={mode} />
          </Route>
    </Switch>
      </div>
      </Router>
         </React.Fragment> 
  );
}

export default App;
