import React from 'react';

export default class Review extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="paragraph">
                <p>{this.props.review}</p>
            </div>
        );
    }
}