import React from 'react';
// import { useCookies } from 'react-cookie';

import Sidebar from './AdminSidebar';
import Dashhead from './Dashhead';  


const Admin = () =>{

    // const [cookies] = useCookies(['user']);

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
                          
                            
                        </div>
                    </main>
                </div>
                
                 
            </div>


        </section>
        
    )
}

export default Admin;