import * as React from 'react';
import DatasetList from './DatasetList';
import {Link} from 'react-router';
import getDatasets from '../requests/getDatasets';
import DatasetTable from './DatasetTable';
import DatasetDetail from './DatasetDetail';

function Datasets(props) {
    var selectedDataset = props.params.datasetId;
    if (selectedDataset) {
        selectedDataset = parseInt(selectedDataset, 10);
    }
    var content;
    if (selectedDataset) {
        content = (
            <div className="row dataset">
                <div className="col-md-3 list">
                    <DatasetList
                        {...props} 
                        selectedDataset={selectedDataset}
                        datasets={props.datasets}/>
                </div>
                <div className="col-md-9 details">
                    {props.children}
                </div>
            </div>
        );
    } else {
        content = (
            <DatasetTable
                {... props}
                    datasets={props.datasets}/>
        );
    }
    return (
        <div className="col-md-12 datasets">
            <div className="row description-text">
                <div className="col-md-5 description-text">
                    <Link to="/datasets">Oversikt</Link>
                    <a> / </a>
                    <Link to="/datasets/1">Detaljer</Link>
                </div>
            </div>
            {content}
        </div>
    );
}

var DatasetListFetcher = React.createClass({

    getInitialState: function () {
        return {datasets: []};
    },

    componentDidMount: function () {
        getDatasets(this.gotDatasets);
    },

    gotDatasets: function (err, datasets) {
        if (err) {
            return;
        }
        this.setState({datasets: datasets});
    },

    render: function () {
        if (!this.state.datasets.length) {
            return null;
        }

        return (
            <Datasets
                {...this.props}
                datasets={this.state.datasets}/>
        );
    }
});

export default DatasetListFetcher;
