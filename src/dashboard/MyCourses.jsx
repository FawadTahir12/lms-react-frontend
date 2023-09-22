import {Link} from "react-router-dom";
import Sidebar from "./Sidebar";
import { useState,useEffect } from "react";
import axios from "axios";
const BaseUrl = 'http://127.0.0.1:8000/api/'

function MyCourses() {
    const studentId = localStorage.getItem('studentId');
    const [courseData, setCourseData] = useState([])


    useEffect(() => {

        try {
            axios.get(BaseUrl + `fetch-enrolled-courses/${studentId}`).then((response) => {
                setCourseData(response.data)
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
                        <h5 className='card-header'>My Courses</h5>
                        <div className='card-body'>
                            <table className='table table-bordered'>
                                <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Instructor</th>
                                    <th>Action</th>
                                </tr>
                                </thead>
                                {
                                    courseData.map((row)=>{
                                        return(

                                <tbody>
                                <td className='mt-3 malin-items-center'>{row.course.title}</td>
                                <td className='mt-3'><Link to={`/instructor-details/${row.course.teacher.id}`}>{row.course.teacher.full_name}</Link></td>
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

export default MyCourses