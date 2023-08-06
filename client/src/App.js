import {Route,Routes } from 'react-router-dom';
import Home from "./pages/home/Home";
import List from "./pages/lists/List";
import Hotel from './pages/hotel/Hotel';
import Login from './pages/login/Login';
import Register from './pages/register/Register';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element = {<Home/>} />
        <Route path='/hotels' element = {<List/>} />
        <Route path='/hotels/:id' element = {<Hotel/>} />
        <Route path='/login' element = {<Login/>} />
        <Route path='/register' element = {<Register/>} />
      </Routes>
    </div>
  );
}

export default App;
