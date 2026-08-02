import AmbientBackdrop from './components/AmbientBackdrop.jsx'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Divider from './components/Divider.jsx'
import Work from './components/Work.jsx'
import Skills from './components/Skills.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <>
      <AmbientBackdrop />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Nav />
        <Hero />
        <About />
        <Divider />
        <Work />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default App
