import * as React from 'react';
import * as ReactDOM from 'react-dom';
import L from 'leaflet';
import * as _ from 'underscore';
// var TileLayer = require('leaflet-webatlastile').WebatlasTileLayer;

// var tileLayer = require('leaflet-webatlastile').webatlasTileLayer;

import {key} from '../requests/key.js';
import {hashHistory} from 'react-router';
import getWmsLegend from 'requests/getWmsLegend';

let map;
var DatasetMap = React.createClass({
        map: map,

        legend_params: {
            "fontName": "Times%20New%20Roman",
            // "fontStyle": ,
            "fontSize": "14",
            "fontColor": "0x000033",
            "fontAntiAliasing": "true",
            "bgColor": "0xFFFFEE",
            "dpi": "180"
            // "forceLabels": ,
            // "layout": ,
            // "columnheight": ,
            // "rowwidth": ,
            // "columns": ,
            // "rows": ,
            // "grouplayout":
        },

        componentDidMount: function () {
            var div = ReactDOM.findDOMNode(this);

            // Base layer
            let mapLayer = L.tileLayer("http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png",
                {maxZoom: 18, zIndex: -1});

            // WMS layer
            let url = "http://waapi.webatlas.no/wms-temadata/?APITOKEN=" + key;
            let wmsOptions = {
                layers: ["layergroup_", this.props.dataset.Id].join(""),
                format: 'image/png',
                transparent: true
            };

            let wmsLayer = L.tileLayer.wms(url, wmsOptions);

            // Map
            let default_params = { //Norkart Sandvika
                'lat': 59.891555,
                'lng': 10.523173,
                'zoom': 15
            };

            let position = [this.props.location.query.lat || default_params.lat,
                            this.props.location.query.lng || default_params.lng];
            let zoom = this.props.location.query.zoom || default_params.zoom;
            let mapSettings = {
                layers: [mapLayer, wmsLayer],
                attributionControl: false,
                crs: L.CRS.EPSG3857,
                zoomControl: false
            };
            this.map = L.map(div, mapSettings).setView(position, zoom);

            // getWmsLegend(this.setLegend, this.props.dataset.Id);
            this.setLegend(url);

            let center;
                zoom;
            this.map.on('moveend', function (e) {
                center = this.map.getCenter();
                zoom = this.map.getZoom();
                this.props.location.query.lat = center.lat;
                this.props.location.query.lng = center.lng;
                this.props.location.query.zoom = zoom;
                hashHistory.replace(this.props.location);
            }.bind(this));
            // map.fitBounds(wmsLayer.getBounds());
            // L.tileLayer.webatlas({apikey: key, mapType: L.TileLayer.Webatlas.Type.GREY}).addTo(map);
        },

        setLegend: function (url) {
            var legend = L.control({position: 'topright'});

            let legend_options = _.reduce(this.legend_params, function (memo, param) {
                return [memo, [param.key, param.value].join(':')].join(';');
            }, "");
            console.log(legend_options);

            let legend_path = [
                        ["layer=layergroup_", this.props.dataset.Id].join(""),
                        "service=wms",
                        "request=GetLegendGraphic",
                        "format=image/png",
                        // "width=20",
                        // "height=20",
                        "legend_options=" + legend_options,
                        ].join("&");
            let legend_url = url + "&" + legend_path;

            legend.onAdd = function (map) {
                let div = L.DomUtil.create('div', 'legend');
                div.innerHTML += '<img src="' + legend_url + '" alt="legend" width="200" height="200">';
                return div;
            }
            legend.addTo(this.map);
        },

        render: function () {
            return (<div className="map"></div>);
        }
});

export default DatasetMap;
