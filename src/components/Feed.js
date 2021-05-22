import React, { Component } from 'react'
import axios from "axios";

import FeedCard from './FeedCard'

import "../App.css";

export default class Feed extends Component {

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

        const chapters = this.state.chapters;
        let chapterList;

        if (!chapters) {
            chapterList = "there is no chapter record!";
        } else {
            chapterList = (chapters.map((chapter, k) => <FeedCard chapter={chapter} key={k} />));
        }

        return (
            <div>
                <h4>Feed</h4>
                {chapterList}
            </div>
        )
    }
}