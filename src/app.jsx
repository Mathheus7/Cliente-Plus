import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'

/* Pages */
import Site from './site/site.jsx';
import Login from './app/login.jsx';

function App(){
    return <BrowserRouter>
    <Routes>
    <Route exact path='/' Component={Site} />
    <Route exact path='/app' Component={Login} />
    </Routes>
    </BrowserRouter>;
}

export default App;