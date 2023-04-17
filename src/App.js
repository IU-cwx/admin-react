import logo from './logo.svg';
import './App.css';
import { Button } from "@arco-design/web-react";
import Login from './pages/Login/login'

import { HashRouter as Router, Route, NavLink,Switch,Redirect} from 'react-router-dom'

const DefaultContainer = () => {
  return(
    <div>
      {/* <Drawer /> */}
      {/* <Route exact path="/" component={Dashboard} />
      <Route exact path="/users" component={Users} /> */}
      默认
    </div>
  )
}

function App() {
  return (
    <div>
    <Router>

      <Switch>
        {/* <Route exact path="/" render={() => <Redirect to="/login" component={Login}/>} />  */}
        <Route path='/login' component={Login} />
        {/* <Redirect to={Login} from ='/'/> */}
        {/* <Route component={DefaultContainer} /> */}

        
        <Redirect exact from='/' to="/login"/>
      </Switch>
    </Router>       
  </div>
  );
}

export default App;

// function Home(){
// 	return <div>首页页面</div>
// }
// function About(){
// 	return <div>关于页面</div>
// }