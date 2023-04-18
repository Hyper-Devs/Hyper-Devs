import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from './Pages/Login/Login';
import Dashboard from './Pages/Dashboard/Dashboard';
import Override from './Pages/Overriding/Override';
import Notification from './Pages/Notification/Notification';
import Enrollment from "./Pages/Enrollment/Enrollment"
import Database from "./Pages/Database/Database";
import Profile from "./Pages/Profile/Profile";
import Enroll from "./Pages/Enroll/Enroll";
// import Sass from "./Pages/sass-doc/sass"

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            exact path='/'
            element={<Login/>}
          />
          <Route
            path='/dashboard'
            element={<Dashboard/>}
          />
          <Route
            path='/override'
            element={<Override/>}
          />
          <Route
            path='notification'
            element={<Notification/>}
          />
          <Route 
            path="/enrollment"
            element={<Enrollment/>}
          />
          <Route 
            path="/enroll"
            element={<Enroll/>}
          />
          <Route 
            path="/database"
            element={<Database/>}
          />
            <Route 
            path="/profile"
            element={<Profile/>}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
