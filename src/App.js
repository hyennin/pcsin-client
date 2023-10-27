import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Posting from './pages/Posting';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

function App() {
  return (
    <Router>
      <Routes>
        <Route path = "/" element={<Home/>}/>
        <Route path = "/글작성" element={<Posting/>}/>
        <Route path = "/로그인" element={<Login/>}/>
        <Route path = "/회원가입" element={<SignUp/>}/>
      </Routes>
    </Router>
  );
}

export default App;