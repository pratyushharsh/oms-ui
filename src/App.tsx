import React from 'react';
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Dashboard from './component/Dashboard';
import OrderSearch from './component/orderSearch/OrderSearch';
import OrderDetail from './component/order-detail/OrderDetail';
import MyAppBar from './component/app-bar/MyAppBar';
import { createStyles, makeStyles, useTheme, Theme } from '@material-ui/core/styles';


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

  return (
    <div className={classes.root}>
      <CssBaseline />
      <BrowserRouter>
        {/* <nav className="nav-style">
          <li><Link to="/">Dashboard</Link></li>
          <li><Link to="/search">Order Search</Link></li>
          <li><Link to="/order">Order Detail</Link></li>
        </nav> */}
        <MyAppBar />
        <main className={classes.content} >
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
      </BrowserRouter>
    </div>
  );
}

export default App;
