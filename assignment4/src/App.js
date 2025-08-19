import './App.css';
import {Routes, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from "./components/Home";
import About from "./components/About";
import Userinfo from "./components/Userinfo";
import Notfoundpage from "./components/Notfoundpage";
import Navbar from "./components/Navbar";

function App() {
    return (
        <>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/userinfo" element={<Userinfo/>}/>
            <Route path="/*" element={<Notfoundpage/>}/>
        </Routes>
        </>
    )
}

export default App;
