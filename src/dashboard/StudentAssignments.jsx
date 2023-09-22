import Sidebar from "./Sidebar";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
const BaseUrl = "http://127.0.0.1:8000/api/";

function StudentAssignment() {
  const Swal = require("sweetalert2");
  const [assignmentData, setAssignmentData] = useState([]);
  const [assignmentStatus, setAssignmentStatus] = useState(false);


  const markAsDone = (assignment_id, title, detail, teacher, student) =>{
    const _assignmentData = new FormData();
    _assignmentData.append('student_assignment_status',true)
    _assignmentData.append('detail',detail)
    _assignmentData.append('student',student)
    _assignmentData.append('teacher',teacher)
    _assignmentData.append('title',title)
    try {
        axios.put(BaseUrl + `update-assignment-status/${assignment_id}`, _assignmentData).then((res) => {

          if (res.status === 201 || res.status === 200 ){
            Swal.fire({
                title: 'Assignment completed Successfully',
                toast: true,
                timer:3000,
                position: 'top-right',
                icon: 'success',
                showConfirmButton:false,
})
        setAssignmentStatus(true)
        }
        })

    } catch (err) {
        console.log(err)
    }
}
  useEffect(() => {
    const studentId = localStorage.getItem("studentId");

    try {
      axios.get(BaseUrl + `my-assignment/${studentId}`).then((response) => {
        setAssignmentData(response.data);
        setAssignmentStatus(response.data.student_assignment_status);
      });
    } catch (err) {
      console.log(err);
    }
  }, [assignmentStatus]);
  return (
    <div className="container mt-4">
      <div className="row">
        <aside className="col-md-3">
          <Sidebar />
        </aside>
        <section className="col-md-9">
          <div className="card">
            <h5 className="card-header">My Assignments </h5>
            <div className="card-body">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Detail</th>
                    <th>Created By</th>
                  </tr>
                </thead>
                {assignmentData.map((row) => {
                  return (
                    <tbody>
                      <td className="mt-3 malin-items-center">{row.title}</td>
                      <td className="mt-3 malin-items-center">{row.detail}</td>
                      <td className="mt-3 malin-items-center">
                        <Link to={`/instructor-details/${row.teacher.id}`}>
                          {row.teacher.full_name}
                        </Link>
                      </td>
                      <td>
                        {row.student_assignment_status === false ? (
                          <span>
                            <button onClick={()=>{markAsDone(row.id, row.title, row.detail, row.teacher.id, row.student.id)}} className="btn btn-primary mt-1 mb-1">
                              Mark as Complete
                            </button>
                          </span>
                        ) : (
                          <span className="badge bg-success">Completed</span>
                        )}
                      </td>
                    </tbody>
                  );
                })}
              </table>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default StudentAssignment;
