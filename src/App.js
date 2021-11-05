import React from 'react';
import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="app">
		<Router>
			<Routes>
				<Route exact path="/" element={<Home />}></Route>
				<Route path="/search" element={<h1>This is the search page</h1>}></Route>
			</Routes>
		</Router>
    </div>
  );
}

export default App;
