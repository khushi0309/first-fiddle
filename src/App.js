import './App.css';
import Navbar from './Navbar/Navbar';
import Home from './Home/Home';
import About from './About/About';
import Brands from './Brands/Brands';
import PressRelease from './PressRelease/PressRelease';
import Contact from './Contact/Contact';
import Franchise from './Franchise/Franchise';
import Footer from './Footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
    {/* <Navbar/> */}
    <Home/>
    {/* <About/> */}
    {/* <Brands/> */}
    {/* <PressRelease/> */}
    {/* <Contact/> */}
    {/* <Franchise/>
    <Footer/> */}
    {/* <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/Home' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Brands' element={<Brands />} />
          <Route path='/PressRelease' element={<PressRelease />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/Franchise' element={<Franchise />} />
        </Routes>
        <Footer />
      </BrowserRouter> */}
   
    </>
  );
}

export default App;
