import React from 'react'
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Testimonials from './components/testimonials/Testimonials';
import Service from './components/service/Service';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';


function App() {
  return (
    //react fragment 
    <>
      <Header />
      <Nav/>
      <About/>
      <Experience />
      <Service />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  )
}

export default App