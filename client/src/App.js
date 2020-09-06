import React from 'react'; 
import NavBar from './componenets/Navbar'
import "./App.css"
import {BrowserRouter,Route} from 'react-router-dom' 
import Home from './componenets/screens/Home'
import Signin from './componenets/screens/SignIn'
import Profile from './componenets/screens/Profile'
import Signup from './componenets/screens/Signup'
import CreatePost from './componenets/screens/CreatePost'

function App() {
  return (
    <BrowserRouter>
    <NavBar />
    <Route exact path="/">
      <Home />
    </Route>
    <Route path ="/signin">
      <Signin />
    </Route>
    <Route path ="/signup">
      <Signup />
    </Route>
    <Route path ="/profile">
      <Profile />
    </Route>
    <Route path ="/create">
      <CreatePost/>
    </Route>
    </BrowserRouter>
  );
}

export default App
