import React from 'react'
import '../App.css'
import ReactHtmlParser from 'react-html-parser'

function Post({ post }) {
    let description = post.discription
    let task = post.task
    return (
        <div className="post">
            <h2>{post.title}</h2>
            <div className="d-flex">
            <h6>{post.author}</h6>
                <span className="dot">•</span>
            <small> {post.date} </small>
            </div>
            <hr/>
            <p> {ReactHtmlParser(description)} </p>
            <h5 style={{textDecoration:'underline'}}> TODO :</h5>
            <p className="task">{ReactHtmlParser(task)}</p>
        </div>
    )
}

export default Post
