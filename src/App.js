import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Header from './Components/Header/Header';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './Components/Pages/Login';
import Main from './Components/Pages/Main';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main/>} />
        <Route path='/login' element={<Login/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
