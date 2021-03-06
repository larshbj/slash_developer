import * as React from 'react';
import {Link} from 'react-router';
// import moment from 'moment';
var ReactTable = require('@norkart/react-table');
require('@norkart/react-table/dist/react-table.css');

import filterTable from 'util/filterTable';

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
function firstNLetters(str, n) {
    if (!str) {
        return str;
    }
    var words = str.split('');
    if (words.length <= n) {
        return str;
    }
    return words.slice(0, n).join('') + '...';
}

var columns = [
    {
        id: 'Name',
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
            return (<p title={dataset.about}>{firstN(dataset.about, 20)}</p>);
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
            return (<a href={dataset.documentation} target="_blank">{dataset.documentation}</a>);
        }
    }
];

export default function (props) {
    return (
        <ReactTable
            items={props.plugins}
            searchFunction={filterTable}
            filterable={true}
            showIndex={false}
            columns={columns} />
        );
}
