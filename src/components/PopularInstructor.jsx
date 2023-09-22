import {Link} from "react-router-dom";
import {useEffect , useState} from "react";
import axios from "axios";

const BASE_URL = 'http://127.0.0.1:8000/api'
function PopularInstructor() {
    const [instructors, setInstructors] = useState([])
    useEffect(()=>{
        axios.get(BASE_URL +'/teacher/').then((response)=>{
            setInstructors(response.data)
        });
    }, []);
  return (

        <div className='container mt-3'>
            <h3 className='pb-1 mb-4'>Best Instructors</h3>
            <div className='row'>
                {
                    instructors.map((instructor)=>{
                        return(
                            <div className='col-md-3 mb-4'  key={instructor.id}>
                    <div className="card" >
                        <Link to={`/detail/${instructor.id}`}><img src="logo512.png" className="card-img-top" alt="..."/></Link>
                        <div className="card-body">
                            <h5 className="card-title"><Link to='/detail/1'>{instructor.full_name}</Link></h5>

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
                <div className='col-md-3 mb-4'>
                    <div className="card">
                        <Link to='/detail/1'><img src="logo512.png" className="card-img-top" alt="..."/></Link>
                        <div className="card-body">
                            <h5 className="card-title"><Link to='/detail/1'>Card title</Link></h5>

                        </div>
                        <div className='card-footer'>
                            <div className='title'>
                                <span>Rating: 4.5/5</span>
                                <span className='float-end'>Views: 78904</span>
                            </div>
                        </div>
                    </div>
                </div>
                 <div className='col-md-3 mb-4'>
                    <div className="card">
                        <Link to='/detail/1'><img src="logo512.png" className="card-img-top" alt="..."/></Link>
                        <div className="card-body">
                            <h5 className="card-title"><Link to='/detail/1'>Card title</Link></h5>

                        </div>
                        <div className='card-footer'>
                            <div className='title'>
                                <span>Rating: 4.5/5</span>
                                <span className='float-end'>Views: 78904</span>
                            </div>
                        </div>
                    </div>
                </div>
                 <div className='col-md-3 mb-4'>
                    <div className="card">
                        <Link to='/detail/1'><img src="logo512.png" className="card-img-top" alt="..."/></Link>
                        <div className="card-body">
                            <h5 className="card-title"><Link to='/detail/1'>Card title</Link></h5>

                        </div>
                        <div className='card-footer'>
                            <div className='title'>
                                <span>Rating: 4.5/5</span>
                                <span className='float-end'>Views: 78904</span>
                            </div>
                        </div>
                    </div>
                </div>
                 <div className='col-md-3 mb-4'>
                    <div className="card">
                        <Link to='/detail/1'><img src="logo512.png" className="card-img-top" alt="..."/></Link>
                        <div className="card-body">
                            <h5 className="card-title"><Link to='/detail/1'>Card title</Link></h5>

                        </div>
                        <div className='card-footer'>
                            <div className='title'>
                                <span>Rating: 4.5/5</span>
                                <span className='float-end'>Views: 78904</span>
                            </div>
                        </div>
                    </div>
                </div>
                 <div className='col-md-3 mb-4'>
                    <div className="card">
                        <Link to='/detail/1'><img src="logo512.png" className="card-img-top" alt="..."/></Link>
                        <div className="card-body">
                            <h5 className="card-title"><Link to='/detail/1'>Card title</Link></h5>

                        </div>
                        <div className='card-footer'>
                            <div className='title'>
                                <span>Rating: 4.5/5</span>
                                <span className='float-end'>Views: 78904</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-3 mb-4'>
                    <div className="card">
                        <a href="#"><img src="logo512.png" className="card-img-top" alt="..."/></a>
                        <div className="card-body">
                            <h5 className="card-title"><a href='#'>Card title</a></h5>

                        </div>
                        <div className='card-footer'>
                            <div className='title'>
                                <span>Rating: 4.5/5</span>
                                <span className='float-end'>Views: 78904</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-3 mb-4'>
                    <div className="card">
                        <a href="#"><img src="logo512.png" className="card-img-top" alt="..."/></a>
                        <div className="card-body">
                            <h5 className="card-title"><a href='#'>Card title</a></h5>

                        </div>
                        <div className='card-footer'>
                            <div className='title'>
                                <span>Rating: 4.5/5</span>
                                <span className='float-end'>Views: 78904</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-3 mb-4'>
                    <div className="card">
                        <a href="#"><img src="logo512.png" className="card-img-top" alt="..."/></a>
                        <div className="card-body">
                            <h5 className="card-title"><a href='#'>Card title</a></h5>

                        </div>
                        <div className='card-footer'>
                            <div className='title'>
                                <span>Rating: 4.5/5</span>
                                <span className='float-end'>Views: 78904</span>
                            </div>
                        </div>
                    </div>
                </div>
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

export default PopularInstructor;