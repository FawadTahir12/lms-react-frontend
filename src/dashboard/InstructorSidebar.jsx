import {Link} from "react-router-dom";

function InstructorSidebar() {
    return (

        <div className='card'>
            <div className='list-group list-group-flush'>
                <Link to='/instructor-dashboard' className='list-group-item list-group-item-action'>Dashboard</Link>
                <Link to='/instructor-mycourse' className='list-group-item list-group-item-action'>My Courses</Link>
                <Link to='/instructor-addcourse' className='list-group-item list-group-item-action'>Add Course</Link>
                <Link to='/instructor-users' className='list-group-item list-group-item-action'>My Users</Link>
                <Link to='/instructor-profile-setting' className='list-group-item list-group-item-action'>Profile Settings</Link>
                <Link to='/instructor-change-password' className='list-group-item list-group-item-action'>Change Password</Link>
                <Link to='/logout' className='list-group-item list-group-item-action text-danger'>Logout</Link>
            </div>
        </div>
    );
}

export default InstructorSidebar;