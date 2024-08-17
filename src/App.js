import './App.css';
import Register from './Pages/Register';
import Login from './Pages/Login';
import Homepage from './Pages/Homepage';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/register' element={<Register />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/home' element={<Homepage/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
