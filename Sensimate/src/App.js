import React from 'react';
import Navbar from './components/Navbar/Navbar';
import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import SignUp from './pages/SignUp';
import Footer from "./components/Footer/Footer";
import sensimateMetoden from './pages/SignUp';
import TermsOfService from './pages/TermsOfService';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/AboutUs' component={AboutUs} />
          <Route path='/products' component={Contact} />
          <Route path='/sensimateMetoden' component={sensimateMetoden} />
          <Route path='/Contact' component={Contact} />
            <Route path='/TermsOfService' component={TermsOfService} />

        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
