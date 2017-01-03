import React from 'react';
import NavLink from './NavLink.jsx';
import { Link } from 'react-router';

const App = React.createClass({
  render: function () {
    return (
      <div>
        <Link to="/"onlyActiveOnIndex={true}><h1>Norkart.no/developer</h1></Link>
        <ul role="nav">
            <div><NavLink to="/api">APIer</NavLink></div>
            <div><NavLink to="/datasets">Datasett</NavLink></div>
            <div><NavLink to="/plugins">Plugins</NavLink></div>
        </ul>

        {this.props.children}

      </div>
    );
  }
});

export default App;
