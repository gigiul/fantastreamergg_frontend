import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Api from "./pages/Api";
import Profile from "./pages/Profile";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />

        </Routes>   
      </BrowserRouter>
    </div>
  );
}

export default App;
