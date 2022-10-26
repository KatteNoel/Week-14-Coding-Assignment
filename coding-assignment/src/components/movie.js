import React from 'react';
import ReviewList from './reviewlist';

export default class Movie extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="card w-100">
                <div className="card-header">
                    <h2>{this.props.name}</h2>
                </div>
                <div className="card-body">
                    <img src={this.props.imgSource} alt="The movie's poster." className="w-50"></img>
                </div>
                <div className="card-footer">
                    <ReviewList {...this.props}/>
                </div>
            </div>
        );
    }
}