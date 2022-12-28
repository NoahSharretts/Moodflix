import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import SignupFormPage from './components/SignupFormPage';
import LoginFormPage from "./components/LoginFormPage";
import Splash from './components/Splash';
import Home from './components/Home';
import * as sessionActions from './store/session';
import Navigation from './components/Navigation';
import { Modal } from './context/Modal';
function App() {
  const sessionUser = useSelector((state) => state.session.user);
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path="/">
          { sessionUser? <Home />: <Splash /> }
          </Route>
          <Route exact path="/login" >
            <LoginFormPage />
          </Route>
          <Route exact path='/signup'>
            <SignupFormPage />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
