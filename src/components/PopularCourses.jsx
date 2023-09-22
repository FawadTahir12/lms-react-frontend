import {Link} from "react-router-dom";

function PopularCourses() {
  return (

        <div className='container mt-3'>
            <h3 className='pb-1 mb-4'>Popular Courses</h3>
            <div className='row'>
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

export default PopularCourses;