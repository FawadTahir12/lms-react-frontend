import { PlayCircleOutlined, PlayCircleTwoTone} from "@ant-design/icons";
import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
const BaseUrl = 'http://127.0.0.1:8000/api/'

function CourseDetail() {
    const Swal = require('sweetalert2')
    const { id } = useParams();
    const studentLoginStatus = localStorage.getItem('studentLoginStatus');
    const [courseData, setCourseData] = useState([])
    const [instructorData, setInstructorData] = useState([])
    const [chapterData, setChapterData] = useState([])
    const [relatedCourse, setRelatedCourses] = useState([])
    const [technologies, setTechnologies] = useState([])
    const [enrollStatus, setEnrollStatus] = useState(false)
    const [ratingData, setRatingData] = useState({
        'rating': '',
        'reviews': ''
    })
    const [ratingStatus, setRatingStatus] = useState(false)
    const [favoriteStatus, setFavoriteStatus] = useState(false)
    const studentId = localStorage.getItem('studentId')
    const enrollCourse = () =>{
        const _enrollData = new FormData();
        _enrollData.append('course', id);
        _enrollData.append('student',studentId)
        try {
            axios.post(BaseUrl + `student-enroll/`, _enrollData).then((res) => {

              if (res.status === 201){
                Swal.fire({
                    title: 'Course enroll Successfully',
                    toast: true,
                    timer:3000,
                    position: 'top-right',
                    icon: 'success',
                    showConfirmButton:false,
})
            setEnrollStatus(true)
            }
            })

        } catch (err) {
            console.log(err)
        }
    }


    const handleChange = (e) =>{
        setRatingData({
            ...ratingData,
            [e.target.name]: e.target.value
        })
    }

    const submitRating = () => {
        const _formData = new FormData()
        _formData.append('course', id)
        _formData.append('student', studentId)
        _formData.append('reviews', ratingData.reviews)
        _formData.append('rating', ratingData.rating)

        try{
            axios.post(BaseUrl + `course-rating/`, _formData, 
            ).then((res)=>{
                if (res.status === 200 || res.status === 201){
                    Swal.fire({
                        title: 'Thanks for your feedback',
                        toast: true,
                        timer:3000,
                        position: 'top-right',
                        icon: 'success',
                        showConfirmButton:false,
})
                }
            })
        }catch (err){
            console.log(err)
        }
    }

    const addToFavourite = () => {
        const _formData = new FormData()
        _formData.append('course', id)
        _formData.append('student', studentId)
        _formData.append('status', true)
        try{
            axios.post(BaseUrl + `add-to-favorite-course/`, _formData, 
            ).then((res)=>{
                if (res.status === 200 || res.status === 201){
                    Swal.fire({
                        title: 'Course Added to Favorite',
                        toast: true,
                        timer:3000,
                        position: 'top-right',
                        icon: 'success',
                        showConfirmButton:false,
})
                }
                setFavoriteStatus(true)
            })
        }catch (err){
            console.log(err)
        }
    }

const removeFavoriteCourse = () => {
    try {
        axios.get(BaseUrl + `remove-favorite-course/${id}/${studentId}`).then((res) => {
            if(res.data.RemoveStatus)
            Swal.fire({
                title: 'Remove From Favorite Course',
                toast: true,
                timer:3000,
                position: 'top-right',
                icon: 'success',
                showConfirmButton:false,
})
        setFavoriteStatus(false)
        })

    } catch (err) {
        console.log(err)
    }
}
    useEffect(() => {
        try {
            axios.get(BaseUrl + `course-detail/${id}`).then((res) => {
                setCourseData(res.data)
                setChapterData(res.data.course_chapter)
                setInstructorData(res.data.teacher)
                setRelatedCourses(JSON.parse(res.data.related_courses))
                setTechnologies(res.data.tech_list)
            })

        } catch (err) {
            console.log(err)
        }
        if(studentId !== null){

            try {
                axios.get(BaseUrl + `student-enroll-status/${id}/${studentId}`).then((res) => {
                    setEnrollStatus(res.data.enrollStatus)
                
                })
    
            } catch (err) {
                console.log(err)
            }

            try {
                axios.get(BaseUrl + `fetch-rating-status/${id}/${studentId}`).then((res) => {
                    setRatingStatus(res.data.ratingStatus)
                })
    
            } catch (err) {
                console.log(err)
            }

            try {
                axios.get(BaseUrl + `fetch-favourite-status/${id}/${studentId}`).then((res) => {
                    setFavoriteStatus(res.data.favouriteStatus)
                
                })
    
            } catch (err) {
                console.log(err)
            }

        }
    }, [id, enrollStatus, favoriteStatus])
    return (
        <div className='container mt-3'>
            <div className='row'>
                <div className='col-lg-4'>
                    <img src={courseData.course_image} className='card-img-top' alt='Image'/>
                </div>
                <div className='col-lg-8'>
                    <h3>{courseData.title}</h3>
                    <p>{courseData.description}</p>
                    <p className='fw-bold'>Course By: <Link to={`/instructor-details/${instructorData.id}`}>{instructorData.full_name}</Link></p>
                    <p className='fw-bold'>Technologies:&nbsp;
                        {
                            technologies.map((technology)=>{
                                return(
                                    <Link to={`/category/${technology.trim()}`} className='badge bg-warning mx-1' style={{ textDecoration:'none'}}>{technology}</Link>
                                )
                            })
                        }</p>
                    <p className='fw-bold'>Course Duration: 3 hours 35 mins</p>
                    <p className='fw-bold'>Enrolled Student: {courseData.total_enrolled_student}</p>
                    <p className='fw-bold'>Rating: {courseData.avg_course_rating}/5
                    {studentLoginStatus === 'true' && enrollStatus &&
                    <>
                    {
                        !ratingStatus ?
                        <button className='fw-bold btn btn-warning btn-sm ms-2' data-bs-toggle="modal" data-bs-target="#ratingModal">Give your FeedBack!</button>:
                        <p className="text-warning mt-2">Already rate this course</p>
                    }
            
                    <div class="modal fade" id="ratingModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered">
                                <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="exampleModalLabel">Rating for {courseData.title} course</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <form>
                                    <div class="mb-3">
                                            <label for="exampleInputEmail1" class="form-label">Give your Feedback!</label>
                                            <select onChange={handleChange} className="form-control" name="rating">
                                                        <option value="none">Select</option>
                                                        <option value="1">1</option>
                                                        <option value="2">2</option>
                                                        <option value="3">3</option>
                                                        <option value="4">4</option>
                                                        <option value="5">5</option>
                                            </select>
                                        </div>
                                        <div class="mb-3">
                                            <textarea onChange={handleChange} className="form-control" name="reviews" rows='5'></textarea>
                                            
                                        </div>
                                        <button type="button" onClick={submitRating} class="btn btn-primary">Submit</button>
                                    </form>
                                </div>
                                </div>
                            </div>
                            </div>
                  
                    </>
                    
                    }
                    </p>

                    {
                        studentLoginStatus !== 'true' ?
                        <p className='fw-bold'><Link type="button" to={'/user-login'} className="btn btn-success">Enroll Now</Link></p>:
                        enrollStatus ? <p className='fw-bold text-warning'>You are  enrolled in this course</p>:
                        <p className='fw-bold'><button type="button" className="btn btn-success" onClick={enrollCourse} >Enroll Now</button></p>

                    }
                    {
                        studentLoginStatus === 'true'  && !favoriteStatus && 
                    <p>
                        <span className="btn btn-outline-danger" title="Add to your favourite Course List" onClick={addToFavourite}>
                            <i className="fa fa-solid fa-heart"></i>
                        </span>
                    </p>

                        
                        // <p><Link to='/login-user'>Login to add into favourite Courses</Link></p>
                    }
                    {
                        studentLoginStatus === 'true' && favoriteStatus &&
                    <p>
                        <span className="btn btn-danger" title="Remove Course From your Favorite List" onClick={removeFavoriteCourse}>
                            <i className="fa fa-solid fa-heart"></i>
                        </span>
                    </p>
                    }

                </div>
            </div>
            <div className="card">
                <div className="card-header">
                    <h5>Course Videos</h5>
                </div>
                <ul className="list-group list-group-flush">
                    {
                        chapterData.map((chapter)=>{
                            return(
                    <li className="list-group-item">{chapter.title}
                        <span className='float-end'>
                            <span className='me-1'>1:30 mins </span>
                             <button className='btn btn-lg' data-bs-toggle="modal" data-bs-target="#exampleModal">
                      <PlayCircleTwoTone />
                    </button>
                        </span>
                        {/*Video Modal*/}
                        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
                             aria-hidden="true">
                            <div className="modal-dialog modal-xl modal-dialog-centered">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h1 className="modal-title fs-5" id="exampleModalLabel">{chapter.title}</h1>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal"
                                                aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">

                                        <div className="ratio ratio-16x9">
                                           <video width="400" controls>
                                              <source src={chapter.video} type="video/mp4"/>
                                              <source src={chapter.video} type="video/ogg"/>
                                              Your browser does not support HTML video.
                                        </video>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                       {/* End vidio model*/}

                       </li>

                            )
                        })
                    }

                </ul>
            </div>


            <h3 className='mt-5 pb-1 mb-4'>Related Courses</h3>
            <div className='row'>
                {
                    relatedCourse.map((r_course)=>{
                        return(
                <div className='col-md-3'>
                    <div className="card">
                        <Link to={`/detail/${r_course.pk}`}><img src={`http://127.0.0.1:8000/media/${r_course.fields.course_image}`} className="card-img-top" alt="..."/></Link>
                        <div className="card-body">
                            <h5 className="card-title"><Link to={`/detail/${r_course.pk}`}>{r_course.fields.title}</Link></h5>
                        </div>
                    </div>
                </div>
                            )

                    })
                }
            </div>


        </div>

    );
}

export default CourseDetail;