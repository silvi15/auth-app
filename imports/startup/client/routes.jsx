import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';

// containers
import AppContainer from '../../ui/containers/AppContainer.jsx'
import MainContainer from '../../ui/containers/MainContainer.jsx'

// pages
import SignupPage from '../../ui/pages/SignupPage.jsx'
import LoginPage from '../../ui/pages/LoginPage.jsx'
import LandingPage from '../../ui/pages/LandingPage.jsx'
import ProfilePage from '../../ui/pages/ProfilePage.jsx'
import EditProfilePage from '../../ui/pages/EditProfilePage.jsx'
import InboxPage from '../../ui/pages/InboxPage.jsx'
import FindPeoplePage from '../../ui/pages/FindPeoplePage.jsx' 
import ProjectPage from '../../ui/pages/ProjectPage.jsx'
import NotificationPage from '../../ui/pages/NotificationPage.jsx'
/*
En "/" cdo inicias sesion entras a la ruta "/"
*/
export const renderRoutes = () => (
  <Router>
    <div>
      <Route path="/login" component={LoginPage}/>
      <Route path="/signup" component={SignupPage}/>
      <Route path="/landingPage" component={LandingPage}/>
      <Route path="/profile" component={ProfilePage}/>
      <Route path="/editProfile" component = {EditProfilePage} />
      <Route path="/inbox" component = {InboxPage} />
      <Route path="/findPeple" component = {FindPeoplePage} />
      <Route path="/project" component = { ProjectPage } />
      <Route path="/notification" component = { NotificationPage } />
      <Route exact={true} path="/" component={AppContainer}/> 
    </div>
  </Router>
);