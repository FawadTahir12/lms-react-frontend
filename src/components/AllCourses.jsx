import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
const BaseUrl = 'http://127.0.0.1:8000/api/'

function AllCourses() {
    const [allcourses, setAllcourses] = useState([])
        useEffect(() => {
        try {
            axios.get(BaseUrl + `course/`).then((res) => {
                setAllcourses(res.data)
            })

        } catch (err) {
            console.log(err)
        }
    }, [])
  return (

        <div className='container mt-3'>
            <h3 className='pb-1 mb-4'>Latest Courses</h3>
            <div className='row'>
                {
                    allcourses.map((course)=>{
                        return(
                <div className='col-md-3 mb-4'>
                    <div className="card">
                        <Link to={`/detail/${course.id}`}><img src={`http://127.0.0.1:8000/${course.course_image}`} style={{height:'270px'}} className="card-img-top" alt={course.title}/></Link>
                        <div className="card-body">
                            <h5 className="card-title"><Link to={`/detail/${course.id}`}>{course.title}</Link></h5>

                        </div>
                        <div className='card-footer'>
                            <div className='title'>
                                <span>Rating: 4.5/5</span>
                                <span className='float-end'>Views: 78904</span>
                            </div>
                        </div>
                    </div>
                </div>

                        )
                    })
                }

            </div>
        {/*    Pagination starts*/}
            <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-center mt-3">
                    <li className="page-item"><Link className="page-link" href="#">Previous</Link></li>
                    <li className="page-item"><Link className="page-link" href="#">1</Link></li>
                    <li className="page-item"><Link className="page-link" href="#">2</Link></li>
                    <li className="page-item"><Link className="page-link" href="#">3</Link></li>
                    <li className="page-item"><Link className="page-link" href="#">Next</Link></li>
                </ul>
            </nav>
        </div>
  );
}

export default AllCourses;