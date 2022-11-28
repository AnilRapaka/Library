import logo from './logo.svg';
import './App.css';
import{Routes,Route} from "react-router-dom";
import Login from './Login/Login';
import Register from './Login/Registation';
import UserPage from './UserPage/UserPage';
import UserBooks from './UserPage/UserBooks';
import UserAbout from './UserPage/UserAbout';
import UserRent from './UserPage/UserRent';
import AdminHome from './AdminPage/AdminHome';
import AllBooks from './AdminPage/AllBooks';
import AddBooks from './AdminPage/AddBooks';
import BooksActions from './AdminPage/BooksActions';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
         {/* User Page */}
      <Route path='/user' element={<UserPage/>}/>
      <Route path="/userbooks" element={<UserBooks/>}/>
      <Route path="/UserAbout" element={<UserAbout/>}/>
      <Route path="/UserRent" element={<UserRent/>}/>

      {/* Admin Page */}
      <Route path="/admin" element={<AdminHome/>}/>
      <Route path="/adminbooks" element={<AllBooks/>}/>
      <Route path="/add_books" element={<AddBooks/>}/>
      <Route path="/actions" element={<BooksActions/>}/>

    </Routes>
    
  );
}

export default App;
