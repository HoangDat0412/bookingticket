import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeTemplate from "./Templates/HomeTemplate/HomeTemplate";
import Home from "./pages/Home/Home";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Detail from "./pages/Detail/Detail";
import UserTemplate from "./Templates/UserTemplate/UserTemplate";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Checkout from "./pages/Checkout/Checkout";
import CheckoutTemplate from "./Templates/CheckoutTemplate/CheckoutTemplate";
import UserProfile from "./pages/UserProfile/UserProfile";
import AdminTemplate from "./Templates/AdminTemplate/AdminTemplate";
import Films from "./pages/Films/Films";
import Addnew from "./pages/Films/Addnew/Addnew";
import Edit from "./pages/Films/Edit/Edit";
function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<HomeTemplate />}>
            <Route path="/" index element={<Home />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="/profile" element={<UserProfile/>}/>
          </Route>

          <Route path="/" element={<CheckoutTemplate />}>
            <Route path="checkout/:id" element={<Checkout />} />
          </Route>

          <Route path="/" element={<UserTemplate />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>
          
          <Route path="/admin" element={<AdminTemplate/>}>
          <Route path="films" element={<Films/>}/>
          <Route path="films/addnew" element={<Addnew/>}/>
           <Route path="films/edit/:id" element={<Edit/>}/>
           {/* 
           <Route path="users" element={<Dashboard/>}/>
           <Route path="films/showtime/:id" element={<Showtime/>}/> */}
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
