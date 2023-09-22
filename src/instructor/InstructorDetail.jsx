import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
const BaseUrl = 'http://127.0.0.1:8000/api/'
function InstructorDetail() {
    const { teacher_id } = useParams();
    const [courseData, setCourseData] = useState([])
    const [skills, setSkills] = useState([])
    const [instructorData, setInstructorData] = useState([])
        useEffect(() => {
        try {
            axios.get(BaseUrl + `teacher-detail/${teacher_id}`).then((res) => {
                setInstructorData(res.data)
                setCourseData(res.data.teacher_course)
                setSkills(res.data.skills.split(','))
            })

        } catch (err) {
            console.log(err)
        }
    }, [])
  return (

        <div className='container mt-3'>
            <div className='row'>
                <div className='col-lg-4'>
                    <img  className='card-img-top' src={instructorData.profile_photo} alt='Instructor_image'/>
                </div>
                <div className='col-lg-8'>
                    <h3>{instructorData.full_name}</h3>
                    <p>{instructorData.about}</p>
                    <p className='fw-bold'>Skills:&nbsp;
                    {
                        skills.map((skill)=>{
                            return(
                            <Link className='badge bg-warning mx-1' to={`/category/${skill}`}>{skill}</Link>
                            )
                        })
                    }
                    </p>
                    <p className='fw-bold'>Recent Course: <Link to='#'>Php</Link></p>
                    <p className='fw-bold'>Rating: 4/5</p>
                </div>
            </div>
            <div className="card">
                <div className="card-header">
                    <h5>Course List</h5>
                </div>

                <div className="list-group list-group-flush">
                    {
                        courseData.map((course) => {
                            return (

                                <Link  to={`/detail/${course.id}`}
                                      className='list-group-item list-group-item-action'>{course.title}</Link>
                            )
                        })
                    }
                </div>
            </div>
            <h3 className='mt-5 pb-1 mb-4'>Related Courses</h3>
            <div className='row'>
                <div className='col-md-3'>
                    <div className="card">
                        <a href="#"><img  className="card-img-top" alt="..."/></a>
                        <div className="card-body">
                            <h5 className="card-title"><a href='#'>Card title</a></h5>

                        </div>
                    </div>
                </div>
                <div className='col-md-3'>
                    <div className="card">
                        <a href="#"><img className="card-img-top" alt="..."/></a>
                        <div className="card-body">
                            <h5 className="card-title"><a href='#'>Card title</a></h5>

                        </div>
                    </div>
                </div>
                <div className='col-md-3'>
                    <div className="card">
                        <a href="#"><img  className="card-img-top" alt="..."/></a>
                        <div className="card-body">
                            <h5 className="card-title"><a href='#'>Card title</a></h5>

                        </div>
                    </div>
                </div>
            </div>


        </div>
  );
}

export default InstructorDetail;