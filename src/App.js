import logo from './logo.svg';
import './App.css';
import {Nav} from 'react-bootstrap';
import {useNavigate,Routes,Route } from 'react-router-dom';
import Main from './Routes/Main';
import Form from './Routes/Form';
import Login from './Routes/Login';
import Notice from './Routes/Notice';
import Join from './Routes/Join';

function App() {

  let navigate = useNavigate();



  return (
    <div className="App">
    <div className="Navbar">
      <div onClick={() => navigate("/")}>
        SurVey
      </div>
      <div className="nav-items">
      <div onClick={() => navigate("/Form")}>서식</div>
        <div onClick={() => navigate("/Login")}>로그인</div>
        <div onClick={() => navigate("/Notice")}>문의</div>
        <div onClick={() => navigate("/page3")}>밤낮</div>
      </div>
    </div>

    
    <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/Form" element={<Form />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/Notice" element={<Notice />}></Route>
        <Route path="/Join" element={<Join />}></Route>
    </Routes>
   
  </div>
  );
}

export default App;
