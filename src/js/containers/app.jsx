import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import AppNav from './app-nav';
import AppGame from './app-game';
import AppMap from './app-map';

class App extends Component {
    static propTypes = {
    };

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount() {
        // const { data } = this.props.match.params;
        console.log(this.props);
    }

    componentWillUnmount() {
    }

    render() {
        return (
            <Fragment>
                <AppNav />
                <AppGame />
                <AppMap />
            </Fragment>
        );
    }
}

export default App;
