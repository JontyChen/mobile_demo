import React from 'react';
import Index from './views/index/Index'
import Assemble from './views/assemble/Assemble'
import Shopping from './views/shopping/Shopping'
import Profile from './views/profile/Profile'

import Detail from './components/detail/Detail'
import SearchHtml from './components/searchhtml/SearchHtml'
import SearchItem from './components/search/components/SearchItem'
import { BrowserRouter as Router, Route,Redirect,Switch } from 'react-router-dom'
 
import 'antd-mobile/dist/antd-mobile.css';
import './assets/style/resets.css'

function App() {
  return (
    <Router>
      <Switch>
      <Route path='/index' component={Index}></Route>
      <Route path='/detail' component={Detail}></Route>
      <Route path='/searchhtml' component={SearchHtml}></Route>
      <Route path='/searchitem/:id' component={SearchItem}></Route>
      <Route path='/assemble' component={Assemble}></Route>
      <Route path='/shopping' component={Shopping}></Route>
      <Route path='/profile' component={Profile}></Route>
      <Redirect from="/" to="/index"></Redirect>
      </Switch>
    </Router>
    // <Index></Index>
  );
}

export default App;
