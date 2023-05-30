import { BrowserRouter } from "react-router-dom";
import { About, Contact, Hero, Navbar, Footer, Products, StarsCanvas } from './components';

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-black-100">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center"> 
          <Navbar />
          <Hero />
        </div>
        <About />
        <Products />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App