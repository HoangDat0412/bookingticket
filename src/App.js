import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeTemplate from './Templates/HomeTemplate/HomeTemplate';
import Home from './pages/Home/Home';
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Detail from './pages/Detail/Detail';
import UserTemplate from './Templates/UserTemplate/UserTemplate';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
function App() {
  return (
    <Router>
      <div className='app'>
        <Routes>
          <Route path='/' element={<HomeTemplate/>}>
            <Route path='/' index element={<Home/>} />
            <Route path='/detail/:id' element={<Detail/>}/>
          </Route>
          <Route path='/' element={<UserTemplate/>}>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
