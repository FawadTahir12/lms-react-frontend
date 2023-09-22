import {useEffect, useState} from 'react';
import axios from "axios";
const BaseUrl = 'http://127.0.0.1:8000/api/'

function Register() {
    const [studentData, setStudentData] = useState({
        'full_name': '',
        'email': '',
        'password': '',
        'interests': '',
        'mobile_no': '',
        'username': '',
        'status': ''
    })

    const handleChange = (e) => {
        setStudentData({
            ...studentData,
            [e.target.name]: e.target.value
        })
    }
    const userRegisterForm = (e) => {
        e.preventDefault()
        const studentFormData = new FormData();
        studentFormData.append("full_name", studentData.full_name)
        studentFormData.append("email", studentData.email)
        studentFormData.append("password", studentData.password)
        studentFormData.append("username", studentData.username)
        studentFormData.append("interests", studentData.interests)
        studentFormData.append("mobile_no", studentData.mobile_no)

        try {
            axios.post(`${BaseUrl}student/`, studentFormData).then((response) => {
                setStudentData(
                    {
                        'full_name': '',
                        'email': '',
                        'password': '',
                        'username': '',
                        'mobile_no': '',
                        'interests': '',
                        'status':'success'
                    }
                )
            })

        } catch (err) {
            console.log(err)
            setStudentData({'status': 'error'})
        }
    }
  return (

    
         <div className='container mt-4'>
            <div className='row'>
                <div className='col-6 offset-3'>
                {studentData.status === 'success' && <p className='text-success'> Thanks for Registration</p>}
                    {studentData.status === 'error' && <p className='text-success'> Something Went Wrong</p>}
                    <div className='card'>
                        <div className='card-header'>
                            <h5 className='text-center'>User Register</h5>
                            <div className='card-body'>
                                <form>
                                    <div className="mb-3">
                                        <label htmlFor="full_name" className="form-label">Full Name</label>
                                        <input type="text" name='full_name' onChange={handleChange} value={studentData.full_name} className="form-control" id="full_name"/>

                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label">Email</label>
                                        <input type="email"  name='email'onChange={handleChange} value={studentData.email} className="form-control" id="email"/>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="username" className="form-label">Username</label>
                                        <input type="text" name='username' onChange={handleChange} value={studentData.username} className="form-control" id="username"/>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="password" className="form-label">Password</label>
                                        <input type="password" name='password' onChange={handleChange} value={studentData.password} className="form-control" id="password"/>
                                    </div>
                                      <div className="mb-3">
                                        <label htmlFor="interests" className="form-label">Interest</label>
                                        <textarea className='form-control'name='interests' onChange={handleChange} value={studentData.interests} id='interests'></textarea>
                                          <div id='interests' className='form-text'>Php, Python, Java etc..</div>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="mobile_no" className="form-label">Mobile No.</label>
                                        <input type="number" name='mobile_no' onChange={handleChange} value={studentData.mobile_no} className="form-control" id="mobile_no"/>
                                    </div>
                                    <div className='text-center'>
                                    <button type="submit" onClick={userRegisterForm} className="btn btn-primary" >Register</button>
                                         </div>
                                </form>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>
  );
}
export default Register