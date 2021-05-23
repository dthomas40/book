import React, { Component } from 'react'
import axios from "axios"
import BookView from './BookView'
import Feed from './Feed'
import Intro from './Intro'

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chapters: [],
            url: 'https://chapter-book-backend.herokuapp.com/',
        };
    }

    componentDidMount() {
        axios
        .get(`${this.state.url}api/chapters`)
        .then((res) => {
            this.setState({
                chapters: res.data,
            });
        })
        .catch((err) => {
            console.log(`Error from Feed: ${err}`);
        });
    };

    render() {
        return (
            <div>
                <h3>Home</h3>
                <Intro />
                <div>
                    <Feed chapters={this.state.chapters} />
                    <BookView chapters={this.state.chapters} />
                </div>
            </div>
        )
    }
}
