import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import BranchesBar from './branchesbar/components/BranchesBar';
import MessagesBar from './messagebar/components/MessageBar';

import Files from './MostSearchedItems/Pages/Files';
import MainNavigation from './Shared/Components/Navigation/MainNavigation';

const App = () => {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Route path="/" exact>
            <BranchesBar />
            <Files />
            <MessagesBar />
        </Route>
      </main>
    </Router>
    
  )
}

export default App
