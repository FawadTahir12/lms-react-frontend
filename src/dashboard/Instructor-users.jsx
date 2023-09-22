import {Link} from "react-router-dom";
import InstructorSidebar from "./InstructorSidebar";
import {useEffect, useState} from "react";
import axios from "axios";
const BaseUrl = 'http://127.0.0.1:8000/api/'

function InstructorUsers() {
    const  instructorId = localStorage.getItem('instructorId')
    const [studentEnrollData, setStudentEnrollData] = useState([])

    useEffect(() => {
        try {
            axios.get(BaseUrl + `fetch-enrolled-students/${instructorId}`).then((res) => {
                setStudentEnrollData(res.data)
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
                        <h5 className='card-header'>Users List</h5>
                        <div className='card-body'>
                            <table className='table table-bordered'>
                                <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Enrolled Course</th>
                                    <th>Assignment</th>
                                    <th>Action</th>
                                </tr>
                                </thead>
                                    {
                                        studentEnrollData.map((row)=>{
                                            return(
                                                <tbody>
                                <td className='mt-3 malin-items-center'>{row.student.full_name}</td>
                                <td className='mt-3'>{row.course.title}</td>
                                <td>
                                    <Link to={`/show-assignment/${row.student.id}`} className="btn btn-sm btn-warning m-2 bg-warning text-white fw-bold">Assignments</Link>
                                    <Link to={`/add-assignment/${row.student.id}`} className="btn btn-sm btn-success m-2 bg-success text-white fw-bold" >Add Assignment</Link>
                                </td>
                                <td>
                                    <span>
                                    <button className='btn btn-primary mt-1 mb-1'>
                                        Delete
                                    </button>
                                        </span>
                                </td>


                                </tbody>

                                            )
                                        })
                                    }
                            </table>

                        </div>

                    </div>
                </section>
            </div>
        </div>
    );
}

export default InstructorUsers;