import React from 'react';
import NavLink from './NavLink.jsx';
import {Link} from 'react-router';

const App = React.createClass({
  render: function () {
    return (
      <div>
        <div className="headerBox"><Link to="/"onlyActiveOnIndex={true} className="headerTitle">For utviklere </Link></div>
        <div className="page-nav">
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
