import * as React from 'react';
import * as _ from 'underscore';

import getDataset from '../requests/getDataset';
import AttributeTable from './AttributeTable';
import DatasetOverview from './DatasetOverview';
import DatasetMap from './DatasetMap';
import getDataFromSet from '../requests/getDataFromSet.js';


var DatasetDetail = React.createClass({

    getInitialState: function () {
        return {tab: 'overview'};
    },

    getDefaultProps: function () {
        return {
            tabs: [
                {id: 'overview', title: 'Detaljer', component: DatasetOverview},
                {id: 'attributes', title: 'Attributter', component: AttributeTable},
                {id: 'map', title: 'Kart', component: DatasetMap}
            ]
        };
    },

    selectTab: function (tabId) {
        this.setState({tab: tabId});
    },

    render: function () {
        // window.scrollTo(0, 0); // temporary solution so that user instantly sees datadetails
        var Component = _.findWhere(this.props.tabs, {id: this.state.tab}).component;
        return (
            <div>
                <div className="page-header">
                    <h2>{this.props.dataset.Name}</h2>
                </div>
                <ul className="nav nav-tabs">
                    {_.map(this.props.tabs, function (tab) {
                        return (
                            <li
                                key={tab.id}
                                className={tab.id === this.state.tab ? 'active' : ''}>
                                <a onClick={this.selectTab.bind(this, tab.id)}>
                                    {tab.title}
                                </a>
                            </li>
                        );
                    }, this)}
                </ul>
                <Component {...this.props} />
            </div>
        );
    }
});

var DatasetDetailFetcher = React.createClass({

    getInitialState: function () {
        return {
            dataset: null,
            data: null
        };
    },

    componentDidMount: function () {
        console.log(this.props.datasetId);
        getDataset(this.gotDataset, this.props.datasetId);
    },

    // gotData: function (err, data) {
    //     if (err) {
    //         return;
    //     }
    //     this.setState({data: data});
    // },

    gotDataset: function (err, dataset) {
        if (err) {
            return;
        }
        this.setState({dataset: dataset});
    },

    render: function () {
        if (!this.state.dataset) {
            return null;
        }
        return (
            <DatasetDetail
                {...this.props}
                dataset={this.state.dataset}
                data={this.state.data}/>
        );
    }
});

export default function (props) {
    var datasetId = parseInt(props.params.datasetId, 10);
    return (
        <DatasetDetailFetcher
            key={datasetId}
            datasetId={datasetId}/>
    );
};
