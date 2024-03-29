import React from 'react';
import Sidebar from '../Admin/AdminSidebar';
import Dashhead from '../Admin/Dashhead';  
import EditGallery from './EditGallery';

function EditGalleryNew() {
  return (
    <section>

    {/* <!-- Dashboard --> */}
    <div class="d-flex flex-column flex-lg-row h-lg-full bg-surface-secondary">
        
        <Sidebar />


        {/* <!-- Main content --> */}
        <div class="h-screen flex-grow-1 overflow-y-lg-auto">
            
            {/* <!-- Header --> */}
            <Dashhead />

            {/* <!-- Main --> */}
            <main class="py-6">
                <div class="container-fluid">
                  
                    <EditGallery />
                </div>
            </main>
        </div>
        
         
    </div>


    </section>
  )
}

export default EditGalleryNew