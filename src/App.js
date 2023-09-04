import React from 'react';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Home from './pages/home';
import Support from './pages/support';
import Terms from './pages/terms';
import Template from './pages/template';
import Error from './pages/error';

function CatchAll() {
  const currentPath = window.location.pathname;
  return <div>{currentPath}</div>;
}
function App() {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="support" element={<Support/>}/>
        <Route path="terms" element={<Terms/>}/>
        <Route path="template" element={<Template/>}/>
        <Route path="error" element={<Error/>}/> 
        <Route path="*" element={<CatchAll/>}/>
      </Routes>
    </Router>
  )
}

export default App;
