//import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './components/login';
import Sidebar from './components/sidebar';
//import Sidebar from './components/sidebar';

function App() {
  return (
    <div >
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Sidebar />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      </BrowserRouter>
       
    </div>
  );
}

export default App;
