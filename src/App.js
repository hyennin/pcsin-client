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
        <Route path = "/posting" element={<Posting/>}/>
        <Route path = "/login" element={<Login/>}/>
        <Route path = "/signup" element={<SignUp/>}/>
      </Routes>
    </Router>
  );
}

export default App;