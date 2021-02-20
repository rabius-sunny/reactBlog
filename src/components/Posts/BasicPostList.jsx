import React, { useEffect, useState } from 'react'
import firebase from '../../firebase'
import Flash from 'react-reveal/Flash'
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
            <div className="bg mt-1">
                <div className="container">
                    <Flash><h1 className="text-center bgt p-5"><span style={{ color: '#fff' }}> Welcome To</span> <span style={{ color: 'rgb(0 255 155)' }}> Basic</span></h1></Flash>
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

export default BasicPostList
