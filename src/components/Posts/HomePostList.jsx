import React, { useEffect, useState } from 'react'
import firebase from '../../firebase'
import Post from '../Post'


function HomePostList() {
    const [list, setList] = useState()

    useEffect(() => {
        const ref = firebase.database().ref('post')
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
            <div className="bg mt-1">
                <div className="container">
                    <h1 className="text-center bgt p-5"><span style={{ color: '#fff' }}> Welcome To</span> <span style={{ color: 'rgb(0 255 155)' }}> Tech Talk</span></h1>
                </div>
            </div>
            <div className="bgColor">
                <div className="container">
                    <div className="row pt-3">{list ? list.map((post, index) => <div className="col-md-6">{<Post post={post} key={index} />}</div>) : 'Loading...'}</div>
                </div>
            </div>
        </div>
    )
}

export default HomePostList
