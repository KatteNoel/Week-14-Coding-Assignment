import React from 'react';
import Movie from './movie';
import StarWars from '../images/starwars.jpg';
import Twilight from '../images/twilight.jpg';
import TheRoom from '../images/theroom.jpg';

export default class MovieList extends React.Component {
    render() {
        let movies = [
            {
                name: 'Star Wars',
                imgSource: StarWars
            },
            {
                name: 'Twilight',
                imgSource: Twilight
            },
            {
                name: 'The Room',
                imgSource: TheRoom
            }
        ];

        return (
            <div className="row">
                <div className="col">
                    <Movie {...movies[0]}/>
                </div>
                <div className="col">
                    <Movie {...movies[1]}/>
                </div>
                <div className="col">
                    <Movie {...movies[2]}/>
                </div>
            </div>
        );
    }
}