

import './App.css';
import Checkout from './Checkout/Checkout';
import Header from './Header';
import Home from './Home'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from './login/Login';
import { useEffect } from 'react';
import {auth} from './firebase'
import { useStateValue } from './StateProvider';
import { type } from '@testing-library/user-event/dist/type';



function App() {
  const [{},dispatch]=useStateValue();

  useEffect(()=>{
    //will only run once if compent loads
    auth.onAuthStateChanged(authUser=>{
      console.log("The user is >>",authUser);
      if(authUser){
        //the user just logged in

        dispatch({
          type:'SET_USER',
          user:authUser
        })
      }
      else{
        //the user is logged out
        dispatch({
          type:'setUser',
          user:null
        })
      }
    })
  },[])


  return (
    <Router>
    <div className="App">
      
      {/* <h1>Hello amazon❤️</h1> */}
      <Routes>

        {/* <Route path='/'element={<Header/>} /> */}
        <Route path='/login' element={<><Login /></>} />
        <Route path='/' element={<><Header/><Home /></>} />
        <Route path='/checkout' element={<><Header/><Checkout/></>}/>
          
      
      </Routes>
    </div>
    </Router>
  );
}

export default App;
