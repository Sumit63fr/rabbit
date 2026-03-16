import { Routes, Route } from 'react-router-dom'
import Navbar from './components/common/Navbar';
import Hero from './components/pages/Hero';
import Feature from './components/pages/Feature';
import Behind from './components/pages/Behind';
import Results from './components/pages/Results';
import Worked from './components/pages/Worked';
import Stories from './components/pages/Stories';
import Submit from './components/pages/Submit';
import Footer from './components/common/Footer';


const App = () => (
  <div >
    <div className="bg-[linear-gradient(180deg,rgba(76,175,80,0.1)_0%,rgba(76,175,80,0)_100%)] w-full">

      <Navbar />
      <Hero />

    </div>
    <Feature />
    <Behind />
    <Results />
    <Worked />
    <Stories />
    <Submit />
    <Footer/>
</div>
);

export default App