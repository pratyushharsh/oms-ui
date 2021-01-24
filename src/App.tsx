import React from 'react';
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Dashboard from './component/Dashboard';
import OrderSearch from './component/orderSearch/OrderSearch';
import OrderDetail from './component/order-detail/OrderDetail';
import MyAppBar from './component/app-bar/MyAppBar';
import { createStyles, makeStyles, useTheme, Theme } from '@material-ui/core/styles';
import SignIn from './component/login/Login';
import {VerifyAuthenticated} from "./component/VerifyAuthenticeted";
import {useSelector} from "react-redux";
import {RootState} from "./store";
import {AuthState} from "./store/auth";


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
    <div className={classes.root}>
      <CssBaseline />
      <BrowserRouter>
          { state.user && <MyAppBar/>}
        <main className={classes.content}>
            <div className={classes.toolbar} />
          <Route exact path="/">
              <VerifyAuthenticated>
                <Dashboard />
              </VerifyAuthenticated>
          </Route>
          <Route exact path="/search">
              <VerifyAuthenticated>
            <OrderSearch />
                  </VerifyAuthenticated>
          </Route>
          <Route exact path="/order">
              <VerifyAuthenticated>
            <OrderDetail />
              </VerifyAuthenticated>
          </Route>
        </main>
      <Route exact path="/login">
          <SignIn />
      </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
