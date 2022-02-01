// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/About';
import React , { useState } from 'react';
import Alert from './components/Alert'

import {
  BrowserRouter as Router,
  Switch,
  Route
  
} from "react-router-dom";

function App() {
  const [mode,setMode]=useState('light')
  const [theme,setTheme]=useState('Enable Dark Mode')
  const [alert,setAlert]=useState(null)

  const showAlert=(msg,type)=>{
    setAlert({
      message:msg,
      type:type
    })

    setTimeout(()=>{
      setAlert(null)
    },1500)
  }
    


  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark')
      setTheme('Enable Light Mode ')
      document.body.style.backgroundColor="#042743"
      document.body.style.color="white"
      showAlert('dark mode has been enabled','success')
      document.title="TextUtils-darkMode"


     

    }
    else{
      setMode('light')
      setTheme('Enable Dark Mode')
      document.body.style.backgroundColor="white"
      document.body.style.color="black"
      showAlert('light mode has been enabled','success')
      document.title="TextUtils-LightMode"
    }
  }

  return (
    <>

      {/* <Navbar/> */}
      {/* <Navbar title="TextUtils"/> */}    {/*   about are from default type */ } 
      
        <Router>
              <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode} theme={theme}/> 
              <Alert alert={alert}/>
             
          <Switch>
          <Route exact path="/about">
                <About mode={mode}/>
            </Route>
          <Route exact path="/">
                <Textform showAlert={showAlert} heading="Enter the text to analyze below:" mode={mode} />
            </Route>
          </Switch>

        </Router>


     </>
  );
}

export default App;
