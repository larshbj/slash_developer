import * as React from 'react';
import DatasetList from './DatasetList';
import {Link} from 'react-router';
import getDatasets from '../requests/getDatasets';
import DatasetTable from './DatasetTable';
// export default React.createClass({
//   render() {
//     return (
//         <div className="datasets">
//             <DatasetTable />
//         </div>
//     );
//   }
// });

function Datasets(props) {
    var selectedDataset = props.params.datasetId;
    if (selectedDataset) {
        selectedDataset = parseInt(selectedDataset, 10);
    }
    var content;
    if (selectedDataset) {
        console.log('selected dataset' + selectedDataset);
        content = (
            <div className="row">
                <div className="col-md-4">
                    <DatasetList selectedDataset={selectedDataset} datasets={props.datasets}/>
                </div>
                <div className="col-md-8">
                    {props.children}
                </div>
            </div>
        );
    } else {
        content = (
            <DatasetTable datasets={props.datasets}/>
        );
    }
    return (
        <div className="datasets">
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
