import React from 'react';
import NavLink from './NavLink.jsx';
import PageLink from './PageLink.jsx';
import {Link} from 'react-router';

function Navigation(props) {
    var currentLocation = props.location.pathname;
    var content;
    if (currentLocation === '/') {
        content = (<div className="page-header"></div>);
    } else {
        content = (
            <div className="col-md-12 page-nav">
                <NavLink to="/api">APIer</NavLink>
                <NavLink to="/datasets">Datasett</NavLink>
                <NavLink to="/wms">WMS / Kart</NavLink>
                <NavLink to="/plugins">Plugins</NavLink>
              <div className="page-header"></div>
            </div>
        );
    }
    return (
      <div className="row page-nav">
        {content}
      </div>
    );
}

const App = React.createClass({
  render: function () {
    return (
      <div className="container-fluid">
          <div className="row headerContent">
            <div className="col-md-6 headerContainer">
              <Link to="/"onlyActiveOnIndex={true} className="headerTitle">For utviklere</Link>
            </div>
            <div className="col-md-6 descriptionContainer">
                <span className="headerDescription">
                Norkart tilbyr API’er for alle som har 
                lyst til å integrere våre detaljerte kart i egne løsninger, 
                eller ta i bruk våre data og tjenester.
                </span>
            </div>
          </div>
        <Navigation
              {...this.props}/>

        <div className="row page">
          <div className="col-md-12">
            {this.props.children}
          </div>
        </div>

      </div>
    );
  }
});

export default App;
