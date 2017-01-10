import * as React from 'react';
import * as ReactDOM from 'react-dom';
import L from 'leaflet';
// import mapboxgl from 'mapbox-gl';

// mapboxgl.accessToken = 'pk.eyJ1IjoiYXRsZWZyZW4iLCJhIjoiblVybXMyYyJ9.tFyswxpRSc5XPLeIzeR29A';

var DatasetMap = React.createClass({

//     componentDidMount: function () {
//         var div = ReactDOM.findDOMNode(this);
//         var map = new mapboxgl.Map({
//             container: div, // container id
//             style: 'mapbox://styles/mapbox/streets-v9', //stylesheet location
//             center: [10, 60], // starting position
//             zoom: 9 // starting zoom
//         });
//         map.on('load', function () {
//             map.addSource("test", {
//                 "type": "geojson",
//                 "data": this.props.data
//             });
//             map.addLayer({
//                 "id": "Grunnskoler",
//                 "type": "symbol",
//                 "source": "test"
//             });
//         }.bind(this));
//     },

//     render: function () {
//         return (<div className="map"></div>);
//     }
        mapOptions: {
          lat: 63.41,
          lng: 10.4,
          zoom: 5
        },

        pointToLayer: function () {
             return L.circleMarker(latlng, {
                "radius": 3
            });
        },

        componentDidMount: function () {
            let position = [this.mapOptions.lat, this.mapOptions.lng];
            let mapLayer = L.tileLayer("http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png",
                {subdomains: "abc", maxZoom: 18});
            let mapSettings = {
                layers: [mapLayer],
                attributionControl: false,
                zoomControl: false
            };
            var div = ReactDOM.findDOMNode(this);
            let map = L.map(div, mapSettings).setView(position, this.mapOptions.zoom);
            console.log(this.props.data);
            map.on('load', function () {
                let layer = L.geoJson(this.props.data, {
                    style: {
                        fillColor: 'red',
                        color: 'red',
                        weight: 3,
                        fillOpacity: 0.7,
                        opacity: 0.7
                    },
                    pointToLayer: this.pointToLayer
                });
                layer.addTo(map);
                let coords = this.props.data.features[0].geometry.coordinates;
                let latlong = L.geoJson.coordsToLatLng(coords);
                map.setView(latlong, 13);
            }.bind(this));
        },

        render: function () {
            return (<div className="map"></div>);
        }


});

export default DatasetMap;
