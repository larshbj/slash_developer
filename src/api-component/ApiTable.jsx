import * as React from 'react';
import {Link} from 'react-router';
// import moment from 'moment';
var ReactTable = require('@norkart/react-table');
require('@norkart/react-table/dist/react-table.css');

import filterTable from '../filterTable';

var mocks = require('../mocks.js');
let mockJson = mocks.mockApi;

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
        id: 'name',
        name: 'Navn',
        sortParams: 'name',
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
        sortParams: 'about',
        sortable: false
    },
    {
        id: 'category',
        name: 'Kategori',
        sortParams: 'category',
        filterable: true,
        isSorted: false,
        sortDirection: 'asc'
    },
    {
        id: 'documentation',
        name: 'Dokumentasjon',
        sortParams: 'documentation',
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
            searchFunction={filterTable}
            filterable={true}
            showIndex={false}
            columns={columns} />
        );
}
