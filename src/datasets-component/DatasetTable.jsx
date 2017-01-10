import * as React from 'react';
import {Link} from 'react-router';
import moment from 'moment';
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
        id: 'Name',
        name: 'Navn',
        sortParams: 'Name',
        isSorted: false,
        sortDirection: 'asc',
        formatter: function (dataset) {
            return (
                <Link to={'/datasets/' + dataset.Id}>{dataset.Name}</Link>
            );
        }
    },
    // {
    //     id: 'Temagruppe',
    //     name: 'Temagruppe',
    //     sortParams: 'Temagruppe',
    //     filterable: true,
    //     isSorted: false,
    //     sortDirection: 'asc'
    // },
    // {
    //     id: 'Dataeier',
    //     name: 'Dataeier',
    //     sortParams: 'Dataeier',
    //     filterable: true,
    //     isSorted: false,
    //     sortDirection: 'asc'
    // },
    // {
    //     id: 'GeoNorgeUuid',
    //     name: 'GeoNorgeUuid',
    //     sortParams: 'GeoNorgeUuid',
    //     sortable: false
    // },
    {
        id: 'Opplysninger',
        name: 'Opplysninger',
        formatter: function (dataset) {
            return (<p title={dataset.Opplysninger}>{firstN(dataset.Opplysninger, 5)}</p>);
        },
        sortParams: 'Opplysninger',
        sortable: false
    },
    {
        id: 'Version',
        name: 'Version',
        sortParams: 'Version',
        isSorted: false,
        sortDirection: 'asc',
        formatter: function (dataset) {
            return moment(dataset.Version).format('DD.MM.YYYY');
        }
    },
    // {
    //     id: 'Vedlikehold',
    //     name: 'Vedlikehold',
    //     sortParams: 'Vedlikehold',
    //     isSorted: false,
    //     sortDirection: 'asc'
    // },
    {
        id: 'Datafangstmetode',
        name: 'Datafangstmetode',
        formatter: function (dataset) {
            return (<p title={dataset.Datafangstmetode}>{firstN(dataset.Datafangstmetode, 5)}</p>);
        },
        sortParams: 'Datafangstmetode',
        sortable: false
    },
    {
        id: 'Link',
        name: 'Link',
        sortParams: 'Link',
        sortable: false,
        formatter: function (dataset) {
            if (!dataset.Link) {
                return '-';
            }
            return (<a href={dataset.Link}>link</a>);
        }
    }
    // {
    //     id: 'Datatype',
    //     name: 'Datatype',
    //     sortParams: 'Datatype',
    //     isSorted: false,
    //     sortDirection: 'asc'
    // }
];

export default function (props) {
    return (
        <ReactTable
            items={props.datasets}
            searchFunction={filterTable}
            filterable={true}
            showIndex={false}
            columns={columns} />
        );
}
