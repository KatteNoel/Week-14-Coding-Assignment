import React from 'react';

export default class ReviewForm extends React.Component {
    constructor(props) {
        super(props);
        this.starsId = `starsInput${props.id}`;
        this.reviewId = `reviewInput${props.id}`;
    }
    render() {
        return (
            <div>
                <input type="number" className="form-control" id={this.starsId} placeholder="5"></input>
                <textarea type="text" className="form-control text-area" id={this.reviewId} placeholder="Leave Review Here."></textarea>
            </div>
        );
    }
}