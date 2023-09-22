import InstructorSidebar from "./InstructorSidebar";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
const BaseUrl = 'http://127.0.0.1:8000/api/'

function AddAssignment() {
    const Swal = require('sweetalert2')
    const  instructorId = localStorage.getItem('instructorId')
    const { student_id } = useParams()
    const [assignment, setAssignment] = useState({
        'title': '',
        'detail': '',
    })
    const handleChange = (e) =>{
        setAssignment({
            ...assignment,
            [e.target.name]: e.target.value
        })
    }

    const submitAssignmentData = () => {
        const _formData = new FormData()
        _formData.append('title', assignment.title)
        _formData.append('detail', assignment.detail)
        _formData.append('teacher', instructorId)
        _formData.append('student', student_id)
        try{
            axios.post(BaseUrl + `student-assignment/${student_id}/${instructorId}`, _formData, {
            }).then((res)=>{
                if(res.status === 201){
                    Swal.fire({
                        title: 'Assignment has been Added',
                        toast: true,
                        timer:3000,
                        position: 'top-right',
                        icon: 'success',
                        showConfirmButton:false,
        });
               const  _notifData = new  FormData()
                _notifData.append('teacher',instructorId)
                _notifData.append('notif_for','student')
                _notifData.append('student',student_id)
                _notifData.append('notif_subject','assignment')
                
                axios.post(BaseUrl+ `save-notifications/`,_notifData,{
                    headers: {
                        'content-type':'multipart/form-data',
                    }
                }).then((res)=>{
                    console.log("Notification Send");
                })

                    setAssignment({
                        'title': '',
                        'detail': '',
                    })

                }
            });
        }catch (err){
            console.log(err)
        }
    }
    useEffect(() => {
        // setInstructorId(localStorage.getItem('instructorId'))
    
        // try {
        //     axios.get(BaseUrl + 'categories-list/').then((response) => {
        //     })
    
        // } catch (err) {
        //     console.log(err)
        // }
    }, [assignment])
    return (

        <div className='container mt-4'>
            <div className='row'>
                <aside className='col-md-3'>
                    <InstructorSidebar/>
                </aside>
                <section className='col-md-9'>
                        <div className='card'>
                            <h5 className='card-header'>Add Assignment</h5>
                            <div className='card-body'>
                                <div className="mb-3 row">
                                    <label htmlFor="title" className="col-sm-2 col-form-label">Title</label>
                                    <div className="col-sm-10">
                                        <input type="text"  className="form-control" id="title" onChange={handleChange} name='title'
                                              value={assignment.title} />
                                    </div>
                                </div>
                                <div className="mb-3 row">
                                    <label htmlFor="detail" className="col-sm-2 col-form-label">Detail</label>
                                    <div className="col-sm-10">
                                        <textarea  className="form-control" id="detail" rows='10' onChange={handleChange} name='detail' value={assignment.detail}
                                               />
                                    </div>
                                </div>
        
                                <hr/>
                                    <button className='btn btn-primary' type='submit' onClick={submitAssignmentData}>Submit</button>

                            </div>

                        </div>


                </section>
            </div>

        </div>
);
}

export default AddAssignment;