import React from 'react'

import FeedCard from './FeedCard'

import "../App.css";

export default function Feed(props) {

    const chapters = props.chapters;
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