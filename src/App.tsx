import React from 'react';
import { Switch, Route, withRouter, RouteComponentProps, Link }  from 'react-router-dom';
import Home from './components/Home';
import Create from './components/customer/Create'
import Edit from './components/customer/Edit';
import './App.css';


class App extends React.Component<RouteComponentProps<any>> {
  public render() {
    return (
      <div>
        <nav>
          <ul><li><Link to={'/'}>Home</Link></li></ul>
          <ul><li><Link to={'/create'}>Create Customer</Link></li></ul>
        </nav>
        <Switch>
          <Route path={'/'} exact component={Home} />
          <Route path={'/create'} exact component={Create} />
          <Route path={'/edit/:id'} exact component={Edit} />
        </Switch>
      </div>
    )
  }

}

export default withRouter(App);
