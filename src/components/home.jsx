import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";

const BaseUrl = 'http://127.0.0.1:8000/api/'

function Home() {
    const [allcourses, setAllcourses] = useState([])
    useEffect(() => {
        document.title = 'CourseLine | Home Page';
        try {
            axios.get(BaseUrl + `course/?result=4`).then((res) => {
                setAllcourses(res.data)
            })

        } catch (err) {
            console.log(err)
        }
    }, [])
    return (
        <div className='container mt-4'>
            {/*Latest Corses*/}
            <h3 className='pb-1 mb-4'>Latest Courses <Link to='/all-courses' className='float-end'>See All</Link></h3>
            <div className='row'>
                {
                    allcourses.map((course) => {
                        return (
                            <div className='col-md-3 mb-4'>
                                <div className="card">
                                    <Link to={`/detail/${course.id}`}><img
                                        src={`http://127.0.0.1:8000/${course.course_image}`} style={{height: '270px'}}
                                        className="card-img-top" alt={course.title}/></Link>
                                    <div className="card-body">
                                        <h5 className="card-title"><Link
                                            to={`/detail/${course.id}`}>{course.title}</Link></h5>

                                    </div>
                                    <div className='card-footer'>
                                        <div className='title'>
                                            <span>Rating: 4.5/5</span>
                                            <span className='float-end'>Views: 78904</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        )
                    })
                }

            </div>
            {/*    End of latest courses*/}
            {/*    Popular courses */}
            <h3 className='mt-5 pb-1 mb-4'>Popular Courses <Link to='popular-courses' className='float-end'>See
                All</Link></h3>
            <div className='row'>
                <div className='col-md-3'>
                    <div className="card">
                        <a href="#"><img src="logo512.png" className="card-img-top" alt="..."/></a>
                        <div className="card-body">
                            <h5 className="card-title"><a href='#'>Card title</a></h5>

                        </div>
                        <div className='card-footer'>
                            <div className='title'>
                                <span>Rating: 4.5/5</span>
                                <span className='float-end'>Views: 78904</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-3'>
                    <div className="card">
                        <a href="#"><img src="logo512.png" className="card-img-top" alt="..."/></a>
                        <div className="card-body">
                            <h5 className="card-title"><a href='#'>Card title</a></h5>

                        </div>
                        <div className='card-footer'>
                            <div className='title'>
                                <span>Rating: 4.5/5</span>
                                <span className='float-end'>Views: 78904</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-3'>
                    <div className="card">
                        <a href="#"><img src="logo512.png" className="card-img-top" alt="..."/></a>
                        <div className="card-body">
                            <h5 className="card-title"><a href='#'>Card title</a></h5>

                        </div>
                        <div className='card-footer'>
                            <div className='title'>
                                <span>Rating: 4.5/5</span>
                                <span className='float-end'>Views: 78904</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-3'>
                    <div className="card">
                        <a href="#"><img src="logo512.png" className="card-img-top" alt="..."/></a>
                        <div className="card-body">
                            <h5 className="card-title"><a href='#'>Card title</a></h5>

                        </div>
                        <div className='card-footer'>
                            <div className='title'>
                                <span>Rating: 4.5/5</span>
                                <span className='float-end'>Views: 78904</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*    End of popular courses */}
            {/* Start of featured teachers */}
            <h3 className='mt-5 pb-1 mb-4'>Featured Teachers <Link to='popular-instructor' className='float-end'>See
                All</Link></h3>
            <div className='row'>
                <div className='col-md-3'>
                    <div className="card">
                        <Link to='/instructor-details/1'><img src="logo512.png" className="card-img-top"
                                                              alt="..."/></Link>
                        <div className="card-body">
                            <h5 className="card-title"><Link to='/instructor-details/1'>Card title</Link></h5>

                        </div>
                    </div>
                </div>
                <div className='col-md-3'>
                    <div className="card">
                        <Link to='/instructor-details/1'><img src="logo512.png" className="card-img-top"
                                                              alt="..."/></Link>
                        <div className="card-body">
                            <h5 className="card-title"><Link to='/instructor-details/1'>Card title</Link></h5>

                        </div>
                    </div>
                </div>
                <div className='col-md-3'>
                    <div className="card">
                        <Link to='/instructor-details/1'><img src="logo512.png" className="card-img-top"
                                                              alt="..."/></Link>
                        <div className="card-body">
                            <h5 className="card-title"><Link to='/instructor-details/1'>Card title</Link></h5>

                        </div>
                    </div>
                </div>
                <div className='col-md-3'>
                    <div className="card">
                        <Link to='/instructor-details/1'><img src="logo512.png" className="card-img-top"
                                                              alt="..."/></Link>
                        <div className="card-body">
                            <h5 className="card-title"><a href='#'>Card title</a></h5>

                        </div>
                    </div>
                </div>
            </div>
            {/* End of featured teachers */}
            <h3 className='mt-5 pb-1 mb-4'>Student Testimonials</h3>
            <div id="carouselExample" className="carousel slide bg-dark text-white py-5">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <figure className="text-center">
                            <blockquote className="blockquote">
                                <p>A well-known quote, contained in a blockquote element.</p>
                            </blockquote>
                            <figcaption className="blockquote-footer">
                                Someone famous in <cite title="Source Title">Source Title</cite>
                            </figcaption>
                        </figure>
                    </div>
                    <div className="carousel-item">
                        <figure className="text-center">
                            <blockquote className="blockquote">
                                <p>A well-known quote, contained in a blockquote element.</p>
                            </blockquote>
                            <figcaption className="blockquote-footer">
                                Someone famous in <cite title="Source Title">Source Title</cite>
                            </figcaption>
                        </figure>
                    </div>
                    <div className="carousel-item">
                        <figure className="text-center">
                            <blockquote className="blockquote">
                                <p>A well-known quote, contained in a blockquote element.</p>
                            </blockquote>
                            <figcaption className="blockquote-footer">
                                Someone famous in <cite title="Source Title">Source Title</cite>
                            </figcaption>
                        </figure>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample"
                        data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample"
                        data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

        </div>
    );
}

export default Home;