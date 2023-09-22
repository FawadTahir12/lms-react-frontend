import {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
const BaseUrl = 'http://127.0.0.1:8000/api/student-login/'

function Login() {
    const nav = useNavigate()
    const [studentLoginData, setStudentLoginData] = useState({
        'email': '',
        'password': '',
    })
    const [errMsg, setErrMsg] = useState('')

    const handleChange = (e) => {
        setStudentLoginData({
            ...studentLoginData,
            [e.target.name]: e.target.value
        })
    }

    const studentLogin = (e) => {
        e.preventDefault()
        const studentLoginFormData = new FormData();

        studentLoginFormData.append("email", studentLoginData.email)
        studentLoginFormData.append("password", studentLoginData.password)

        try {
            axios.post(BaseUrl, studentLoginFormData).then((response) => {
                setStudentLoginData(
                    {
                        'email': '',
                        'password': '',

                    }
                )
                if(response.data.bool === true){
                    localStorage.clear()
                    localStorage.setItem("studentLoginStatus", 'true')
                    localStorage.setItem("studentId", response.data.id)
                    localStorage.setItem("studentFullName",response.data.full_name )
                    localStorage.setItem("studentEmail", response.data.email)
                    nav('/user-dashboard')
                }
                else{
                    setErrMsg('Invalid Email or password provided')
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
                            <h5 className='text-center'>User Login</h5>
                            <div className='card-body'>
                                <p className="text-danger">{errMsg}</p>
                                <form>
                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label">Email</label>
                                        <input type="email" name="email" value={studentLoginData.email} onChange={handleChange} className="form-control" id="email"/>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="password" className="form-label">Password</label>
                                        <input type="password" className="form-control" id="password" name="password" value={studentLoginData.password} onChange={handleChange}/>
                                    </div>
                                    <div className="mb-3 form-check">
                                        <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                                        <label className="form-check-label" htmlFor="exampleCheck1">Remember Me
                                            out</label>
                                    </div>
                                    <button type="submit" onClick={studentLogin} className="btn btn-primary">Login</button>
                                </form>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default Login