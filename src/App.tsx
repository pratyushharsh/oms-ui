import React from 'react';
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import { BrowserRouter, Route, Router, Link } from 'react-router-dom';
import Dashboard from './component/dashboard/Dashboard';
import OrderSearch from './component/orderSearch/OrderSearch';
import OrderDetail from './component/order-detail/OrderDetail';
import MyAppBar from './component/app-bar/MyAppBar';
import { createStyles, makeStyles, useTheme, Theme } from '@material-ui/core/styles';
import SignIn from './component/login/Login';
import {VerifyAuthenticated} from "./component/VerifyAuthenticeted";
import {useSelector} from "react-redux";
import {RootState} from "./store";
import { AuthState } from "./store/auth";

import  history from './history';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    toolbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
  }),
);


function App() {

  const classes = useStyles();
    const state: AuthState = useSelector(
        (state: RootState) => state.auth

    );

  return (
    <Router history={history}>
      <Route exact path="/login">
        <SignIn />
      </Route>
      <VerifyAuthenticated>
      <div className={classes.root}>
        <CssBaseline />
            { state.user && <MyAppBar/>}
          <main className={classes.content}>
              <div className={classes.toolbar} />
            <Route exact path="/">
                  <Dashboard />
            </Route>
            <Route exact path="/search">
              <OrderSearch />
            </Route>
            <Route exact path="/order">
              <OrderDetail />
            </Route>
          </main>
      </div>
      </VerifyAuthenticated>
    </Router>
  );
}

export default App;
