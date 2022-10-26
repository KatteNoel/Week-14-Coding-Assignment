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
                imgSource: StarWars,
                id: 1
            },
            {
                name: 'Twilight',
                imgSource: Twilight,
                id: 2
            },
            {
                name: 'The Room',
                imgSource: TheRoom,
                id: 3
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