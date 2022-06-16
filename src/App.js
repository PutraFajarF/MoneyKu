import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Page Component
import Home from './pages/home/Home';
import Signup from './pages/signup/Signup';
import Login from './pages/login/Login';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
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
