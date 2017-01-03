import React from 'react';
import NavLink from './NavLink.jsx';
import {Link} from 'react-router';

const App = React.createClass({
  render: function () {
    return (
      <div>
        <Link to="/"onlyActiveOnIndex={true}><h1>Norkart.no/developer</h1></Link>
        <div className="nav">
            <NavLink to="/api">APIer</NavLink>
            <NavLink to="/datasets">Datasett</NavLink>
            <NavLink to="/plugins">Plugins</NavLink>
        </div>

        <div className ="page">
          {this.props.children}
        </div>

      </div>
    );
  }
});

export default App;
