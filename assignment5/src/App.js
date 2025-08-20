import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import {Routes, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import Payment from "./components/Payment";

function App() {
  return (
      <Provider store={store}>
          <>
              <Navbar/>
              <Routes>
                  <Route path="/" element={<Home/>}/>
                  <Route path="/payment" element={<Payment/>}/>
              </Routes>
          </>
      </Provider>
  );
}

export default App;