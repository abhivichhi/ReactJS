import './App.css';
import UserManagement from "./components/UserManagement";
import {Routes, Route} from "react-router-dom";
import CreateEditUser from "./components/CreateEditUser";

function App() {
  return (
      <>
      <Routes>
          <Route path="/" element={<UserManagement/>}/>
          <Route path="/createedituser" element={<CreateEditUser/>}/>
      </Routes>
    </>
  );
}

export default App;
