import {Link, useNavigate} from "react-router-dom";

function Header() {
    const nav = useNavigate()
    const logout = () =>{
        localStorage.clear('intructorLoginStatus')
         nav('/instructor-login')
    }
    const instructorLoginStatus = localStorage.getItem('intructorLoginStatus')
    const studentLoginStatus = localStorage.getItem('studentLoginStatus')
  return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <Link className="navbar-brand" to='/'>CourseLine</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarNavDropdown">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <Link  to='all-courses' className="nav-link" href="#">Courses</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Instructors</a>
                        </li>
                          <li className="nav-item">
                            <Link className="nav-link" to='/about'>About</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                               aria-expanded="false">
                              User
                            </a>
                            <ul className="dropdown-menu">
                                {
                                    studentLoginStatus !== 'true' ?
                                    <>
                                    <li><Link className="dropdown-item" to='/user-login'>Login</Link></li>
                                    <li><Link className="dropdown-item" to='/user-register'>Register</Link></li>       
                                    </>:
                                    <>
                                <li><Link className="dropdown-item" to='user-dashboard'>Dashboard</Link></li>
                                <li><button className="dropdown-item" onClick={logout}>Logout</button></li>
                                    </>
                                }
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                               aria-expanded="false">
                              Instructor
                            </a>
                            <ul className="dropdown-menu">
                                {
                                    instructorLoginStatus !== 'true' &&
                                    <>
                                    <li><Link className="dropdown-item" to='/instructor-login'>Login</Link></li>
                                    <li><Link className="dropdown-item" to='/instructor-register'>Register</Link></li>
                                    </>
                                }
                                    <li><Link className="dropdown-item" to='instructor-dashboard'>Dashboard</Link></li>
                                <li><button className="dropdown-item" onClick={logout}>Logout</button></li>
                            </ul>
                        </li>
                        {/* <li className="nav-item">*/}
                        {/*    <Link className="nav-link" to='/user-login'>Login</Link>*/}
                        {/*</li>*/}
                        {/* <li className="nav-item">*/}
                        {/*    <Link className="nav-link" to='/user-register'>Register</Link>*/}
                        {/*</li>*/}

                    </ul>
                </div>
            </div>
        </nav>
  );
}

export default Header;