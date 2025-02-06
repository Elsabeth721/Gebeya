import Footer from "./components/footer/Footer"
import Hero from "./components/hero/hero"
import Users from "./components/hero/Users"
import HowItWorks from "./components/how-it-works/HowItWork"
import Navbar from "./components/navbar/Navbar"
import TestimonialSlider from "./components/testimonial/Testimonial"

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Users/>
      <HowItWorks/>
      <TestimonialSlider/>
      <Footer/>
      
    </div>
  )
}

export default App
