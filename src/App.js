import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Greating from './components/shared/greeting/Greeting';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import About from './pages/About/About';
import NavBar from './components/shared/NavBar/NavBar';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function App() {
  return (
    <div className="App">
      <Greating message={"Quantix LLC"} firstName={"Ermal"} lastName={"Kelmendi"}/>
    <BrowserRouter>
     <NavBar/>
      <Routes>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Contact' element={<Contact/>}/>
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
