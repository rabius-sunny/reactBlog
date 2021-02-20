import Fade from 'react-reveal/Fade'
import Zoom from 'react-reveal/Zoom'
import Flash from 'react-reveal/Flash'
import '../../card1.css'

function HomePostList() {

    return (
        <div>
            <div className="bg mt-1">
                <div className="container">
                    <Flash>
                        <h1 className="text-center bgt p-5"><span style={{ color: '#fff' }}> Welcome To</span> <span style={{ color: 'rgb(0 255 155)' }}> Tech Talk</span></h1>
                    </Flash>
                </div>
            </div>
            <section className="cardPost">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <Fade left>
                                <div className="card">
                                    <div className="imgBx">
                                        <img src="https://mrhcrafts.files.wordpress.com/2021/02/fileandextension.png" alt="" />
                                    </div>
                                    <div className="content">
                                        <h2>File & Extension</h2>
                                        <p>ফাইল হলো একটি ক্ষুদ্রতম একক। কয়েকটি ফাইল এক জায়গায় রেখে একটি ফোল্ডার তৈরি যায়। একটি ফাইলের নাম যেকোন কিছু হতে পারে কিন্তু প্রতিটি ফাইলের একটি...</p>
                                        <button>Read more...</button>
                                    </div>
                                </div>
                            </Fade>
                        </div>
                        <div className="col-md-4">
                            <Zoom bottom>
                                <div className="card">
                                    <div className="imgBx">
                                        <img src="https://mrhcrafts.files.wordpress.com/2020/12/computerpr.png" alt="" />
                                    </div>
                                    <div className="content">
                                        <h2>Computer Programming</h2>
                                        <p>কম্পিউটার 0 এবং 1 ছাড়া কিছু বোঝে না। 0 এবং 1 হলো ইলেক্ট্রিসিটি প্রবাহের মাত্রা। একে বলে বাইনারি লেঙ্গুয়েজ বা মেশিন লেঙ্গুয়েজ। কম্পিউটারকে...</p>
                                        <button>Read more...</button>
                                    </div>
                                </div>
                            </Zoom>
                        </div>
                        <div className="col-md-4">
                            <Fade right>
                                <div className="card">
                                    <div className="imgBx">
                                        <img src="https://mrhcrafts.files.wordpress.com/2020/12/paidvsopenvsfree.png" alt="" />
                                    </div>
                                    <div className="content">
                                        <h2>Application & Software</h2>
                                        <p>সফটওয়্যার হচ্ছে বিশেষ ধরনের ফাইল। এটি এমন কিছু প্রোগ্রামের সমষ্টি যা হার্ডওয়্যারের সাথে যোগাযোগ স্থাপন করে এবং মেশিনকে চালায়। এটি...</p>
                                        <button>Read more...</button>
                                    </div>
                                </div>
                            </Fade>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default HomePostList
