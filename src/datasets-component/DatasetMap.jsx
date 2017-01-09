import * as React from 'react';
import * as ReactDOM from 'react-dom';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1IjoiYXRsZWZyZW4iLCJhIjoiblVybXMyYyJ9.tFyswxpRSc5XPLeIzeR29A';

var DatasetMap = React.createClass({

    componentDidMount: function () {
        var div = ReactDOM.findDOMNode(this);
        var map = new mapboxgl.Map({
            container: div, // container id
            style: 'mapbox://styles/mapbox/streets-v9', //stylesheet location
            center: [10, 60], // starting position
            zoom: 9 // starting zoom
        });
    },

    render: function () {
        return (<div className="map"></div>);
    }

});

export default DatasetMap;
