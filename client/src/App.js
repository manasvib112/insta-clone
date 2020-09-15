import React,{useEffect,createContext,useReducer,useContext} from 'react'; 
import NavBar from './componenets/Navbar'
import "./App.css"
import {BrowserRouter,Route,Switch,useHistory} from 'react-router-dom' 
import Home from './componenets/screens/Home'
import Signin from './componenets/screens/SignIn'
import Profile from './componenets/screens/Profile'
import Signup from './componenets/screens/Signup'
import CreatePost from './componenets/screens/CreatePost'
import {reducer,initialState} from './reducers/userReducer'

export const UserContext = createContext()

const Routing = ()=>{
  const history = useHistory()
  const {state,dispatch} = useContext(UserContext)
  useEffect(()=>{
    const user = JSON.parse(localStorage.getItem("user"))
    if(user){
      dispatch({type:"USER",payload:user})
      
    }else{
      history.push('/signin')
    }
  },[]) 
  return(
    <Switch>
    <Route exact path="/">
      <Home />
    </Route>
    <Route exact path ="/signin">
      <Signin />
    </Route>
    <Route exact path ="/signup">
      <Signup />
    </Route>
    <Route exact path ="/profile">
      <Profile />
    </Route>
    <Route exact path ="/create">
      <CreatePost/>
    </Route>
    </Switch>
  )
}

function App() {
  const [state,dispatch] = useReducer(reducer,initialState)
  return (
    <UserContext.Provider value={{state,dispatch}}>
    <BrowserRouter>
    <NavBar />
    <Routing/>
    </BrowserRouter>
    </UserContext.Provider> 
  );
}

export default App

