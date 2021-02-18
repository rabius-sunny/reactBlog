import React, { useState } from 'react'
import firebase from '../firebase'
import '../App.css'

function Create() {
    const [title, setTitle] = useState('')
    const [date, setDate] = useState('')
    const [discription, setDiscription] = useState('')
    const [task, setTask] = useState('')
    const [author, setAuthor] = useState('')
    const [cat, setCat] = useState('')

    const handleTitleChange = e => {
        setTitle(e.target.value)
    }
    const handleDateChange = e => {
        setDate(e.target.value)
    }
    const handleDiscChange = e => {
        setDiscription(e.target.value)
    }
    const handleTaskChange = e => {
        setTask(e.target.value)
    }
    const handleAuthorChange = e => {
        setAuthor(e.target.value)
    }
    const handleCatChange = e => {
        setCat(e.target.value)
    }

    const createToHome = () => {
        const ref = firebase.database().ref('post')
        const post = {
            title,
            date,
            author,
            discription,
            task
        }
        ref.push(post)

    }
    const createToBasic = () => {
        const ref = firebase.database().ref('basic')
        const basic = {
            title,
            date,
            author,
            discription,
            task
        }
        ref.push(basic)

    }
    const createToSystem = () => {
        const ref = firebase.database().ref('system')
        const system = {
            title,
            date,
            author,
            discription,
            task
        }
        ref.push(system)

    }
    const createToWeb = () => {
        const ref = firebase.database().ref('web')
        const web = {
            title,
            date,
            author,
            discription,
            task
        }
        ref.push(web)

    }

    const postToDb = () => {
        let value = cat
        if (value === 'home') {
            createToHome()
        }
        else if (value === 'basic') {
            createToBasic()
        }
        else if (value === 'system') {
            createToSystem()
        }
        else if (value === 'web') {
            createToWeb()
        }
    }

    return (
        <div className="p-5">
            <input type="text" className="form-control" placeholder="title" onChange={handleTitleChange} /> <br />
            <input type="date" className="form-control" placeholder="date" onChange={handleDateChange} /> <br />
            <input type="text" className="form-control" placeholder="author" onChange={handleAuthorChange} />
            <input type="text" className="form-control" placeholder="category" onChange={handleCatChange} /> <br />
            <div class="form-floating">
                <textarea class="form-control" placeholder="discription" id="floatingTextarea" onChange={handleDiscChange}></textarea>
                <label for="floatingTextarea"></label>
            </div>
            <div class="form-floating">
                <textarea class="form-control" placeholder="task" id="floatingTextarea" onChange={handleTaskChange}></textarea>
                <label for="floatingTextarea"></label>
            </div>
            <button className="btn btn-primary" onClick={postToDb}>Click</button>
        </div>
    )
}

export default Create
