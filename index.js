import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import "font-awesome/css/font-awesome.min.css";
import Helloworld from './page/Helloworld';
import Dashboard from './page/Dashboard';
import login from './page/Login';
import { Route,BrowserRouter as Router , Link, Switch }from 'react-router-dom';
import './index.css';
import * as serviceWorker from "./serviceWorker";
import App from './App'
// const rounting = (
//     <Router>
//         <div>
//             <ul>
//                 <li>
//                     <Link to="/">Helloworld</Link>
//                 </li>
//                 <li>
//                     <Link to="/dashboard">Dashboard</Link>
//                 </li>
//                 <li>
//                     <Link to="/login">login</Link>
//                 </li>
//             </ul>
//             <Switch>
//                 <Route exact path="/" component={Helloworld} />
//                 <Route path="/dashboard" component={Dashboard} />
//                 <Route path="/login" component={login} />

//             </Switch>
//         </div>
//     </Router>
// )

ReactDOM.render(
    <App/>,
     document.getElementById('root')
    );

serviceWorker.unregister();