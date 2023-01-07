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
          <Route path='/' element={<Api />} />
          <Route path='/login' element={<Login />} />
          <Route path='/en' element={<Login />} />
          <Route path='/api' element={<Api />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>   
      </BrowserRouter>
    </div>
  );
}

export default App;
