import InstructorSidebar from "./InstructorSidebar";
import {useEffect, useState} from "react";
import axios from "axios";


const BaseUrl = 'http://127.0.0.1:8000/api/'

function InstructorAddCourse() {
    const [categories, setCategories] = useState([])
    const [instructorId, setInstructorId] = useState('')
    const [courseData, setCourseData] = useState({
        'category': '',
        'title': '',
        'description': '',
        'course_image': '',
        'technologies': ''
    })
    const handleChange = (e) =>{
        setCourseData({
            ...courseData,
            [e.target.name]: e.target.value
        })
    }

    const handleFileChange = (e) =>{
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
        _formData.append('course_image', courseData.course_image, courseData.course_image.name)
        _formData.append('technologies', courseData.technologies)

        try{
            axios.post(BaseUrl + 'course-data/', _formData, {
                headers:{
                    'content-type': 'multipart/form-data'
                }
            }).then((res)=>{
                setCourseData({
        'category': '',
        'title': '',
        'description': '',
        'course_image': '',
        'technologies': ''
    })
            })
        }catch (err){
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

                                     <input type="text" className="form-control" id="title" onChange={handleChange} value={courseData.title} name='title'/>
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label htmlFor="description" className="col-sm-2 col-form-label">Description</label>
                                <div className="col-sm-10">
                                        <textarea className="form-control" id="description" onChange={handleChange} name='description' value={courseData.description}/>
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label htmlFor="staticFile" className="col-sm-2 col-form-label" onChange={handleFileChange}>Feature Image</label>
                                <div className="col-sm-10">
                                    <input type="file" className="form-control" id="staticFile"
                                           name='course_image' onChange={handleFileChange}
                                    />
                                    </div>
                            </div>
                                <div className="mb-3 row">
                                <label htmlFor="technologies" className="col-sm-2 col-form-label" >Technologies</label>
                                <div className="col-sm-10">
                                    <textarea className="form-control" id="technologies" name='technologies' onChange={handleChange} value={courseData.technologies}/>
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

export default InstructorAddCourse;



