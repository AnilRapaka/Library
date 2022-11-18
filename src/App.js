import logo from './logo.svg';
import './App.css';
import{Routes,Route} from "react-router-dom";
import Home from './HomePage/Home';
import ContactUs from "./RentForBook/RentBook";
import About from './HomePage/About';
import OurBooks from './OurBooks/OurBooks';
import Login from './Login/Login';
import RentBook from './RentForBook/RentBook';
import Register from './Login/Registation';

function App() {
  return (
    <Routes>
      <Route path="/" element={< Home/>}/>
      <Route path="/rent" element={<RentBook/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/our_books" element={<OurBooks/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
    </Routes>
    
  );
}

export default App;
