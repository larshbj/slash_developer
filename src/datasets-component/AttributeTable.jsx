import * as React from 'react';
import * as _ from 'underscore';

var ReactTable = require('@norkart/react-table');
require('@norkart/react-table/dist/react-table.css');

var columns = [
    {
        id: 'Attribute',
        name: 'Attributtnavn',
        sortParams: 'Attribute',
        isSorted: false,
        sortDirection: 'asc'
    },
    {
        id: 'ObjectType',
        name: 'Objekttype',
        sortParams: 'ObjectType',
        isSorted: false,
        filterable: true,
        sortDirection: 'asc'
    },
    {
        id: 'DataType',
        name: 'Datatype',
        sortParams: 'DataType',
        isSorted: false,
        sortDirection: 'asc',
        sortable: false,
        filterable: true
    }
];

export default function AttributeTable(props) {

    var attrs = _.chain(props.dataset.Attributes)
        .map(function (attribute) {
            attribute.Id = attribute.Attribute + attribute.ObjectType;
            return attribute;
        })
        .value();
    return (
        <ReactTable
            items={attrs}
            idProperty="Id"
            showIndex={false}
            filterable={true}
            columns={columns} />
    );
}
