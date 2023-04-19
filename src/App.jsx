import React from 'react'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Lines from './components/lines/Lines'
import Services from './components/services/Services'
import Contact from './components/contact/Contact'

const App = () => {
  return (
    <>
        <Header />
        <Nav />
        <About />
        <Lines />
        <Services />
        <Contact />
        <Footer />
    </>
  )
}

export default App