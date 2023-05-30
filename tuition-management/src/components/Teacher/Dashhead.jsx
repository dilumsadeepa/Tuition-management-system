import React from 'react';


const Dashhead = () =>{
    return (
        <header class="bg-dark border-bottom pt-6 text-white">
                        <div class="container-fluid">
                            <div class="mb-npx">
                                <div class="row align-items-center">
                                    <div class="col-sm-6 col-12 mb-4 mb-sm-0">
                                        {/* <!-- Title --> */}
                                        <h1 class="h2 mb-0 ls-tight text-white">Teacher Dashboard</h1>
                                    </div>
                                    {/* <!-- Actions --> */}
                                    <div class="col-sm-6 col-12 text-sm-end">
                                        {/* <div class="mx-n1">
                                            <a href="#s" class="btn d-inline-flex btn-sm btn-neutral border-base mx-1">
                                                <span class=" pe-2">
                                                    <i class="bi bi-pencil"></i>
                                                </span>
                                                <span>Edit</span>
                                            </a>
                                            <a href="#s" class="btn d-inline-flex btn-sm btn-primary mx-1">
                                                <span class=" pe-2">
                                                    <i class="bi bi-plus"></i>
                                                </span>
                                                <span>Create</span>
                                            </a>
                                        </div> */}
                                    </div>
                                </div>
                                {/* <!-- Nav --> */}
                                <ul class="nav nav-tabs mt-4 overflow-x border-0">
                                    
                                </ul>
                            </div>
                        </div>
                    </header>
    )
}

export default Dashhead;