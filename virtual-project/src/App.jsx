import FeatureSection from './components/FeatureSection'
import Footer from './components/Footer'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import WorkFlow from './components/WorkFlow'

function App() {
  return (
    <>
     <h1 className="text-3xl ">
        <Navbar></Navbar>
        <div className="max-w-7xl mx-auto pt-20 px-6">
          <HeroSection></HeroSection>
          <FeatureSection></FeatureSection>
          <WorkFlow></WorkFlow>
          <Pricing></Pricing>
          <Testimonials></Testimonials>
          <Footer></Footer>
        </div>
    </h1>
    </>
  )
}

export default App
