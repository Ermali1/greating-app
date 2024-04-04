import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import About from './pages/About/About';
import NavBar from './components/shared/NavBar/NavBar';
import Crew from './components/shared/Cards/Crew';
import SingleCrew from './components/shared/Cards/SingleCrew';
import Footer from './components/shared/Footer/Footer';



function App() {
  return (
    <div className="App">
    <BrowserRouter>
     <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Crew' element={<Crew/>}/>
        <Route path="/crew/:id" element={<SingleCrew />}></Route>
        <Route path='/About' element={<About/>}/>
        <Route path='/Contact' element={<Contact/>}/>
      </Routes>
      <Footer />
     </BrowserRouter>
    </div>
  );
}

export default App;
