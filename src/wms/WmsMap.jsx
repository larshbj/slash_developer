import * as React from 'react';
import * as ReactDOM from 'react-dom';
import L from 'leaflet';
// var TileLayer = require('leaflet-webatlastile').WebatlasTileLayer;

// var tileLayer = require('leaflet-webatlastile').webatlasTileLayer;

import {key} from 'requests/key.js';

var WmsMap = React.createClass({

        componentDidMount: function () {
            var div = ReactDOM.findDOMNode(this);
            
            // Base layer
            let mapLayer = L.tileLayer("http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png",
                {maxZoom: 18, zIndex: -1});

            // WMS layer
            let url = "http://waapi.webatlas.no/" + this.props.service + "/?APITOKEN=" + key;
            let wmsOptions = {
                layers: "Eiendomskart",
                format: 'image/png',
                transparent: true
            };
            let wmsLayer = L.tileLayer.wms(url, wmsOptions);

            // Map
            let position = [63.41, 10.4];
            let zoom = 9;
            let mapSettings = {
                layers: [mapLayer, wmsLayer],
                attributionControl: false,
                crs: L.CRS.EPSG3857,
                zoomControl: false
            };
            let map = L.map(div, mapSettings).setView(position, zoom);
            // L.tileLayer.webatlas({apikey: key, mapType: L.TileLayer.Webatlas.Type.GREY}).addTo(map);
        },

        render: function () {
            return (<div className="wmsMap"></div>);
        }


});

export default WmsMap;
