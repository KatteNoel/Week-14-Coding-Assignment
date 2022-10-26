import React from 'react';

export default class Stars extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log("updating");
        console.log(this.props);
        console.log(this.props.stars);
        switch (this.props.stars) {
            case 1: 
                return (
                    <h3 id="stars">*</h3>
                );
            case 2:
                return (
                    <h3 id="stars">**</h3>
                );
            case 3:
                return (
                    <h3 id="stars">***</h3>
                );
            case 4:
                return (
                    <h3 id="stars">****</h3>
                );
            case 5:
                return (
                    <h3 id="stars">*****</h3>
                );
            default:
                return (
                    <h3 id="stars"></h3>
                );
        }
    }
}