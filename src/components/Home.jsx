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
                    <div className="post-text">
                        Vi tilbyr alle tjenestene våre via HTTP-grensensitt 
                        basert på etablerte standarder
                    </div>
                </PageLink>
                <PageLink
                    to="/datasets"
                    key="datasets"
                    page="datasets">
                    Datasett
                    <div className="post-text">
                        Dette er data fra mange kilder som er tilrettelagt 
                        for visualisering og geografiske analyser
                    </div>
                </PageLink>
                <PageLink
                    to="/wms"
                    key="wms"
                    page="wms">
                    WMS
                    <div className="post-text">
                        Vi tilbyr webkart i flere detaljeringsgrader, 
                        i gråtone, samt flyfoto og hybrid.
                    </div>
                </PageLink>
                <PageLink
                    to="/plugins"
                    key="plugins"
                    page="plugins">
                    Plugins
                    <div className="post-text">
                        Den mest brukte funksjonaliteten vår har vi gjort enkelt 
                        tilgjengelig som plugins til Leaflet. Dette betyr at det 
                        er utrolig enkelt å ta i bruk kartdata og -tjenester fra Norkart.
                    </div>
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
