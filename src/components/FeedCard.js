import React from 'react'

export default function FeedCard(props) {
    const chapter = props.chapter;

    return (
        <div>
            <textarea
                rows="10"
                cols="25"
            >{JSON.stringify(chapter)}</textarea>
        </div>
    )
}
