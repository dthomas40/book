import React from 'react'
import BookView from './BookView'
import Feed from './Feed'
import Intro from './Intro'

export default function Home() {
    return (
        <div>
            <h3>Home</h3>
            <Feed />
            <BookView />
            <Intro />
        </div>
    )
}
