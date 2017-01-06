import * as React from 'react';
import ApiList from './ApiList';
import {Link} from 'react-router';

// import getDatasets from './api/getDatasets';
import ApiTable from './ApiTable';

var mocks = require('../mocks.js');

export default React.createClass({
  render() {
    return (
        <div className="api">
            <ApiTable />
        </div>
    );
  }
});

// function Api(props) {
//     console.log(props.params.datasetId);
//     var selectedDataset = props.params.datasetId;
//     if (selectedDataset) {
//         selectedDataset = parseInt(selectedDataset, 10);
//     }
//     var content;
//     console.log(selectedDataset);
//     if (selectedDataset) {
//         content = (
//             <div className="row">
//                 <div className="col-md-4">
//                     <ApiList selectedDataset={selectedDataset} datasets={props.datasets}/>
//                 </div>
//                 <div className="col-md-8">
//                     {props.children}
//                 </div>
//             </div>
//         );
//     } else {
//         content = (
//             <ApiTable datasets={props.datasets}/>
//         );
//     }
//     return (
//         <div className="api">
//             {content}
//         </div>
//     );
// }

// var DatasetListFetcher = React.createClass({
//     mockJson: mocks.mockApi,
//     getInitialState: function () {
//         return {datasets: this.mockJson};
//     },

//     // componentDidMount: function () {
//     //     // getDatasets(this.gotDatasets);
//     //     this.gotDatasets(null, MockJson);
//     // },

//     // gotDatasets: function (err, datasets) {
//     //     if (err) {
//     //         return;
//     //     }
//     //     this.setState({datasets: datasets});
//     // },

//     render: function () {
//         if (!this.state.datasets.length) {
//             return null;
//         }

//         return (
//             <Api
//                 {...this.props}
//                 datasets={this.state.datasets}/>
//         );
//     }
// });

// export default DatasetListFetcher;
