import React, { useEffect, useState } from 'react'
import firebase from '../../firebase'
import Post from '../Post'
import bg from '../../iamges/bg.png'


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
            <h1 className="text-center p-3">Welcome To Tech Talk</h1>
          <img src={bg} className="mainImg" alt="main" />
            <div className="row pt-3">{list ? list.map((post, index) => <div className="col-md-6">{<Post post={post} key={index} />}</div>) : 'Loading...'}</div>
        </div>
    )
}

export default HomePostList
