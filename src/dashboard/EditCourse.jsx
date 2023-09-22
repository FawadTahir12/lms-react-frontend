import InstructorSidebar from "./InstructorSidebar";
import {useEffect, useState} from "react";
import axios from "axios";
import {useParams} from "react-router-dom";


const BaseUrl = 'http://127.0.0.1:8000/api/'

function EditCourse() {
    const Swal = require('sweetalert2')
    const {course_id} = useParams()
    const [categories, setCategories] = useState([])
    const [instructorId, setInstructorId] = useState('')
    const [courseData, setCourseData] = useState({
        'category': '',
        'title': '',
        'description': '',
        'course_image': '',
        'pre_course_image': '',
        'technologies': ''
    })
    const handleChange = (e) => {
        setCourseData({
            ...courseData,
            [e.target.name]: e.target.value
        })
    }

    const handleFileChange = (e) => {
        setCourseData({
            ...courseData,
            [e.target.name]: e.target.files[0]
        })
    }

    const submitCourseData = () => {
        const _formData = new FormData()
        _formData.append('category', courseData.category)
        _formData.append('teacher', instructorId)
        _formData.append('title', courseData.title)
        _formData.append('description', courseData.description)
        if (courseData.course_image !== '') {
            _formData.append('course_image', courseData.course_image, courseData.course_image.name)
        }
        _formData.append('technologies', courseData.technologies)

        try {
            axios.put(BaseUrl + `course-detail/${course_id}`, _formData, {
                headers: {
                    'content-type': 'multipart/form-data'
                }
            }).then((res) => {
                if (res.status === 200) {
                    Swal.fire({
                        title: 'Update Course Successfully',
                        toast: true,
                        timer: 3000,
                        position: 'top-right',
                        icon: 'success',
                        showConfirmButton: false,
                    })
                }
                setCourseData({
                    'category': '',
                    'title': '',
                    'description': '',
                    'course_image': '',
                    'technologies': ''
                })
            })
        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        setInstructorId(localStorage.getItem('instructorId'))
        try {
            axios.get(BaseUrl + 'categories-list/').then((response) => {
                setCategories(response.data)
            })

        } catch (err) {
            console.log(err)
        }

        try {
            axios.get(BaseUrl + `course-detail/${course_id}`).then((response) => {
                console.log(response.data.course_image.name)
                setCourseData({
                    'category': response.data.category,
                    'title': response.data.title,
                    'description': response.data.description,
                    'course_image': '',
                    'pre_course_image': response.data.course_image,
                    'technologies': response.data.technologies
                })
            })

        } catch (err) {
            console.log(err)
        }

    }, [])


    return (

        <div className='container mt-4'>
            <div className='row'>
                <aside className='col-md-3'>
                    <InstructorSidebar/>
                </aside>
                <section className='col-md-9'>
                    <div className='card'>
                        <h5 className='card-header'>Add Course</h5>
                        <div className='card-body'>
                            <div className="mb-3 row">

                                <label className="col-sm-2 col-form-label">Category</label>
                                <div className="col-sm-10">
                                    <select className='form-control' name='category'
                                            value={courseData.category}
                                            onChange={handleChange}>
                                        <option>Select</option>
                                        {
                                            categories.map((category, index) => {
                                                return (
                                                    <option key={index} value={category.id}>{category.title}</option>
                                                )


                                            })
                                        }
                                    </select>
                                </div>
                            </div>
                            <div className="mb-3 row">

                                <label htmlFor="title" className="col-sm-2 col-form-label">Title</label>
                                <div className="col-sm-10">

                                    <input type="text" className="form-control" id="title" onChange={handleChange}
                                           value={courseData.title} name='title'/>
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label htmlFor="description" className="col-sm-2 col-form-label">Description</label>
                                <div className="col-sm-10">
                                    <textarea className="form-control" id="description" onChange={handleChange}
                                              name='description' value={courseData.description}/>
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label htmlFor="staticFile" className="col-sm-2 col-form-label"
                                       onChange={handleFileChange}>Feature Image</label>
                                <div className="col-sm-10">
                                    <input type="file" className="form-control" id="staticFile"
                                           name='course_image' onChange={handleFileChange}
                                    />

                                    <img src={courseData.pre_course_image} className='mt-2' width='250'/>
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label htmlFor="technologies" className="col-sm-2 col-form-label">Technologies</label>
                                <div className="col-sm-10">
                                    <textarea className="form-control" id="technologies" name='technologies'
                                              onChange={handleChange} value={courseData.technologies}/>
                                </div>
                            </div>
                            <hr/>
                            <button className='btn btn-primary' type="button" onClick={submitCourseData}>Submit</button>

                        </div>

                    </div>


                </section>
            </div>

        </div>
    );
}

export default EditCourse;



