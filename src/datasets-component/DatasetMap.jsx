import * as React from 'react';
import * as ReactDOM from 'react-dom';
import L from 'leaflet';
import * as _ from 'underscore';
import {key} from '../requests/key.js';
import {hashHistory} from 'react-router';
import {getWmsLegend} from 'requests/getWmsLegend';

let map;
var DatasetMap = React.createClass({
        map: map,

        legend_params: {
             'fontName': 'Arial',
             // 'fontStyle': 'normal',
             'fontSize': '10',
             'fontColor': '0x000033',
             'fontAntiAliasing': 'true',
             'bgColor': '0xFFFFEE',
             'dpi': '180',
             'forceLabels': 'on'
             // 'layout': ,
             // 'columnheight': ,
             // 'rowwidth': ,
             // 'columns': ,
             // 'rows': ,
             // 'grouplayout':
             // 'dx': '',
             // 'dy': '',
             // 'mx': '',
             // 'my': ''
        },

        componentDidMount: function () {
            var div = ReactDOM.findDOMNode(this);
            
            // Base layer
            let mapLayer = L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png',
                {maxZoom: 18, zIndex: -1});

            // WMS layer
            let url = 'http://waapi.webatlas.no/wms-temadata/?APITOKEN=' + key;
            let wmsOptions = {
                layers: ['layergroup_', this.props.dataset.Id].join(''),
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

            let controlElement = this.setLegend(url);

            controlElement.getContainer().addEventListener('mouseover', function (e) {
                this.map.dragging.disable();
                this.map.scrollWheelZoom.disable();
            }.bind(this));
            controlElement.getContainer().addEventListener('mouseout', function (e) {
                this.map.dragging.enable();
                this.map.scrollWheelZoom.enable();
            }.bind(this));

            this.map.on('moveend', function (e) {
                this.updateMapUrl();
            }.bind(this));
        },

        updateMapUrl: function () {
            let center = this.map.getCenter();
            let zoom = this.map.getZoom();
            this.props.location.query.lat = center.lat;
            this.props.location.query.lng = center.lng;
            this.props.location.query.zoom = zoom;
            hashHistory.replace(this.props.location);
        },

        setLegend: function (url) {
            var legend_options = '';
            for (let key in this.legend_params) {
                let option = [key, this.legend_params[key]].join(':');
                legend_options = legend_options + ';' + option;
            }
            legend_options = legend_options.slice(1);


            let legend_path = [
                        ['layer=layergroup_', this.props.dataset.Id].join(''),
                        'service=wms',
                        'request=GetLegendGraphic',
                        'format=image/png',
                        'width=16',
                        'height=16',
                        'legend_options=' + legend_options
                        ].join('&');

            let legend_url = url + '&' + legend_path;
            var wmsLegendControl = new L.Control.WMSLegend;
            wmsLegendControl.options.uri = legend_url;
            this.map.addControl(wmsLegendControl);
            return wmsLegendControl;
        },

        render: function () {
            return (<div className="map"></div>);
        }
});

export default DatasetMap;

/* https://github.com/kartoza/leaflet-wms-legend with some configurations */

L.Control.WMSLegend = L.Control.extend({
    options: {
        position: 'topright',
        uri: ''
    },

    onAdd: function () {
        var controlClassName = 'leaflet-control-wms-legend',
            legendClassName = 'wms-legend',
            stop = L.DomEvent.stopPropagation;
        this.container = L.DomUtil.create('div', controlClassName);
        this.img = L.DomUtil.create('img', legendClassName, this.container);
        // this.header = L.DomUtil.create('div', 'legend-header', this.container);
        // this.minimizeButton = L.DomUtil.create('div', 'minimize glyphicon glyphicon-minus', this.container);
        this.img.src = this.options.uri;
        this.img.alt = 'Legend';

        L.DomEvent
            .on(this.img, 'click', this._click, this)
            .on(this.container, 'click', this._click, this);
            // .on(this.minimizeButton, 'click', this._click, this);
        this.height = null;
        this.width = null;
        return this.container;
    },

    _click: function (e) {
        L.DomEvent.stopPropagation(e);
        L.DomEvent.preventDefault(e);
        // toggle legend visibility
        var style = window.getComputedStyle(this.img);
        if (style.display === 'none') {
            this.container.style.height = this.height + 'px';
            this.container.style.width = this.width + 'px';
            this.img.style.display = this.displayStyle;
        } else {
            if (this.width === null && this.height === null) {
                // Only do inside the above check to prevent the container
                // growing on successive uses
                this.height = this.container.offsetHeight;
                this.width = this.container.offsetWidth;
            }
            this.displayStyle = this.img.style.display;
            this.img.style.display = 'none';
            this.container.style.height = '20px';
            this.container.style.width = '20px';
        }
    }
});
