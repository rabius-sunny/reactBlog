import React from 'react'
import '../App.css'
import ReactHtmlParser from 'react-html-parser'

function Post({ post }) {
    let discription = post.discription
    return (
        <div className="post">
            <h2>{post.title}</h2>
            <small> {post.date} </small> <br/>
            <h6>{post.author}</h6>
            <p> {ReactHtmlParser(discription)} </p>
        </div>
    )
}

export default Post
