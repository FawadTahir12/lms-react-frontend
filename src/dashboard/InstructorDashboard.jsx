import InstructorSidebar from "./InstructorSidebar";
import { useState,useEffect } from "react";
import axios from "axios";
const BaseUrl = 'http://127.0.0.1:8000/api/'

function InstructorDashboard() {
  const  instructorId = localStorage.getItem('instructorId')
  const [dashboardData, setDashboardData] = useState([])


  useEffect(() => {

    try {
        axios.get(BaseUrl + `teacher/dashboard-data/${instructorId}`).then((response) => {
            setDashboardData(response.data)
        })

    } catch (err) {
        console.log(err)
    }
}, [instructorId])
  return (

        <div className='container mt-4'>
            <div className='row'>
                <aside className='col-md-3'>
                <InstructorSidebar/>
                </aside>
                <section className="col-md-9">
                  <h3>Dashboard</h3>
                  <div className='row mt-5'>
                      <div className='col-md-3 mx-2 bg-success text-white rounded'>
                        <h3 className="mt-2">Total Courses</h3>
                          <p className="fw-bold fs-2 ">{dashboardData.total_teacher_courses}</p>
                      </div>
                      <div className='col-md-3 mx-2 bg-warning text-white rounded'>
                        <h3 className="mt-2">Total Chapters</h3>
                          <p className="fw-bold fs-2">{dashboardData.total_teacher_chapters}</p>
                      </div>
                      <div className='col-md-3 mx-2 bg-primary text-white rounded'>
                      <h3 className="mt-2">Total Students</h3>
                      <p className="fw-bold fs-2">{dashboardData.total_enrolled_students}</p>
                      </div>
                  </div>
                </section>
            </div>
        </div>
  );
}

export default InstructorDashboard;