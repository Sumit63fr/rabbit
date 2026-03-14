import { Routes, Route } from 'react-router-dom'
import Navbar from './components/common/Navbar';
import Hero from './components/pages/Hero';
import Image from './components/pages/Image';
import Footer from './components/common/Footer';


const App = () => (
  <div >
    <div className="bg-[linear-gradient(180deg,rgba(76,175,80,0.1)_0%,rgba(76,175,80,0)_100%)] w-full">

    <Navbar />
    <Hero/>

    </div>
    <Footer/>
 </div>
);

export default App