import InstructorSidebar from "./InstructorSidebar";
import {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
const BaseUrl = 'http://127.0.0.1:8000/api/'

function ShowAssignment() {
    const  instructorId = localStorage.getItem('instructorId')
    const [assignment, setAssignment] = useState([])
    const { student_id } = useParams()
    const Swal = require('sweetalert2')
//     const handleDelete = (chapter_id) =>{
//         Swal.fire({
//             title: 'Delete Chapter',
//             text: 'Are you Sure you want to delete the chapter',
//             icon: 'info',
//             confirmButtonText: 'Continue',
//             showCancelButton: true
// }).then((result)=>{
//     if(result.isConfirmed){
//         Swal.fire('success', "Chapter Deleted Successfully")
//         try{
//             axios.delete(BaseUrl + `chapter-data/${chapter_id}`).then((res)=>{
//                 console.log(res)
//                 try{
//                     axios.get(BaseUrl + `course-chapters/${course_id}` ).then((res)=>{
//                     setChapterCount(res.data.length)
//                     setChapters(res.data)
//             })
//         }catch (err){
//             console.log(err)
//         }
//             });
//         }catch (err){
//                         Swal.fire('error', "Chapter has not been Deleted")

//         }

//     }else {
//             Swal.fire('error',"Data has not been deleted ")
//     }
//         })
//     }

    useEffect(()=>{
                try{
            axios.get(BaseUrl + `student-assignment/${student_id}/${instructorId}` ).then((res)=>{  
              setAssignment(res.data)
            
            })
        }catch (err){
            console.log(err)
        }
    },[])
  return (
      <div className='container mt-4'>
            <div className='row'>
                <aside className='col-md-3'>
                    <InstructorSidebar/>
                </aside>
                <section className='col-md-9'>
                    <div className='card'>
                        <h5 className='card-header'> Total Assignments ({assignment.length}) <Link to={`/add-assignment/${student_id}`} className="btn btn-primary float-end">Add Assignment</Link></h5>
                        <div className='card-body'>
                            <table className='table table-bordered'>
                                <thead>
                                <tr>
                                    <th>Title</th>
                                    <th>Detail</th>
                                    <th>Action</th>
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    assignment.map((assignment, index)=>{
                                        return(
                                            <tr key={index} value={assignment.id}>
                                                <td className='mt-3 malin-items-center'>{assignment.title}</td>
                                        
                                                <td width='35%'className='mt-3'>{assignment.detail}</td>
                                                <td className="text-center">
                                                    <button className="btn btn-primary mt-2  ">Delete</button>
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

export default ShowAssignment;