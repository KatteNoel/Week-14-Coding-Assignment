import React from 'react';

export default class Stars extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <h3 id="stars">{this.props.stars} Stars</h3>
        );
    }
}