import React, { Component } from 'react'

import axios from "axios";

import "../App.css";

export default class CreatePost extends Component {
    constructor() {
        super();
        this.state = {
            title: "",
            displayName: "",
            numChapter: null,
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui nunc mattis enim ut tellus elementum sagittis. Amet consectetur adipiscing elit pellentesque habitant morbi tristique. Diam donec adipiscing tristique risus nec. Aliquet bibendum enim facilisis gravida. Ipsum dolor sit amet consectetur adipiscing elit. Sit amet purus gravida quis blandit. Sed risus ultricies tristique nulla aliquet enim tortor at. Leo vel fringilla est ullamcorper eget nulla facilisi. Tortor aliquam nulla facilisi cras. Amet tellus cras adipiscing enim eu turpis egestas pretium. Nibh ipsum consequat nisl vel pretium lectus quam id leo. Porta non pulvinar neque laoreet suspendisse interdum. Tincidunt id aliquet risus feugiat in. Quam adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus urna.",
            url: 'https://chapter-book-backend.herokuapp.com/',
        };
        
    }


    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    onSubmit = (e) => {
        e.preventDefault();

        const data = {
            title: this.state.title,
            UID: "",
            displayName: this.state.displayName,
            numChapter: this.state.numChapter,
            content: this.state.content,
        };

        axios
        .post(`${this.state.url}api/chapters`, data)
        .then((res) => {
            this.setState({
                title: "",
                displayName: "",
                numChapter: null,
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui nunc mattis enim ut tellus elementum sagittis. Amet consectetur adipiscing elit pellentesque habitant morbi tristique. Diam donec adipiscing tristique risus nec. Aliquet bibendum enim facilisis gravida. Ipsum dolor sit amet consectetur adipiscing elit. Sit amet purus gravida quis blandit. Sed risus ultricies tristique nulla aliquet enim tortor at. Leo vel fringilla est ullamcorper eget nulla facilisi. Tortor aliquam nulla facilisi cras. Amet tellus cras adipiscing enim eu turpis egestas pretium. Nibh ipsum consequat nisl vel pretium lectus quam id leo. Porta non pulvinar neque laoreet suspendisse interdum. Tincidunt id aliquet risus feugiat in. Quam adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus urna.",
            });
        })
        .catch((err) => {
            console.log(`Error in CreatePost:${err}`);
        });
    };
render(){
    return (
        <div>
            <h3>Create Post</h3>
            <form noValidate onSubmit={this.onSubmit}>
                <div>
                    <label>
                        Title
                    </label>
                    <br />
                    <input 
                        type="text"
                        placeholder="Title of Chapter"
                        name="title"
                        value={this.state.title}
                        onChange={this.onChange}
                    />
                </div>

                <div>
                    <label>
                        Name to Display
                    </label>
                    <br />
                    <input 
                        type="text"
                        placeholder="leave blank for anonymous entry"
                        name="displayName"
                        value={this.state.displayName}
                        onChange={this.onChange}
                    />
                </div>

                <div>
                    <label>
                        Content
                    </label>
                    <br />
                    <textarea 
                        type="text"
                        rows="10"
                        placeholder="Type chapter here."
                        name="content"
                        value={this.state.content}
                        onChange={this.onChange}
                    />
                </div>

                {/* <div>
                    <label>
                        Chapter Number
                    </label>
                    <br />
                    <select 
                        placeholder="Chapter Number"
                        name="numChapter"
                        value={this.state.numChapter}
                        onChange={this.onChange}
                    >
                        <option>1</option>
                    </select>
                </div> */}

                <input type="submit"/>
            </form>
        </div>
    )
}}
