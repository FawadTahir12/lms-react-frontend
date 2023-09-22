import Sidebar from "./Sidebar";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
const BaseUrl = 'http://127.0.0.1:8000/api/'

function ProfileSetting() {
    const Swal = require('sweetalert2')

    const studentId = localStorage.getItem('studentId')
    const [studentData, setStudentData] =useState({
        'full_name':'',
        'email':'',
        'username':'',
        'profile_photo':'',
        'interests':'',
        'mobile_no':'',
        'pre_profile_photo':'',

    })

    const handleChange = (e) =>{
        setStudentData({
            ...studentData,
            [e.target.name]: e.target.value
        })
    }

    const handleFileChange = (e) =>{
        setStudentData({
            ...studentData,
            [e.target.name]: e.target.files[0]
           })
    }

    const submitProfileData = () => {
        const _formData = new FormData()
        _formData.append('full_name', studentData.full_name)
        _formData.append('email', studentData.email)
        _formData.append('interests', studentData.interests)
        if(studentData.profile_photo !== ''){
        _formData.append('profile_photo', studentData.profile_photo, studentData.profile_photo.name)
        }
        _formData.append('username', studentData.username)
        _formData.append('mobile_no', studentData.mobile_no)
        try{
            axios.put(BaseUrl + `student/${studentId}`, _formData, {
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
            axios.get(BaseUrl + `student/${studentId}`).then((response) => {
                setStudentData({
                    'full_name': response.data.full_name,
                    'email': response.data.email,
                    'interests': response.data.interests,
                    'prev_profile_photo': response.data.profile_photo,
                    'username': response.data.username,
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
                    <Sidebar/>
                </aside>
                <section className='col-md-9'>
                        <div className='card'>
                            <h5 className='card-header'> Profile Setting</h5>
                            <div className='card-body'>
                                <div className="mb-3 row">
                                    <label htmlFor="fullname" className="col-sm-2 col-form-label">Fullname</label>
                                    <div className="col-sm-10">
                                        <input type="text" name="full_name" value={studentData.full_name} onChange={handleChange}  className="form-control" id="fullname"
                                               />
                                    </div>
                                </div>
                                <div className="mb-3 row">
                                    <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Email</label>
                                    <div className="col-sm-10">
                                        <input type="text" name="email" value={studentData.email} onChange={handleChange} className="form-control" id="staticEmail"
                                               />
                                    </div>
                                </div>
                                <div className="mb-3 row">
                                    <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Username</label>
                                    <div className="col-sm-10">
                                        <input type="text" name="username" value={studentData.username} onChange={handleChange} className="form-control" id="staticEmail"
                                               />
                                    </div>
                                </div>
                                <div className="mb-3 row">
                                    <label htmlFor="staticFile" className="col-sm-2 col-form-label">Profile Photo</label>
                                    <div className="col-sm-10">
                                        <input type="file" name="profile_photo"  onChange={handleFileChange} className="form-control" id="staticFile"
                                               />
                                    </div>
                                </div>
                                <div className="mb-3 row">
                                    <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Mobile No</label>
                                    <div className="col-sm-10">
                                        <input type="text" name="mobile_no" value={studentData.mobile_no} onChange={handleChange} className="form-control" id="staticEmail"
                                               />
                                    </div>
                                </div>
                                <div className="mb-3 row">
                                    <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Interests</label>
                                    <div className="col-sm-10">
                                        <input type="text" name="interests" value={studentData.interests} onChange={handleChange} className="form-control" id="inputPassword"/>
                                    </div>
                                </div>
                                <hr/>
                                    <button className='btn btn-primary' onClick={submitProfileData}>Update</button>

                            </div>

                        </div>


                </section>
            </div>

        </div>
);
}

export default ProfileSetting;