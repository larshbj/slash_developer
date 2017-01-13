import * as React from 'react';
import {Link} from 'react-router';
import getWms from '../requests/getWms';
import WmsTable from './WmsTable';

var mocks = require('../mocks.js');
let mockJson = mocks.mockApi;

function Wms(props) {
    var selectedWms = false;
    if (selectedWms) {
        selectedWms = parseInt(selectedWms, 10);
    }
    var content;
    if (selectedWms) {
        // content = (
        //     <div className="row dataset">
        //         <div className="col-md-3 list">
        //             <DatasetList 
        //                 selectedWms={selectedWms}
        //                 wms={props.wms}/>
        //         </div>
        //         <div className="col-md-9 details">
        //             {props.children}
        //         </div>
        //     </div>
        // );
    } else {
        content = (
            <WmsTable
                {... props}
                    wms={props.wms}/>
        );
    }
    return (
        <div className="wms">
            {content}
        </div>
    );
}

var WmsListFetcher = React.createClass({

    getInitialState: function () {
        return {wms: []};
    },

    componentDidMount: function () {
        // getWms(this.gotWms);
        this.setState({wms: mockJson});
    },

    gotWms: function (err, wms) {
        if (err) {
            return;
        }
        this.setState({wms: wms});
    },

    render: function () {
        if (!this.state.wms.length) {
            return null;
        }

        return (
            <Wms
                {...this.props}
                wms={this.state.wms}/>
        );
    }
});

export default WmsListFetcher;
