import './App.css';
import Register from './Pages/Register';
import Login from './Pages/Login';
import Homepage from './Pages/Homepage';
import Land from './Pages/Land';
import Meet from './Pages/Meet';
import ChatBot from './Components/ChatBot';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Land />}></Route>
          <Route path='/register' element={<Register />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/home' element={<Homepage/>}></Route>
          <Route path='/meet' element={<Meet />}></Route>
          <Route path='/chat' element={<ChatBot />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
