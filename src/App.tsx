import React from 'react';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Dashboard from './component/Dashboard';
import OrderSearch from './component/OrderSearch';
import OrderDetail from './component/OrderDetail';

function App() {
  return (
    <div>
      <BrowserRouter>
        <nav className="nav-style">
          <li><Link to="/">Dashboard</Link></li>
          <li><Link to="/search">Order Search</Link></li>
          <li><Link to="/order">Order Detail</Link></li>
        </nav>
        <Route exact path="/">
          <Dashboard />
        </Route>
        <Route exact path="/search">
          <OrderSearch />
        </Route>
        <Route exact path="/order">
          <OrderDetail />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
