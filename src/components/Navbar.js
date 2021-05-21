import React from 'react'
import {
  Link
} from "react-router-dom";

export default function Navbar() {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/dashboard">Dashboard</Link>
                    </li>
                    <li>
                        <Link to="/sign-in">Sign In</Link>
                    </li>
                    <li>
                        <Link to="/sign-up">Sign Up</Link>
                    </li>
                    <li>
                        <Link to="/create-post">Create Post</Link>
                    </li>
                    <li>
                        <Link to="/explore">Explore</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
