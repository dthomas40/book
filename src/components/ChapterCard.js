import React from 'react'

export default function ChapterCard(props) {
    const chapter = props.chapter;

    return (
        <div>
            <h5>{ chapter.title }</h5>
            {chapter.author ? <h6>By: { chapter.author }</h6> : <h6>By: Anonymous</h6>}
            <p>{ chapter.content }</p>
        </div>
    )
}
