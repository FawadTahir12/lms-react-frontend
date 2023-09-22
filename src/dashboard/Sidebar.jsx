import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
const BaseUrl = 'http://127.0.0.1:8000/api/'

function Sidebar() {
    const [notifData, setNotifData] = useState([])
    const studentId = localStorage.getItem('studentId')

 useEffect(()=>{
        try{
    axios.get(BaseUrl + `fetch-all-notifications/${studentId}` ).then((res)=>{
      setNotifData(res.data)
    })
}catch (err){
    console.log(err)
}
},[])
    return (

        <div className='card'>
            <div className='list-group list-group-flush'>
                <Link to='/user-dashboard' className='list-group-item list-group-item-action'>Dashboard</Link>
                <Link to='/my-courses' className='list-group-item list-group-item-action'>My Courses</Link>
                <Link to='/favorite-courses' className='list-group-item list-group-item-action'>Favorite Courses</Link>
                <Link to='/recommended-courses' className='list-group-item list-group-item-action'>Recommended Courses</Link>
                <Link to='/assignments' className='list-group-item list-group-item-action'>Assignments<span className="float-end badge bg-danger mt-1">{notifData.length > 0 ? notifData.length: 0}</span></Link>
                <Link to='/profile-setting' className='list-group-item list-group-item-action'>Profile Settings</Link>
                <Link to='/change-password' className='list-group-item list-group-item-action'>Change Password</Link>
                <Link to='/logout' className='list-group-item list-group-item-action text-danger'>Logout</Link>
            </div>
        </div>
    );
}

export default Sidebar;