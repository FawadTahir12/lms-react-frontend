import InstructorSidebar from "./InstructorSidebar";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
const BaseUrl = 'http://127.0.0.1:8000/api/'

function InstructorProfileSetting() {
    const Swal = require('sweetalert2')

    const instructorId = localStorage.getItem('instructorId')
    const [instructorData, setInstructorData] =useState({
        'full_name':'',
        'email':'',
        'profile_photo':'',
        'about':'',
        'skills':'',
        'qualification':'',
        'mobile_no':'',
        'pre_profile_photo':'',

    })

    const handleChange = (e) =>{
        setInstructorData({
            ...instructorData,
            [e.target.name]: e.target.value
        })
    }

    const handleFileChange = (e) =>{
        setInstructorData({
            ...instructorData,
            [e.target.name]: e.target.files[0]
           })
    }

    const submitProfileData = () => {
        const _formData = new FormData()
        _formData.append('full_name', instructorData.full_name)
        _formData.append('email', instructorData.email)
        _formData.append('about', instructorData.about)
        if(instructorData.profile_photo !== ''){
        _formData.append('profile_photo', instructorData.profile_photo, instructorData.profile_photo.name)
        }
        _formData.append('skills', instructorData.skills)
        _formData.append('qualification', instructorData.qualification)
        _formData.append('mobile_no', instructorData.mobile_no)
        try{
            axios.put(BaseUrl + `teacher/${instructorId}`, _formData, {
                headers:{
                    'content-type': 'multipart/form-data'
                }
            }).then((res)=>{
                if (res.status === 200){
                    Swal.fire({
                        title: 'Update Profile Successfully',
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
            axios.get(BaseUrl + `teacher/${instructorId}`).then((response) => {
                setInstructorData({
                    'full_name': response.data.full_name,
                    'email': response.data.email,
                    'about': response.data.about,
                    'prev_profile_photo': response.data.profile_photo,
                    'skills': response.data.skills,
                    'qualification': response.data.qualification,
                    'mobile_no':response.data.mobile_no,
                    'profile_photo': '',
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
                            <h5 className='card-header'> Profile Setting</h5>
                            <div className='card-body'>
                                <div className="mb-3 row">
                                    <label htmlFor="fullname" className="col-sm-2 col-form-label">Fullname</label>
                                    <div className="col-sm-10">
                                        <input type="text" name="full_name" className="form-control" onChange={handleChange} id="fullname"
                                               value={instructorData.full_name}/>
                                    </div>
                                </div>
                                <div className="mb-3 row">
                                    <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Email</label>
                                    <div className="col-sm-10">
                                        <input type="text" name="email" className="form-control" id="staticEmail" onChange={handleChange}
                                              value={instructorData.email} />
                                    </div>
                                </div>
                                <div className="mb-3 row">
                                    <label htmlFor="staticFile" className="col-sm-2 col-form-label">Profile Photo</label>
                                    <div className="col-sm-10">
                                        <input type="file"  name="profile_photo" className="form-control" id="staticFile" onChange={handleFileChange}
                                               />
                                    </div>
                                </div>
                                <div className="mb-3 row">
                                    <label htmlFor="mobile_no" className="col-sm-2 col-form-label">Mobile No.</label>
                                    <div className="col-sm-10">
                                        <input type="number" name="mobile_no" className="form-control" onChange={handleChange} id="mobile_no"
                                               value={instructorData.mobile_no}/>
                                    </div>
                                </div>
                                <div className="mb-3 row">
                                    <label htmlFor="about" className="col-sm-2 col-form-label">About</label>
                                    <div className="col-sm-10">
                                        <textarea type="text" rows='6' className="form-control" id="about" value={instructorData.about} onChange={handleChange}/>
                                    </div>
                                </div>
                                <div className="mb-3 row">
                                    <label htmlFor="about" className="col-sm-2 col-form-label">Skills</label>
                                    <div className="col-sm-10">
                                        <textarea type="text" value={instructorData.skills} name="skills" className="form-control" id="skills" onChange={handleChange}/>
                                    </div>
                                </div>
                                <div className="mb-3 row">
                                    <label htmlFor="about" className="col-sm-2 col-form-label">Qualification</label>
                                    <div className="col-sm-10">
                                        <textarea type="text"  value={instructorData.qualification} name="qualification" className="form-control" id="qualification" onChange={handleChange}/>
                                    </div>
                                </div>
                                <hr/>
                                    <button onClick={submitProfileData} className='btn btn-primary'>Update</button>

                            </div>

                        </div>


                </section>
            </div>

        </div>
);
}

export default InstructorProfileSetting;