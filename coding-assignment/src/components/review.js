import React from 'react';

export default class Review extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props);
        console.log(this.props.review);
        return (
            <div id="paragraph">
                <p>{this.props.review}</p>
            </div>
        );
    }
}