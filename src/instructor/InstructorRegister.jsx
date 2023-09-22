import {useEffect, useState} from 'react';
import axios from "axios";

const BaseUrl = 'http://127.0.0.1:8000/api/teacher/'

function InstructorRegister() {
    const [instructorData, setInstructorData] = useState({
        'full_name': '',
        'email': '',
        'password': '',
        'skills': '',
        'mobile_no': '',
        'qualification': '',
        'status': ''
    })
    const instructorLoginStatus = localStorage.getItem('intructorLoginStatus')
    if (instructorLoginStatus === 'true') {
        window.location.href = '/instructor-dashboard';
    }
    const handleChange = (e) => {
        setInstructorData({
            ...instructorData,
            [e.target.name]: e.target.value
        })
    }

    const instructorRegistration = (e) => {
        e.preventDefault()
        const instructorFormData = new FormData();
        instructorFormData.append("full_name", instructorData.full_name)
        instructorFormData.append("email", instructorData.email)
        instructorFormData.append("password", instructorData.password)
        instructorFormData.append("skills", instructorData.skills)
        instructorFormData.append("mobile_no", instructorData.mobile_no)
        instructorFormData.append("qualification", instructorData.qualification)
        try {
            axios.post(BaseUrl, instructorFormData).then((response) => {
                setInstructorData(
                    {
                        'full_name': '',
                        'email': '',
                        'password': '',
                        'skills': '',
                        'mobile_no': '',
                        'qualification': '',
                        'status': 'success'
                    }
                )
            })

        } catch (err) {
            console.log(err)
            setInstructorData({'status': 'error'})
        }
    }
    useEffect(() => {
        document.title = 'Instructor Register';
    })
    return (

        <div className='container mt-4'>
            <div className='row'>
                <div className='col-6 offset-3'>
                    {instructorData.status === 'success' && <p className='text-success'> Thanks for Registration</p>}
                    {instructorData.status === 'error' && <p className='text-success'> Something Went Wrong</p>}

                    <div className='card'>
                        <div className='card-header'>
                            <h5 className='text-center'>Instructor Register</h5>
                            <div className='card-body'>
                                <form>
                                    <div className="mb-3">
                                        <label htmlFor="full_name" className="form-label">Full Name</label>
                                        <input onChange={handleChange} value={instructorData.full_name} type="email"
                                               className="form-control" id="full_name" name='full_name'/>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                                        <input onChange={handleChange} value={instructorData.email} type="email"
                                               className="form-control" id="exampleInputEmail1" name='email'/>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="password" className="form-label">Password</label>
                                        <input onChange={handleChange} value={instructorData.password} type="password"
                                               className="form-control" id="password" name='password'/>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="skills" className="form-label">Skills</label>
                                        <textarea onChange={handleChange} value={instructorData.skills}
                                                  className='form-control' name='skills'></textarea>
                                        <div id='skills' className='form-text'>Php, Python, Java etc..</div>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="mobile_no" className="form-label">Mobile No.</label>
                                        <input onChange={handleChange} value={instructorData.mobile_no} type="number"
                                               className="form-control" id="mobile_no" name='mobile_no'/>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="qualification" className="form-label">Qualification</label>
                                        <input onChange={handleChange} value={instructorData.qualification} type="text"
                                               className="form-control" id="qualification" name='qualification'/>
                                    </div>
                                    <div className='text-center'>
                                        <button type="submit" onClick={instructorRegistration}
                                                className="btn btn-primary">Register
                                        </button>
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

export default InstructorRegister