import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Pages/Login/Login';
import Dashboard from './Pages/Dashboard/Dashboard';
import Override from './Pages/Overriding/Override';
import Notification from './Pages/Notification/Notification';
import Enrollment from "./Pages/Enrollment/Enrollment"
import Database from "./Pages/Database/Database";
import Profile from "./Pages/Profile/Profile";
import Enroll from "./Pages/Enroll/Enroll";
import IsAuthenticated from "./Components/IsAuthenticated";
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
            element={<IsAuthenticated><Enrollment/></IsAuthenticated>}
          />
          <Route 
            path="/enroll"
            element={<IsAuthenticated><Enroll/></IsAuthenticated>}
          />
          <Route 
            path="/database"
            element={<IsAuthenticated><Database/></IsAuthenticated>}
          />
          <Route 
            path="/profile"
            element={<IsAuthenticated><Profile/></IsAuthenticated>}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
