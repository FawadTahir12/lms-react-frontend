import InstructorSidebar from "./InstructorSidebar";
import {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
const BaseUrl = 'http://127.0.0.1:8000/api/'

function CourseChapters() {
    const [chapters, setChapters] = useState([])
    const [chapterCount, setChapterCount] = useState([])
    const { course_id } = useParams()
    const Swal = require('sweetalert2')
    const handleDelete = (chapter_id) =>{
        Swal.fire({
            title: 'Delete Chapter',
            text: 'Are you Sure you want to delete the chapter',
            icon: 'info',
            confirmButtonText: 'Continue',
            showCancelButton: true
}).then((result)=>{
    if(result.isConfirmed){
        Swal.fire('success', "Chapter Deleted Successfully")
        try{
            axios.delete(BaseUrl + `chapter-data/${chapter_id}`).then((res)=>{
                console.log(res)
                try{
                    axios.get(BaseUrl + `course-chapters/${course_id}` ).then((res)=>{
                    setChapterCount(res.data.length)
                    setChapters(res.data)
            })
        }catch (err){
            console.log(err)
        }
            });
        }catch (err){
                        Swal.fire('error', "Chapter has not been Deleted")

        }

    }else {
            Swal.fire('error',"Data has not been deleted ")
    }
        })
    }

    useEffect(()=>{
                try{
            axios.get(BaseUrl + `course-chapters/${course_id}` ).then((res)=>{
                setChapterCount(res.data.length)
              setChapters(res.data)
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
                        <h5 className='card-header'>Course Chapters ({chapterCount})</h5>
                        <div className='card-body'>
                            <table className='table table-bordered'>
                                <thead>
                                <tr>
                                    <th>Chapter Name</th>
                                    <th>Video</th>
                                    <th>Remarks</th>
                                    <th>Action</th>
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    chapters.map((chapter, index)=>{
                                        return(
                                            <tr key={index} value={chapter.id}>
                                                <td className='mt-3 malin-items-center'>{chapter.title}</td>
                                                <td className='text-center'>
                                                    <video controls width='250'>
                                                      <source src={chapter.video} type="video/mp4"/>
                                                          <source src={chapter.video} type="video/ogg"/>
                                                    Your browser does not support the video tag.
                                                    </video>
                                                </td>
                                                <td className='mt-3'>{chapter.remarks}</td>
                                                <td>
                                                    <span>
                                                        <button   onClick={()=>{handleDelete(chapter.id)}} className='btn btn-danger btn-sm mt-1 mb-1'>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16"
                                                                 height="16" fill="currentColor" className="bi bi-trash"
                                                                 viewBox="0 0 16 16">
                                                                <path
                                                                    d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"/>
                                                                <path
                                                                    d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"/>
                                                            </svg>
                                                        </button>
                                                        <Link to={`/edit-chapter/${chapter.id}`} className='btn btn-info  btn-sm mx-2 mt-1 mb-1'>
                                                           <svg xmlns="http://www.w3.org/2000/svg" width="16"
                                                                height="16" fill="currentColor" className="bi bi-pencil"
                                                                viewBox="0 0 16 16">
                                                               <path
                                                                   d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
                                                           </svg>
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

export default CourseChapters;