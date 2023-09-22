import InstructorSidebar from "./InstructorSidebar";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
const BaseUrl = 'http://127.0.0.1:8000/api/'

function EditChapters() {
    const Swal = require('sweetalert2')
    const { chapter_id} = useParams()
    const [chapterData, setChapterData] = useState({
        'course':'',
        'title': '',
        'description': '',
        'prev_video': '',
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
        _formData.append('course', chapterData.course)
        _formData.append('title', chapterData.title)
        _formData.append('description', chapterData.description)
        if(chapterData.video !== ''){
        _formData.append('video', chapterData.video, chapterData.video.name)
        }

        _formData.append('remarks', chapterData.remarks)

        try{
            axios.put(BaseUrl + `chapter-data/${chapter_id}`, _formData, {
                headers:{
                    'content-type': 'multipart/form-data'
                }
            }).then((res)=>{
                if (res.status === 200){
                    Swal.fire({
                        title: 'Update Chapter Successfully',
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
    useEffect(() => {

        try {
            axios.get(BaseUrl + `chapter-data/${chapter_id}`).then((response) => {
                console.log(response.data.video)
                setChapterData({
                    'course': response.data.course,
                    'title': response.data.title,
                    'description': response.data.description,
                    'prev_video': response.data.video,
                    'remarks': response.data.remarks,
                    'video': ''
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
                            <h5 className='card-header'>Edit Chapter</h5>
                            <div className='card-body'>
                                <div className="mb-3 row">
                                    <label htmlFor="title" className="col-sm-2 col-form-label">Title</label>
                                    <div className="col-sm-10">
                                        <input type="text" value={chapterData.title} className="form-control" id="title" onChange={handleChange} name='title'
                                               />
                                    </div>
                                </div>
                                <div className="mb-3 row">
                                    <label htmlFor="description" className="col-sm-2 col-form-label">Description</label>
                                    <div className="col-sm-10">
                                        <textarea  className="form-control" id="description" value={chapterData.description} onChange={handleChange} name='description'
                                               />
                                    </div>
                                </div>
                                <div className="mb-3 row">
                                    <label htmlFor="staticFile" className="col-sm-2 col-form-label">Feature Video</label>
                                    <div className="col-sm-10">
                                        <input type="file"  className="form-control" id="video" onChange={handleFileChange} name='video'
                                               />
                                        {
                                            chapterData.prev_video &&
                                        <video controls width='100%' className='mt-2'>
                                                      <source src={chapterData.prev_video} type="video/mp4"/>
                                                          <source src={chapterData.prev_video} type="video/ogg"/>
                                                    Your browser does not support the video tag.
                                        </video>
                                        }
                                    </div>
                                </div>
                                <div className="mb-3 row">
                                    <label htmlFor="technologies" className="col-sm-2 col-form-label">Remarks</label>
                                    <div className="col-sm-10">
                                        <textarea  className="form-control" id="remarks" value={chapterData.remarks} onChange={handleChange} name='remarks'/>
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

export default EditChapters;