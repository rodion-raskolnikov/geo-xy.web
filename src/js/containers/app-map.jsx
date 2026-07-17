import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Map from '../components/map';

@connect(
    state => ({
        map: state.map,
    }),
    { },
)
class AppMap extends Component {
    static propTypes = {
        map: PropTypes.object,
    };

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    render() {
        const { center } = this.props.map;
        return (
            <Map center={center} />
        );
    }
}

export default AppMap;
