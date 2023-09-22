import {Link} from "react-router-dom";
import Sidebar from "./Sidebar";
import { useState,useEffect } from "react";
import axios from "axios";

const BaseUrl = 'http://127.0.0.1:8000/api/'

function Dashboard() {

  const  studentId = localStorage.getItem('studentId');
  const [dashboardData, setDashboardData] = useState([])


  useEffect(() => {

    try {
        axios.get(BaseUrl + `student/dashboard-data/${studentId}`).then((response) => {
            setDashboardData(response.data)
        })

    } catch (err) {
        console.log(err)
    }
}, [])
  return (

        <div className='container mt-4'>
            <div className='row'>
                <aside className='col-md-3'>
                <Sidebar/>
                </aside>
                <section className="col-md-9">
                  <h3>Dashboard</h3>
                  <div className='row mt-5'>
                      <div className='col-md-3 mx-2 bg-success text-white rounded'>
                        <h3 className="mt-2">Enrolled Courses</h3>
                          <p className="fw-bold fs-2 ">{dashboardData.total_enrolled_courses}</p>
                      </div>
                      <div className='col-md-3 mx-2 bg-warning text-white rounded'>
                        <h3 className="mt-2">Favorite Courses</h3>
                          <p className="fw-bold fs-2">{dashboardData.total_favorite_courses}</p>
                      </div>
                      <div className='col-md-3 mx-2 bg-primary text-white rounded'>
                      <h3 className="mt-2"> Completed Assignments</h3>
                      <p className="fw-bold fs-2">{dashboardData.complete_assignments}</p>
                      </div>
                      <div className='col-md-3 mx-2 bg-primary text-white rounded mt-2'>
                      <h3 className="mt-2">Pending Assignments</h3>
                      <p className="fw-bold fs-2">{dashboardData.pending_assignments}</p>
                      </div>
                  </div>
                </section>
            </div>

        </div>
  );
}

export default Dashboard;