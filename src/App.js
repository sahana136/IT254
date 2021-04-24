import React, { useState, useCallback } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import BranchesBar from './branchesbar/components/BranchesBar';
import MessagesBar from './messagebar/components/MessageBar';
import Auth from './Authentication/Auth';
import Files from './MostSearchedItems/Pages/Files';
import MainNavigation from './Shared/Components/Navigation/MainNavigation';
import { AuthContext } from './Shared/Components/Context/auth-context';
import BranchWise from './MostSearchedItems/Pages/BranchWise';
import About from './About/About';
import Upload from './UploadPage/Upload';



const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = useCallback(() => {
    setIsLoggedIn(true);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  let routes;

  if (isLoggedIn) {
    routes = (
      <Switch>
        <Route path="/" exact>
            <BranchesBar />
            <Files />
            <MessagesBar />
        </Route>
        <Route path="/about" exact>
          <About />
        </Route>
        <Route path="/upload" exact>
          <Upload />
        </Route>
        <Route path="/branch/:branch" exact>
          <BranchesBar />
          <BranchWise />
          <MessagesBar />
        </Route>
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Route path="/" exact>
            <BranchesBar />
            <Files />
            <MessagesBar />
        </Route>
        <Route path="/auth">
          <Auth />
        </Route>
        <Route path="/about" exact>
          <About />
        </Route>
        <Route path="/upload" exact>
          <Upload />
        </Route>
        <Route path="/branch/:branch" exact>
          <BranchesBar />
          <BranchWise />
          <MessagesBar />
        </Route>
      </Switch>
    );
  }

  return (
    <AuthContext.Provider
      value={{ isLoggedIn: isLoggedIn, login: login, logout: logout }}
    >
    <Router>
      <MainNavigation />
      <main>
        {routes}
      </main>
    </Router>
    </AuthContext.Provider>
    
  )
};

export default App;