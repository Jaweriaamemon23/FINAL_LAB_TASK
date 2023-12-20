import React from 'react';
import NavigationBar from './Components/Navbar';
import HeroSection from './Components/HeroSection';
import 'bootstrap/dist/css/bootstrap.min.css';
import Section2 from './Components/Section2';
import Future from './Components/Future';
import Footer from './Components/Footer'
function App() {
  return (
    <>
      <NavigationBar/>
      <HeroSection/>
      <Section2/>
      <Future/>
      <Footer/>
    </>
  );
}

export default App;
