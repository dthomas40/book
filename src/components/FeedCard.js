import React from 'react'

export default function FeedCard(props) {
    const chapter = props.chapter;

    return (
        <div>
            <h5>{ chapter.title }</h5>
            <h6>{ chapter.content }</h6>
        </div>
    )
}
