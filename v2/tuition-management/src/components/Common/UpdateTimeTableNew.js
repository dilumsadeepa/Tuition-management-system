import React from 'react'; 
import UpdateTimeTable from './UpdateTimeTable';


import Sidebar from '../Admin/AdminSidebar';
import StudentSidebar from '../Student/StudentSidebar';
import TeacherSidebar from '../Teacher/TeacherSidebar';
import ParentSidebar from '../Parent/Sidebar';
import AdminDashhead from '../Admin/Dashhead';
import StudentDashhead from "../Student/Dashhead";
import TeacherDashhead from "../Teacher/Dashhead";
import ParentDashHead from "../Parent/Dashhead";
import { useCookies } from 'react-cookie';

function UpdateTimeTableNew() {
    const [cookies] = useCookies(['role']);


  return (
    <section>

    {/* <!-- Dashboard --> */}
    <div class="d-flex flex-column flex-lg-row h-lg-full bg-surface-secondary">
        
    {cookies.role === '5' ? <ParentSidebar/> : cookies.role === '4' ? <StudentSidebar/> : cookies.role === '3' ? <TeacherSidebar /> : <Sidebar />}  


        {/* <!-- Main content --> */}
        <div class="h-screen flex-grow-1 overflow-y-lg-auto">
            
            {/* <!-- Header --> */}
            {cookies.role === '5' ? <ParentDashHead/> : cookies.role === '4' ? <StudentDashhead/> : cookies.role === '3' ? <TeacherDashhead /> : <AdminDashhead />} 

            {/* <!-- Main --> */}
            <main class="py-6">
                <div class="container-fluid">
                  
                    <UpdateTimeTable />
                </div>
            </main>
        </div>
        
         
    </div>


    </section>
  )
}

export default UpdateTimeTableNew