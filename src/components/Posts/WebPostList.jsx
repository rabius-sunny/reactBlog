import React, { useEffect, useState } from 'react'
import firebase from '../../firebase'
import Post from '../Post'

function WebPostList() {
    const [list, setList] = useState()

    useEffect(() => {
        const ref = firebase.database().ref('web')
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
            <h1 className="text-center">Welcome to Web</h1>
            <div className="row">{list ? list.map((post, index) => <div className="col-md-6">{<Post post={post} key={index} />}</div>) : ''}</div>
        </div>
    )
}

export default WebPostList
