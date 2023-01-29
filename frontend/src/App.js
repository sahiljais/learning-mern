import './App.css';
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Register from './components/Register';
import Header from './common/Header';

function App() {
  return (
    <>
    <Router>
      <div className='container'>
        <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
      </div>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
