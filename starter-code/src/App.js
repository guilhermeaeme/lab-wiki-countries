import React, { Component, Fragment } from 'react';
import './App.css';
import countries from './countries.json';
import CountryDetail from './CountryDetail';
import { Link, NavLink, Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Fragment>
        <nav className="navbar navbar-dark bg-primary mb-3">
          <div className="container">
            <Link className="navbar-brand" to="/">WikiCountries</Link>
          </div>
        </nav>

        <div className="container">
          <div className="row">
            <div className="col-5" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
              <div className="list-group">
                {countries.map((item) => (
                  <NavLink activeClassName="active" key={item.cca3} className="list-group-item list-group-item-action" to={`/${item.cca3}`}>{item.flag} {item.name.common}</NavLink>
                ))}
              </div>
            </div>
            <div className="col-7">
              <Switch>
                <Route exact path='/' component={null}/>
                <Route exact path='/:cca3' component={CountryDetail}/>
              </Switch>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default App;
