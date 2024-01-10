import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';

const Education = () => {
    return <div id="education"></div>;
};

const App = () => {
  return (
    <Router>

	<Routes>
		<Route path='/' element={<Home/>} />
        <Route path="/education" component={Education} />
		</Routes>
    </Router>
  );
}

export default App;
