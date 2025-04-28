import NavbarComp from './components/NavbarComp';
import HomePage from './pages/home/HomePage';
import FooterComp from './components/FooterComp';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactPage from './pages/contact/ContactPage';
import AboutPage from './pages/about/AboutPage';
import ListOfWinnerAllPage from './pages/after event/ListOfWinnerAllPage';
import ListOfWinnerDetail2024Page from './pages/after event/ListOfWinnerDetail2024Page';
import ListOfWinnerDetail2025Page from './pages/after event/ListOfWinnerDetail2025Page';
import GalleryComp from './components/GalleryComp';


function App() {
  return (
    <>
    <NavbarComp></NavbarComp>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path='/AboutPage' element={<AboutPage/>}/>
        <Route path="/ContactPage" element={<ContactPage/>} />
        <Route path="/ListOfWinnerAllPage" element={<ListOfWinnerAllPage/>} />
        <Route path="/ListOfWinnerDetail2024Page" element={<ListOfWinnerDetail2024Page/>} />  
        <Route path="/ListOfWinnerDetail2025Page" element={<ListOfWinnerDetail2025Page/>} />        
      </Routes>
    </Router>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <GalleryComp></GalleryComp>
    <FooterComp></FooterComp>
    </>
  );
}

export default App;
