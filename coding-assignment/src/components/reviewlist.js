import React from 'react';
import Review from './review';
import ReviewForm from './reviewform';
import Stars from './stars';

export default class ReviewList extends React.Component {
    constructor() {
        super();
        this.state = {
            stars: 0,
            review: ''
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        //submit input of starsInput to stars
        //submit input of reviewInput to review
        console.log("clicked");
        console.log(document.getElementById('starsInput').value);
        console.log(document.getElementById('reviewInput').value)
        //document.getElementById('paragraph').innerHTML = document.getElementById('reviewInput').innerHTML; 
        //this.state.stars = document.getElementById('starsInput');
        this.setState({
            stars: document.getElementById('starsInput').value,
            review: document.getElementById('reviewInput').value
        });
    }

    render() {
        console.log(this.state.stars);
        console.log(this.state.review);
        return (
            <div>
                <Stars {...this.state.stars}/>
                <Review {...this.state.review}/>
                <ReviewForm />
                <button className="btn btn-primary" id="submit" onClick={this.handleClick}>Submit</button>
            </div>
        );
    }
}