import * as React from 'react';
import * as _ from 'underscore';
import {Link} from 'react-router';

import FilterableListGroup from './FilterableListGroup';

var DatasetListItem = function (props) {
    var className = 'list-group-item';
    if (props.selected) {
        className += ' active';
    }
    return (
        <Link className={className} to={'/datasets/' + props.item.Id}>
            {props.item.Name}
        </Link>
    );
};

var DatasetList = function (props) {

    return (
        <FilterableListGroup
            items={props.datasets}
            selectedItem={props.selectedDataset}
            itemComponent={DatasetListItem}
            idAttr="Id" />
    );
};

export default DatasetList;
