import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import Apiurl from '../Apiurl';
import Sidebar from './AdminSidebar';
import Dashhead from './Dashhead';
import Swal from 'sweetalert2';


const AddParentData = () => {

    const [parentNIC, setParentNIC] = useState('');
    const { id } = useParams();

    const handleSubmit = async (e) => {
        console.log('====================================');
        console.log("clicked");
        console.log('====================================');
        e.preventDefault();
        try {
            const response = await axios.post(`${Apiurl}/addparentdata`, {
                parentNIC: parentNIC,
                studentId: id,
            });

            Swal.fire({
                icon: 'success',
                title: 'Success',
                text: 'Parent-student relationship created successfully!',
              });

            console.log(response.data);
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: error.response.data,
              });
            console.log(error.response.data);
        }
    };


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
                    <main class="py-6 bg-surface-secondary">

                        <div className="container py-5">

                            <div className="row">
                                <h2>Add Parent</h2>
                            </div>

                            <div className="row mt-3 mb-3">

                                <div className="col-sm-4 mx-auto">
                                    <form onSubmit={handleSubmit}>
                                        <div className="mb-3 mt-3">
                                            <label className="form-label">Parents' NIC number:</label>
                                            <input type="text" className="form-control" onChange={(e) => setParentNIC(e.target.value)} placeholder="Enter NIC number" />
                                        </div>

                                        <div className="mt-3 mb-3">
                                            <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Add Parent</button>
                                        </div>
                                    </form>
                                </div>


                            </div>



                        </div>

                    </main>
                </div>


            </div>
        </section>
    )
}

export default AddParentData;