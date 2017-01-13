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

var columns = [
    {
        id: 'Name',
        name: 'Navn',
        sortParams: 'Name',
        isSorted: false,
        sortDirection: 'asc'
        // formatter: function (wms) {
        //     return (
        //         <Link to={'/wmss/' + wms.Id}>{wms.Name}</Link>
        //     );
        // }
    },
    {
        id: 'about',
        name: 'Beskrivelse',
        formatter: function (wms) {
            return (<p title={wms.about}>{firstN(wms.about, 10)}</p>);
        },
        sortParams: 'about',
        sortable: false
    }
    // {
    //     id: 'category',
    //     name: 'Kategori',
    //     sortParams: 'category',
    //     filterable: true,
    //     isSorted: false,
    //     sortDirection: 'asc'
    // },
    // {
    //     id: 'documentation',
    //     name: 'Dokumentasjon',
    //     sortParams: 'documentation',
    //     sortable: false,
    //     formatter: function (wms) {
    //         if (!wms.documentation) {
    //             return '-';
    //         }
    //         return (<a href={wms.documentation} target="_blank">link</a>);
    //     }
    // }
];

export default function (props) {
    return (
        <ReactTable
            items={props.wms}
            searchFunction={filterTable}
            filterable={true}
            showIndex={false}
            columns={columns} />
        );
}
