import React from 'react'
import Fade from 'react-reveal/Fade'
import Zoom from 'react-reveal/Zoom'
import '../../App.css'
import '../../card2.css'
import bg from '../../iamges/bg.png'
import pic1 from '../../iamges/pr4.jpg'
import pic2 from '../../iamges/pr1.png'
import pic3 from '../../iamges/pr2.jpg'
import pic4 from '../../iamges/pr3.jpg'

function About() {
    return (
        <div style={{ background: '#262626' }}>
            <div className="container">
                <div className="aboutBg"><img src={bg} alt="" /></div>
                <div className="p-5" style={{ color: '#03a0f4' }}>
                    <Fade left>
                        <h1>About Us</h1>
                        <p>Tech Talk For Web Technologies</p>
                    </Fade>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <Zoom bottom>
                            <div className="card2">
                                <div className="layer"></div>
                                <div className="content2">
                                    <p>We discuss the very basics of Web technologies including daily life computing, Different Systems and their working process, some special Web technologies which are essential for web development and so on.</p>
                                    <div className="image">
                                        <img src={pic1} alt="" />
                                    </div>
                                    <div className="name">
                                        <h2>Techtalk Blog</h2>
                                    </div>
                                </div>
                            </div>
                        </Zoom>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <Zoom bottom>
                            <div className="card2">
                                <div className="layer"></div>
                                <div className="content2">
                                    <p>The learning and discussion process of this blog will be very easy as a general dude can understand everything he need to be able to explore those technologies more frequently and efficiently later in future.</p>
                                    <div className="image">
                                        <img src={pic2} alt="" />
                                    </div>
                                    <div className="name">
                                        <h2>Techtalk Blog</h2>
                                    </div>
                                </div>
                            </div>
                        </Zoom>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <Zoom bottom>
                            <div className="card2">
                                <div className="layer"></div>
                                <div className="content2">
                                    <p>So, as you heard, this isn’t a course or anything else like that but a path to build your basic on technology world and Clearance of various unknown factors.</p>
                                    <div className="image">
                                        <img src={pic3} alt="" />
                                    </div>
                                    <div className="name">
                                        <h2>Techtalk Blog</h2>
                                    </div>
                                </div>
                            </div>
                        </Zoom>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <Zoom bottom>
                            <div className="card2">
                                <div className="layer"></div>
                                <div className="content2">
                                    <p>To make a subject more understandable and effective to you, we use various examples that can be sometime irrelevant to you if that subject doesn’t make sense to you but as we told, we want to build your basic and show you the path where you can explore more and more advance topics and enter deep of every single subject. So do not panic and stay explored.</p>
                                    <div className="image">
                                        <img src={pic4} alt="" />
                                    </div>
                                    <div className="name">
                                        <h2>Techtalk Blog</h2>
                                    </div>
                                </div>
                            </div>
                        </Zoom>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
