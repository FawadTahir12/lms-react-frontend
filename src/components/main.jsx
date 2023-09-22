import Home from "./home";
import Header from "./Header";
import Footer from "./Footer";
import About from "./AboutUs";
import CourseDetail from "./CourseDetail";
import Login from "../user/Login";
import Register from "../user/Register";
import Dashboard from "../dashboard/Dashboard";
import {Route, Routes} from "react-router-dom";
import MyCourses from "../dashboard/MyCourses";
import FavoriteCourses from "../dashboard/FavoriteCourses";
import RecommendedCourse from "../dashboard/RecommendedCourses";
import ProfileSetting from "../dashboard/ProfileSetting";
import ChangePassword from "../dashboard/ChangePassword";
import InstructorDashboard from "../dashboard/InstructorDashboard";
import InstructorLogin from "../instructor/InstructorLogin";
import InstructorRegister from "../instructor/InstructorRegister";
import InstructorMyCourses from "../dashboard/InstructorMyCourses";
import InstructorAddCourse from "../dashboard/InstructorAddCourse";
import InstructorProfileSetting from "../dashboard/InstructorProfileSettings";
import InstructorChangePassword from "../dashboard/InstructorChangePassword";
import InstructorUsers from "../dashboard/Instructor-users";
import InstructorDetail from "../instructor/InstructorDetail";
import AllCourses from "./AllCourses";
import PopularCourses from "./PopularCourses";
import PopularInstructor from "./PopularInstructor";
import CategoryCourses from "./CategoryCourses";
import AddChapters from "../dashboard/AddChapters";
import CourseChapters from "../dashboard/CourseChapters";
import EditChapters from "../dashboard/EditChapters";
import EditCourse from "../dashboard/EditCourse";
import EnrollStudentList from "../dashboard/EnrollStudentList";
import AddAssignment from "../dashboard/AddAssignment";
import ShowAssignment from "../dashboard/ShowAssignment";
import StudentAssignment from "../dashboard/StudentAssignments";
function Main() {
  return (
      <div className=''>
          <Header/>
          <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/about' element={<About/>}/>
              <Route path='/detail/:id' element={<CourseDetail/>}/>
              <Route path='/user-login' element={<Login/>}/>
              <Route path='/user-register' element={<Register/>}/>
              <Route path='/user-dashboard' element={<Dashboard/>}/>
              <Route path='/my-courses' element={<MyCourses/>}/>
              <Route path='/favorite-courses' element={<FavoriteCourses/>}/>
              <Route path='/recommended-courses' element={<RecommendedCourse/>}/>
              <Route path='/profile-setting' element={<ProfileSetting/>}/>
              <Route path='/change-password' element={<ChangePassword/>}/>
              <Route path='/instructor-register' element={<InstructorRegister/>}/>
              <Route path='/instructor-login' element={<InstructorLogin/>}/>
              <Route path='/instructor-dashboard' element={<InstructorDashboard/>}/>
              <Route path='/instructor-mycourse' element={<InstructorMyCourses/>}/>
              <Route path='/instructor-addcourse' element={<InstructorAddCourse/>}/>
              <Route path='/add-chapter/:course_id' element={<AddChapters/>}/>
              <Route path='/instructor-profile-setting' element={<InstructorProfileSetting/>}/>
              <Route path='/instructor-change-password' element={<InstructorChangePassword/>}/>
              <Route path='/instructor-users' element={<InstructorUsers/>}/>
              <Route path='/instructor-details/:teacher_id' element={<InstructorDetail/>}/>
              <Route path='/all-courses' element={<AllCourses/>}/>
              <Route path='/popular-courses' element={<PopularCourses/>}/>
              <Route path='/popular-instructor' element={<PopularInstructor/>}/>
              <Route path='/Category/:category_slug' element={<CategoryCourses/>}/>
              <Route path='/all-chapters/:course_id' element={<CourseChapters/>}/>
              <Route path='/edit-chapter/:chapter_id' element={<EditChapters/>}/>
              <Route path='/edit-course/:course_id' element={<EditCourse/>}/>
              <Route path='/enroll-students/:course_id' element={<EnrollStudentList/>}/>
              <Route path='/add-assignment/:student_id' element={<AddAssignment/>}/>
              <Route path='/show-assignment/:student_id' element={<ShowAssignment/>}/>
              <Route path='/assignments' element={<StudentAssignment/>}/>










          </Routes>
          <Footer/>
      </div>

  );
}

export default Main;