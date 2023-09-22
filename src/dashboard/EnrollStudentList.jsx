import {Link, useParams} from "react-router-dom";
import InstructorSidebar from "./InstructorSidebar";
import {useEffect, useState} from "react";
import axios from "axios";
import Swal from "sweetalert2";

const BaseUrl = 'http://127.0.0.1:8000/api/'

function EnrollStudentList() {
    const {course_id} = useParams()
    const  instructorId = localStorage.getItem('instructorId')
    const [enrollStudent, setEnrollStudent] = useState([])


    useEffect(() => {
        try {
            axios.get(BaseUrl + `total-enroll-students-per-course/${course_id}`).then((res) => {
                setEnrollStudent(res.data)
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
                        <h5 className='card-header'>Enrolled Student List</h5>
                        <div className='card-body'>
                            <table className='table table-bordered'>
                                <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Username</th>
                                    <th>Email</th>
                                    <th>Interests</th>
                                </tr>
                                </thead>
                                <tbody>

                                {
                                    enrollStudent.map((row, index) => {
                                        return (
                                            <tr key={row.id}>
                                                <td className='mt-3 malin-items-center'>{row.student.full_name}</td>
                                                <td className=''>{row.student.username}</td>
                                                <td className='mt-3'>{row.student.email}</td>
                                                <td>
                                                    {row.student.interests}
                                                </td>
                                            </tr>
                                        )
                                    })
                                }


                                </tbody>
                            </table>

                        </div>

                    </div>
                </section>
            </div>
        </div>
    );
}

export default EnrollStudentList