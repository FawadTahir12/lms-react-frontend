import InstructorSidebar from "./InstructorSidebar";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
const BaseUrl = 'http://127.0.0.1:8000/api/'

function InstructorChangePassword() {
    const instructorId = localStorage.getItem('instructorId')
    const Swal = require('sweetalert2')
    const [password, setPassword] = useState({
       'password':''
    })

    const handleChange = (e) =>{
        setPassword({
            ...password,
            [e.target.name]: e.target.value
        })
    }

    const submitPassword = () => {
        const _formData = new FormData()
        _formData.append('password', password.password)
        try{
            axios.post(BaseUrl + `instructor-change-password/${instructorId}`, _formData, {
            }).then((res)=>{
                if (res.status === 200){
                    Swal.fire({
                        title: 'Password update Successfully',
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

    return (

        <div className='container mt-4'>
            <div className='row'>
                <aside className='col-md-3'>
                    <InstructorSidebar/>
                </aside>
                <section className='col-md-9'>
                        <div className='card'>
                            <h5 className='card-header'> Change Password</h5>
                            <div className='card-body'>
                                <div className="mb-3 row">
                                    <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
                                    <div className="col-sm-10">
                                        <input type="password" className="form-control" id="inputPassword" onChange={handleChange} value={password.password} name="password"/>
                                    </div>
                                </div>
                                <hr/>
                                    <button className='btn btn-primary' onClick={submitPassword}>Update</button>

                            </div>

                        </div>


                </section>
            </div>

        </div>
);
}

export default InstructorChangePassword;