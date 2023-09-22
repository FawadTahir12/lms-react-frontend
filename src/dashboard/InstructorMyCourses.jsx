import {Link} from "react-router-dom";
import InstructorSidebar from "./InstructorSidebar";
import {useEffect, useState} from "react";
import axios from "axios";
import Swal from "sweetalert2";


const BaseUrl = 'http://127.0.0.1:8000/api/'

function InstructorMyCourses() {
    const  instructorId = localStorage.getItem('instructorId')
    const [instructorCourse, setInstructorCourse] = useState([])

    const handleDelete = (course_id) =>{
        Swal.fire({
            title: 'Delete Chapter',
            text: 'Are you Sure you want to delete the Course',
            icon: 'info',
            confirmButtonText: 'Continue',
            showCancelButton: true
}).then((result)=>{
    if(result.isConfirmed){
        Swal.fire('success', "CourseDeleted Successfully")
        try{
            axios.delete(BaseUrl + `course-detail/${course_id}`).then((res)=>{
                console.log(res)
                try{
                    axios.get(BaseUrl + `instructor-courses/${instructorId}` ).then((res)=>{

                    setInstructorCourse(res.data)
            })
        }catch (err){
            console.log(err)
        }
            });
        }catch (err){
                        Swal.fire('error', "Course has not been Deleted")

        }

    }else {
            Swal.fire('error',"Data has not been deleted ")
    }
        })
    }

    useEffect(() => {
        const instructorId = localStorage.getItem('instructorId')
        try {
            axios.get(BaseUrl + `instructor-courses/${instructorId}`).then((res) => {
                setInstructorCourse(res.data)
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
                        <h5 className='card-header'>My Courses</h5>
                        <div className='card-body'>
                            <table className='table table-bordered'>
                                <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Image</th>
                                    <th>Total Enrolled</th>
                                    <th>Rating</th>      
                                    <th>Action</th>
                                </tr>
                                </thead>
                                <tbody>

                                {
                                    instructorCourse.map((course, index) => {
                                        return (
                                            <tr key={course.id}>
                                                <td className='mt-3 malin-items-center'><Link to={`/all-chapters/${course.id}`}>{course.title}</Link> <Link   className=' float-end' to={`/edit-course/${course.id}`}><i
                                                    className="fa-solid fa-pen-to-square" style={{color: "#07f400fa"}}></i></Link></td>
                                                <td className='text-center'><img src={course.course_image}  className="rounded" width='60px' alt={course.title}/></td>
                                                <td className='mt-3'><Link to={`/enroll-students/${course.id}`}>{course.total_enrolled_student}</Link></td>
                                                <td className='mt-3'>{course.avg_course_rating}/5</td>
                                                <td>
                                                    <span>
                                                        <button onClick={()=>{handleDelete(course.id)}} className='btn btn-danger mt-1 mb-1'>
                                                            Delete
                                                        </button>
                                                            <Link to={`/add-chapter/${course.id}`} className='mx-2 mt-1 mb-1'>
                                                           Add Chapter
                                                        </Link>
                                                    </span>
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

export default InstructorMyCourses