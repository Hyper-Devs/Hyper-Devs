import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Pages/Login/Login';
import Dashboard from './Pages/Dashboard/Dashboard';
import Override from './Pages/Overriding/Override';
import Notification from './Pages/Notification/Notification';
import Enrollment from "./Pages/Enrollment/Enrollment"
import Database from "./Pages/Database/Database";
import Profile from "./Pages/Profile/Profile";
import Enroll from "./Pages/Enroll/Enroll";
import Register from "./Pages/Register/Register"
import IsAuthenticated from "./Components/IsAuthenticated";
import IsAdmin from "./Components/IsAdmin";
// import Sass from "./Pages/sass-doc/sass"

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element={<Login/>}
          />
          <Route
            path='/register'
            element={<Register/>}
          />
          <Route
            path='/dashboard'
            element={<IsAuthenticated><Dashboard/></IsAuthenticated>}
          />
          <Route
            path='/override'
            element={<IsAuthenticated><Override/></IsAuthenticated>}
          />
          <Route
            path='notification'
            element={<IsAuthenticated><Notification/></IsAuthenticated>}
          />
          <Route 
            path="/enrollment"
            element={<IsAdmin><Enrollment/></IsAdmin>}
          />
          <Route 
            path="/enroll"
            element={<IsAdmin><Enroll/></IsAdmin>}
          />
          <Route 
            path="/database"
            element={<IsAuthenticated><Database/></IsAuthenticated>}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
