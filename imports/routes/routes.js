import {Meteor} from 'meteor/meteor';
import React from 'react';
import {Router, Route, browserHistory} from 'react-router';

import Signup from '../ui/SignUp';
import Link from '../ui/Link';
import NotFound from '../ui/NotFound';
import LogIn from '../ui/LogIn';
import DayItem from '../ui/DayItem';

const unauthenticatedPages=['/', '/signup']; //pages you CAN'T see if you ARE athenticated.
const authenticatedPages=['/links']; //pages you CAN see if you ARE authenticated.

const onEnterPublicPage = () => {
  if ( Meteor.userId() ){
    browersHistory.replace('/');
  }
};

const onEnterPrivatePage = () => {
  if ( !Meteor.userId() ){
    browserHistory.replace('/links');
  }
};

export const onAuthChange = (isAuthenticated) => {
  const pathname = browserHistory.getCurrentLocation().pathname;
  const isUnauthenticatedPage = unauthenticatedPages.includes(pathname);
  const isAuthenticatedPage = authenticatedPages.includes(pathname);

// do we keep this despite the onEnter callback. s6l60
  if (isAuthenticated && isUnauthenticatedPage) {
    browserHistory.replace('/links');
  }  else if (!isAuthenticated  && isAuthenticatedPage) {
    browserHistory.replace('/');
  }
}
export const routes = (
    <Router history={browserHistory}>
      <Route path="/" component={LogIn} onEnter={onEnterPublicPage}/>
      <Route path="/signup" component={Signup} onEnter={onEnterPublicPage}/>
      <Route path="/links" component={DayItem} onEnter={onEnterPrivatePage}/>
      <Route path="*" component={NotFound}/>
    </Router>
);
