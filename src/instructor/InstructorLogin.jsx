import {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const BaseUrl = 'http://127.0.0.1:8000/api/teacher-login/'

function InstructorLogin() {
    const  nav = useNavigate()
    const [instructorLoginData, setInstructorLoginData] = useState({
        'email': '',
        'password': '',
    })

    const instructorLoginStatus = localStorage.getItem('intructorLoginStatus')
    if(instructorLoginStatus === 'true'){
       nav('/instructor-dashboard')
    }

    const handleChange = (e) => {
        setInstructorLoginData({
            ...instructorLoginData,
            [e.target.name]: e.target.value
        })
    }

    const instructorLogin = (e) => {
        e.preventDefault()
        const instructorLoginFormData = new FormData();

        instructorLoginFormData.append("email", instructorLoginData.email)
        instructorLoginFormData.append("password", instructorLoginData.password)

        try {
            axios.post(BaseUrl, instructorLoginFormData).then((response) => {
                setInstructorLoginData(
                    {
                        'email': '',
                        'password': '',

                    }
                )
                if(response.data.bool === true){
                    localStorage.clear()
                    localStorage.setItem("intructorLoginStatus", 'true')
                    localStorage.setItem("instructorId", response.data.id)
                    localStorage.setItem("instructorFullName",response.data.full_name )
                    localStorage.setItem("instructorEmail", response.data.email)
                }
            })

        } catch (err) {
            console.log(err)
        }
    }

    return (

        <div className='container mt-4'>
            <div className='row'>
                <div className='col-6 offset-3'>
                    <div className='card'>
                        <div className='card-header'>
                            <h5 className='text-center'>Instructor Login</h5>
                            <div className='card-body'>
                                <form>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                                        <input type="email" onChange={handleChange} className="form-control"
                                               name='email' id="exampleInputEmail1" value={instructorLoginData.email}/>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                        <input type="password" onChange={handleChange} name='password'
                                               className="form-control" id="exampleInputPassword1"
                                               value={instructorLoginData.password}/>
                                    </div>
                                    <div className="mb-3 form-check">
                                        <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                                        <label className="form-check-label" htmlFor="exampleCheck1">Remember Me
                                            out</label>
                                    </div>
                                    <button type="submit" onClick={instructorLogin} className="btn btn-primary">Login
                                    </button>
                                </form>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default InstructorLogin