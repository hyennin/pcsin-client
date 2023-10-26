import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Posting from './pages/Posting';

function App() {
  return (
    <Router>
      <Routes>
        <Route path = "/" element={<Home/>}/>
        <Route path = "/글작성" element={<Posting/>}/>
      </Routes>
    </Router>
  );
}

export default App;