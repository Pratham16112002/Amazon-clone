import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Login from './Login'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./Checkout";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function App() {
  const [{},dispatch] = useStateValue();

    useEffect(() => {
      //  will only run one the compement loads 


      auth.onAuthStateChanged(authUser => {
        console.log('The User is >>> ', authUser);

        if (authUser){
            //  The user just logged In / the user was logged In 
            dispatch({
              type: 'SET_USER',
              user: authUser
            })
        }
        else{
          // The user is logged Out
          dispatch({
            type:'SET_USER',
            user:null
          })
        }
      })
    }, [])
    
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/login" element={[<Login/>]}>
          </Route>
          <Route path="/checkout" element={[<Header/>,<Checkout/>]}>
          </Route>
          <Route path="/" element={[<Header/>,<Home/>]}>
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;