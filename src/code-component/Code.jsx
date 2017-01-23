import * as React from 'react';
// import getDatasets from './api/getDatasets';
import CodeTable from './CodeTable';

var mocks = require('../mocks.js');
let mockJson = mocks.mockPlugins;

function Api(props) {
    console.log(props.params.apiId);
    var selectedCode = props.params.apiId;
    if (selectedCode) {
        selectedCode = parseInt(selectedCode, 10);
    }
    var content;
    console.log(selectedCode);
    if (selectedCode) {
        // content = (
        //     <div className="row">
        //         <div className="col-md-4">
        //             <ApiList selectedCode={selectedCode} plugins={props.plugins}/>
        //         </div>
        //         <div className="col-md-8">
        //             {props.children}
        //         </div>
        //     </div>
        // );
    } else {
        content = (
            <CodeTable plugins={props.plugins}/>
        );
    }
    return (
        <div className="col-md-12 code">
            <div className="row description-text">
                <div className="col-md-5 description-text">
                    Alle våre plugins er lisensiert under en BSD-2-Clause lisens, 
                    og er tilgjengelige på GitHub, via NPM og vår egen CDN.
                    For å bruke tjenestene må du ha en API-nøkkel fra oss, ta kontakt for priser.
                </div>
            </div>
            {content}
        </div>
    );
}

var ApiListFetcher = React.createClass({
    mockJson: mocks.mockApi,
    getInitialState: function () {
        return {plugins: []};
    },

    componentDidMount: function () {
        // getPlugins(this.gotPlugins);
        // this.gotPlugins(null, MockJson);
        this.setState({plugins: mockJson});
    },

    gotPlugins: function (err, plugins) {
        if (err) {
            return;
        }
        this.setState({plugins: plugins});
    },

    render: function () {
        if (!this.state.plugins.length) {
            return null;
        }

        return (
            <Api
                {...this.props}
                plugins={this.state.plugins}/>
        );
    }
});

export default ApiListFetcher;
