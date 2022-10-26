import React from 'react';

export default class ReviewForm extends React.Component {
    render() {
        return (
            <div>
                <input type="number" className="form-control" id="starsInput" placeholder="5"></input>
                <input type="text" className="form-control" id="reviewInput" placeholder="Leave Review Here."></input>
            </div>
        );
    }
}