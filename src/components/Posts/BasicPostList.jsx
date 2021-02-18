import React, { useEffect, useState } from 'react'
import firebase from '../../firebase'
import Post from '../Post'

function BasicPostList() {
    const [list, setList] = useState()

    useEffect(() => {
        const ref = firebase.database().ref('basic')
        ref.on('value', snapshot => {
            const posts = snapshot.val()
            const list = []
            for (let id in posts) {
                list.push(posts[id])
            }
            setList(list)
        })
    }, [])

    return (
        <div>
            <h1 className="text-center">Welcome To Basic</h1>
            
            <div className="row pt-3">{list ? list.map((post, index) => <div className="col-md-6">{<Post post={post} key={index} />}</div>) : ''}</div>
        </div>
    )
}

export default BasicPostList