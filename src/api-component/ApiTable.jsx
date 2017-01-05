import * as React from 'react';
import {Link} from 'react-router';
// import moment from 'moment';
var ReactTable = require('@norkart/react-table');
require('@norkart/react-table/dist/react-table.css');

import filterDatasets from './filterDatasets';

var mockApi = require('../mockApi.js');
let mockJson = mockApi.mockJson;

function firstN(str, n) {
    if (!str) {
        return str;
    }
    var words = str.split(/\s+/);
    if (words.length <= n) {
        return str;
    }
    return words.slice(0, n).join(' ') + '...';
}

var columns = [
    {
        id: 'index',
        name: 'Id',
        sortParams: 'Id',
        isSorted: true,
        sortDirection: 'asc'
    },
    {
        id: 'name',
        name: 'Navn',
        sortParams: 'Name',
        isSorted: false,
        sortDirection: 'asc'
        // formatter: function (dataset) {
        //     return (
        //         <Link to={'/datasets/' + dataset.Id}>{dataset.Name}</Link>
        //     );
        // }
    },
    {
        id: 'about',
        name: 'Beskrivelse',
        formatter: function (dataset) {
            return (<p title={dataset.about}>{firstN(dataset.about, 10)}</p>);
        },
        sortParams: 'Beskrivelse',
        sortable: false
    },
    {
        id: 'documentation',
        name: 'Dokumentasjon',
        sortParams: 'Dokumentasjon',
        sortable: false,
        formatter: function (dataset) {
            if (!dataset.documentation) {
                return '-';
            }
            return (<a href={dataset.documentation} target="_blank">link</a>);
        }
    }
];

export default function (props) {
    return (
        <ReactTable
            items={mockJson}
            idProperty="Id"
            showIndex={false}
            searchFunction={filterDatasets}
            filterable={true}
            columns={columns} />
        );
}
