import React, { useState } from 'react';
import './App.css';
import NavBar from './Components/navBar'
import InfoPanel from './Components/infoPanel';
import FooterBar from './Components/footerBar';


function App() {
  const screenConfig = useState(0);
  return (
    <div className="App">
      <NavBar/>
      <InfoPanel curentScreen={screenConfig[0]}/>
      <FooterBar screenConfig={screenConfig}/>
    </div>
  );
}

export default App;
