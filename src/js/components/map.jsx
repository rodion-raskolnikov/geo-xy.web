import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import * as L from 'leaflet';
import 'leaflet/dist/leaflet.css';

import { getLoc } from 'geo-xy';

const defaultCenter = { lat: 51.505, lng: -0.09 };

const getGrid = (center) => {
    const mile = 1609.34;
    const result = [];

    for (let x = -5 * mile; x <= 6 * mile; x += mile) {
        for (let y = -5 * mile; y <= 6 * mile; y += mile) {
            const loc = getLoc({ x, y }, center);
            result.push(loc);
        }
    }
    return result;
}

class Map extends Component {
    static propTypes = {
        center: PropTypes.object,
    };

    constructor(props) {
        super(props);
        this.map = null;
    }

    componentDidMount() {
        if (!this.map) {
            const center = this.props.center || defaultCenter;

            var map = L.map('map').setView(center, 12);
            L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom: 19,
                attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            }).addTo(map);

            // add grid
            const grid = getGrid(center);
            const optionsLoc = { color: '#000', fillColor: '#000', fillOpacity: 0.5, radius: 2 };
            const optionsCenter = { color: '#000', fillColor: '#000', fillOpacity: 0.5, radius: 4 };

            L.circleMarker(center, optionsCenter).addTo(map);
            grid.forEach((loc) => {
                L.circleMarker(loc, optionsLoc).addTo(map);
            });

            this.map = map;
        }
    }

    componentWillUnmount() {
        if (this.map && this.map.remove) {
            this.map.off();
            this.map.remove();
            this.map = null;
        }
    }

    render() {
        return <div id="map" />;
    }
}

export default Map;
