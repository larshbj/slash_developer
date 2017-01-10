import React from 'react';
import NavLink from './NavLink.jsx';
import PageLink from './PageLink.jsx';
import {Link} from 'react-router';

function Navigation(props) {
    var currentLocation = props.location.pathname;
    var content;
    if (currentLocation === '/') {
        content = null;
    } else {
        content = (
            <div className="page-nav">
                <NavLink to="/api">APIer</NavLink>
                <NavLink to="/datasets">Datasett</NavLink>
                <NavLink to="/plugins">Plugins</NavLink>
            </div>
        );
    }
    return (
      <div>
        {content}
      </div>
    );
}

const App = React.createClass({
  render: function () {
    return (
      <div className="master-wrapper">
        <div className="headerBox">
          <div className="headerContent">
            <Link to="/"onlyActiveOnIndex={true} className="headerTitle">For utviklere</Link>
            <div className="descriptionContainer">
                <span className="headerDescription">
                Norkart tilbyr API’er for alle som har 
                lyst til å integrere våre detaljerte kart i egne løsninger, 
                eller ta i bruk våre data og tjenester.
                </span>
            </div>
          </div>
        </div>
        <Navigation
              {...this.props}/>

        <div className ="page">
          {this.props.children}
        </div>

      </div>
    );
  }
});

export default App;
