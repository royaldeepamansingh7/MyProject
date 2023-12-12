import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
       <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route  path="/login" element={<Login />} />
        <Route  path="/signup" element={<Signup />} />
       </Routes>
     
    </div>
    </BrowserRouter>
    
  );
}

export default App;
