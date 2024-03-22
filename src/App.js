import NavbarComp from './components/NavbarComp';
import HomePage from './pages/home/HomePage';
import FooterComp from './components/FooterComp';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactPage from './pages/contact/ContactPage';
import AboutPage from './pages/about/AboutPage';

function App() {
  return (
    <>
    <NavbarComp></NavbarComp>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path='/AboutPage' element={<AboutPage/>}/>
        <Route path="/ContactPage" element={<ContactPage/>} />
      </Routes>
    </Router>
    <FooterComp></FooterComp>
    </>
  );
}

export default App;
