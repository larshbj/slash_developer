import React from 'react';
import PageLink from './PageLink.jsx';

export default React.createClass({
  render() {
    return (
        <div className="home">
                <PageLink
                    to="/api"
                    key="api"
                    page="api">
                    API
                </PageLink>
                <PageLink
                    to="/datasets"
                    key="datasets"
                    page="datasets">
                    Datasets
                </PageLink>
                <PageLink
                    to="/wms"
                    key="wms"
                    page="wms">
                    WMS
                </PageLink>
                <PageLink
                    to="/plugins"
                    key="plugins"
                    page="plugins">
                    Plugins
                </PageLink>
        </div>
    );
  }
});


// {mapper.map(function (page) {
//                     return (
//                         <PageLink
//                             to={"/" + page}
//                             key={page}
//                             page={page}>
//                             {page}
//                         </PageLink>
//                     );
//                 })}
