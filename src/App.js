import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

// Page Component
import Home from './pages/home/Home';
import Signup from './pages/signup/Signup';
import Login from './pages/login/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index path='/' element={<Home/>} />
          <Route path='login' element={<Login />}/>
          <Route path='signup' element={<Signup />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
