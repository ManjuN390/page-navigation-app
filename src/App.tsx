import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FirstPage from "./components/First";
import SecondPage from "./components/Second";
import MainPage from "./components/Main";
import LoginPage from "./components/Login";
  
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/firstPage" element={<FirstPage />}/>
        <Route path="/secondPage" element={<SecondPage />}/>
        <Route path='/loginPage' element={<LoginPage />}/>
        <Route path="/" element={<MainPage/>}/>
      </Routes>
    </Router>
  );

  // const HomePage: React.FC = () => {
  //   return (
  //     <div>
  //       <h1>Welcome to the home page!</h1>
  //     </div>
  //   );
}

export default App;
