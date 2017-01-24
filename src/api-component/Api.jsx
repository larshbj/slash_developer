import * as React from 'react';
// import getDatasets from './api/getDatasets';
import ApiTable from './ApiTable';

var mocks = require('../mocks.js');
let mockJson = mocks.mockApi;

function Api(props) {
    var selectedApi = props.params.apiId;
    if (selectedApi) {
        selectedApi = parseInt(selectedApi, 10);
    }
    var content;
    if (selectedApi) {
        // content = (
        //     <div className="row">
        //         <div className="col-md-4">
        //             <ApiList selectedApi={selectedApi} apis={props.apis}/>
        //         </div>
        //         <div className="col-md-8">
        //             {props.children}
        //         </div>
        //     </div>
        // );
    } else {
        content = (
            <ApiTable apis={props.apis}/>
        );
    }
    return (
        <div className="col-md-12 api">
            <div className="row description-text">
                <div className="col-md-5 description-text">
                    Alle våre data er tilgjengelige som HTTP REST APIer, 
                    og leverer data som JSON og XML.
                </div>
            </div>
            {content}
        </div>
    );
}

var ApiListFetcher = React.createClass({
    mockJson: mocks.mockApi,
    getInitialState: function () {
        return {apis: []};
    },

    componentDidMount: function () {
        // getApis(this.gotApis);
        // this.gotApis(null, MockJson);
        this.setState({apis: mockJson});
    },

    gotApis: function (err, apis) {
        if (err) {
            return;
        }
        this.setState({apis: apis});
    },

    render: function () {
        if (!this.state.apis.length) {
            return null;
        }

        return (
            <Api
                {...this.props}
                apis={this.state.apis}/>
        );
    }
});

export default ApiListFetcher;
