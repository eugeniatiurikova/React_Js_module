import { Routes, Route } from 'react-router-dom';
import './message.css';
import Chats from './pages/Chats';
import Messages from './pages/Messages';
import Layout from './pages/Layout';
import Profile from './pages/Profile';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {

  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path={'/chats'} element={<Chats />} />
        <Route path={'/messages/*'} element={<Messages />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='*' element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
