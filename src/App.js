
import './App.css';
import Register from "./components/user/Register"
import RegisterAdmin from "./components/admin/RegisterAdmin"
import AdminDashboard from "./components/admin/AdminDashboard"
import UserDashBoard from "./components/user/UserDashBoard"
import AttemptQuiz from "./components/user/AttemptQuiz"
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
function App() {
  return (
    <Router>
      <Routes>
          {/* Admin Routs */}
                 <Route exact path='/admin' element={ <RegisterAdmin/>}></Route>
                 <Route exact path='/admin/dashboard/:adminId' element={ <AdminDashboard/>}></Route>
        
          {/* User Routs */}

                 <Route exact path='/' element={ <Register/>}></Route>
                 <Route exact path='/dashboard/:studentId' element={ <UserDashBoard/>}></Route>
                 <Route exact path='/dashboard/:studentId/:quizid' element={ <AttemptQuiz/>}></Route>
          </Routes>
    </Router>
   
  );
}

export default App;
