import InstructorSidebar from "./InstructorSidebar";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
const BaseUrl = 'http://127.0.0.1:8000/api/'

function AddChapter() {
    const { course_id } = useParams()
    const [instructorId, setInstructorId] = useState('')
    const [chapterData, setChapterData] = useState({
        'title': '',
        'description': '',
        'video': '',
        'remarks': ''
    })
    const handleChange = (e) =>{
        setChapterData({
            ...chapterData,
            [e.target.name]: e.target.value
        })
    }

    const handleFileChange = (e) =>{
         setChapterData({
            ...chapterData,
            [e.target.name]: e.target.files[0]
        })
    }

    const submitChapterData = () => {
        const _formData = new FormData()
        _formData.append('course', course_id)
        _formData.append('title', chapterData.title)
        _formData.append('description', chapterData.description)
        _formData.append('video', chapterData.video, chapterData.video.name)
        _formData.append('remarks', chapterData.remarks)

        try{
            axios.post(BaseUrl + `course-chapters/${course_id}`, _formData, {
                headers:{
                    'content-type': 'multipart/form-data'
                }
            }).then((res)=>{
                setChapterData({
        'title': '',
        'description': '',
        'video': '',
        'remarks': ''
    })
            })
        }catch (err){
            console.log(err)
        }
    }
    // useEffect(() => {
    //     setInstructorId(localStorage.getItem('instructorId'))
    //
    //     try {
    //         axios.get(BaseUrl + 'categories-list/').then((response) => {
    //         })
    //
    //     } catch (err) {
    //         console.log(err)
    //     }
    // }, [])
    return (

        <div className='container mt-4'>
            <div className='row'>
                <aside className='col-md-3'>
                    <InstructorSidebar/>
                </aside>
                <section className='col-md-9'>
                        <div className='card'>
                            <h5 className='card-header'>Add Chapter</h5>
                            <div className='card-body'>
                                <div className="mb-3 row">
                                    <label htmlFor="title" className="col-sm-2 col-form-label">Title</label>
                                    <div className="col-sm-10">
                                        <input type="text"  className="form-control" id="title" onChange={handleChange} name='title'
                                               />
                                    </div>
                                </div>
                                <div className="mb-3 row">
                                    <label htmlFor="description" className="col-sm-2 col-form-label">Description</label>
                                    <div className="col-sm-10">
                                        <textarea  className="form-control" id="description" onChange={handleChange} name='description'
                                               />
                                    </div>
                                </div>
                                <div className="mb-3 row">
                                    <label htmlFor="staticFile" className="col-sm-2 col-form-label">Feature Video</label>
                                    <div className="col-sm-10">
                                        <input type="file"  className="form-control" id="video" onChange={handleFileChange} name='video'
                                               />
                                    </div>
                                </div>
                                <div className="mb-3 row">
                                    <label htmlFor="technologies" className="col-sm-2 col-form-label">Remarks</label>
                                    <div className="col-sm-10">
                                        <textarea  className="form-control" id="remarks" onChange={handleChange} name='remarks'/>
                                    </div>
                                </div>
                                <hr/>
                                    <button className='btn btn-primary' type='button' onClick={submitChapterData}>Submit</button>

                            </div>

                        </div>


                </section>
            </div>

        </div>
);
}

export default AddChapter;