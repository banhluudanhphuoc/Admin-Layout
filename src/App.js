import './App.css';
import Home from './Container/Home/index';
import User from './Container/User/index';

import { Routes, Route} from 'react-router-dom'
function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/user' element={<User/>}/>

    </Routes>
    
  );
}

export default App;
