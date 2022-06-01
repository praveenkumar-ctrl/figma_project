import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from './components/Homepage';
import EmailVerify from './components/Emailverify';
import Login from './components/logged-in';




import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Forgetpass from './components/Forget-password';

function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
          <Route path="/emailverify" element={<EmailVerify />} />
          {/* <Route path="/users">
            <Users />
          </Route> */}
          <Route path="/" element={<Homepage />} />
          <Route path="/forget-pass" element={<Forgetpass />} />
          <Route path="/login" element={<Login />} />
          
          <Route path="/Homepage" element={<Homepage />} />
        </Routes>
    </Router>
    </div>
  );
}

export default App;
