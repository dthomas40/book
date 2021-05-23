import React, { useState } from 'react'

import FeedCard from './ChapterCard'

import "../App.css";

export default function BookView(props) {
    const [numChapter, setNumChapter] = useState(1);
    let chapters = props.chapters;
    chapters = chapters.filter(chapter => chapter.numChapter === numChapter )
    let currentChapter;

    if (!chapters) {
        currentChapter = "there is no chapter record!";
    } else {
        currentChapter = (chapters.map((chapter, k) => <FeedCard chapter={chapter} key={k} />));
    }

    return (
        <div>
            <h4>Book View</h4>
            <button onClick={() => setNumChapter(numChapter - 1)}>-</button> Chapter: {numChapter} <button onClick={() => setNumChapter(numChapter + 1)}>+</button>
            <hr />
            {currentChapter}
        </div>
    )
}