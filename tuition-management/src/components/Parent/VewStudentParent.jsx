import React from "react";
import Sidebar from './Sidebar';
import Dashhead from './Dashhead';



const ViewStudentParent = () =>{
    return(
        <section>
             {/* <!-- Dashboard --> */}
            <div class="d-flex flex-column flex-lg-row h-lg-full bg-surface-secondary">
                
                <Sidebar />


                {/* <!-- Main content --> */}
                <div class="h-screen flex-grow-1 overflow-y-lg-auto">
                    
                    {/* <!-- Header --> */}
                    <Dashhead />

                    {/* <!-- Main --> */}
                    <main class="py-6 bg-surface-secondary">
                        <div class="container-fluid">
                            <div className="row mb-3 mt-3">
                                <div className="col-sm-12"></div>
                            </div>
                            
                        </div>
                    </main>
                </div>
                
                 
            </div>
        </section>
    )
}


export default ViewStudentParent;