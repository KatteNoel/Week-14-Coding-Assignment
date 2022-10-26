import React from 'react';
import Review from './review';
import ReviewForm from './reviewform';
import Stars from './stars';

export default class ReviewList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            stars: 0,
            review: '',
            id: props.id
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({
            stars: document.getElementById(`starsInput${this.props.id}`).value,
            review: document.getElementById(`reviewInput${this.props.id}`).value
        });

        document.getElementById(`starsInput${this.props.id}`).value = '';
        document.getElementById(`reviewInput${this.props.id}`).value = '';
    }

    render() {
        return (
            <div>
                <Stars {...this.state}/>
                <Review {...this.state}/>
                <ReviewForm {...this.state}/>
                <button className="btn" id="submit" onClick={this.handleClick}>Submit</button>
            </div>
        );
    }
}