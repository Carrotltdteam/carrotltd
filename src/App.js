import React, { Component } from 'react'
import './resources/scss/App.scss'
import About from './components/about/About';
import Contact from './components/contact/Contact';
import {BrowserRouter,Switch,Route,Redirect} from 'react-router-dom'
import Landing from './components/landing/Landing';
import Signup from './components/signup/Signup';
import Signin from './components/signin/Signin';
import Categories from './components/category/Categories';
import Dashboard from './dashboard/Dashboard';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import AdminSignIn from './admin/AdminSignIn';
import ResetPassword from './components/reset/ResetPassword';
import AdHome from './admin/content/AdHome';
export class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
        userLoggedIn:false,
        adminLoggedIn:false,
         user:{},
         admin:{},
         error:""
    }
}

  componentDidMount(){
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user.displayName)
        if (user.displayName==="Admin") {
          this.setState({
            adminLoggedIn:true,
            admin:user
          })
         } else {
           this.setState({
             userLoggedIn:true,
             user:user
           })  
         }
        
      }else{
        this.setState({
          userLoggedIn:false,
          adminLoggedIn:false,
           user:{},
           admin:{},
           error:""
        })

      }

    });

  }
  
 

  render() {
    console.log(this.state.userLoggedIn)
  return (
    <div className="App">
      <BrowserRouter>
        <Switch >
          <Route path='/' exact component={Landing}/>
          <Route path='/about' exact component={About}/>
          <Route path='/contact' exact component={Contact}/>
          <Route path='/category' exact component={Categories}/>
          <Route path='/reset' exact component={ResetPassword}/>
          <Route path='/admin' exact  render={()=>(!this.state.adminLoggedIn?(<AdminSignIn/>):<AdHome user={this.state.user}/>)}/>
          <Route path='/dashboard' exact  render={()=>(!this.state.userLoggedIn?(<Signin/>):<Dashboard user={this.state.user}/>)}/>
          <Route path='/signup' strict exact render={()=>(!this.state.userLoggedIn?(<Signup/>):(<Redirect to='/dashboard'/>))}/>
          <Route path='/signin' exact  render={()=>(!this.state.userLoggedIn?( <Signin/>):(<Redirect to='/dashboard'/>))}/>
          
          {/* <Route path='/user/:user' exact render={({match})=>(
            this.state.loggedIn ? (<User user={match.params.user}/>): (<Redirect to='/'/>)
          )}/> */}
          <Route path='/'  render={()=>(
            <h1>404. Page not found</h1>
          )}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
}
export default App;
