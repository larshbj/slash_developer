import React from 'react';
import PageLink from './PageLink.jsx';

export default React.createClass({
  render() {
    let mapper = ['api', 'datasets', 'plugins'];
    return (
        <div className="home">
                {mapper.map(function (page) {
                    return (
                        <PageLink
                            to={"/" + page}
                            key={page}
                            page={page}>
                            {page}
                        </PageLink>
                    );
                })}
        </div>
    );
  }
});
