import * as React from 'react';
import * as _ from 'underscore';
import {Link} from 'react-router';

import FilterableListGroup from 'util/FilterableListGroup';

var DatasetListItem = function (props) {
    var className = 'list-group-item';
    if (props.selected) {
        className += ' active';
    }
    let lat = props.location.query ? props.location.query.lat : '';
    let lng = props.location.query ? props.location.query.lng : '';
    let zoom = props.location.query ? props.location.query.zoom : '';
    return (
        <Link className={className} to={{
            "pathname": '/datasets/' + props.item.Id,
            "query": {
                "lat": lat,
                "lng": lng,
                "zoom": zoom
            }}}>
            {props.item.Name}
        </Link>
    );
};


var DatasetList = function (props) {


    return (
        <FilterableListGroup
            {...props}
            items={props.datasets}
            selectedItem={props.selectedDataset}
            itemComponent={DatasetListItem}
            idAttr="Id" />
    );
};

export default DatasetList;
