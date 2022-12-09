import logo from './logo.svg';
import './App.css';



import React from 'react';
import {auth} from './firebase';
import {useAuthState} from 'react-firebase-hooks/auth';
import Login from './login';
import Mainpage from './main'
import Appbar from './Appbar';
import { LocalGasStation } from '@mui/icons-material';

  
function App() {
  const [user] = useAuthState(auth);
  return (
    user ? <Appbar/> : <Login/>
  );
}
  
export default App;