import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Apiurl from '../Apiurl';
import Sidebar from './AdminSidebar';
import Dashhead from './Dashhead';


const SalaryPresent = () => {

   const [userrole, setUrole] = useState('');
   const [presentage, setPre] = useState('');
   const [succ, setsucc] = useState("");
    const [err, seterr] = useState("");
    const [salary, setSalary] = useState([]);

    const getsal = async(e) =>{
        try {
            const response = await axios.get(`${Apiurl}/salarypresent`);
            setSalary(response.data);
        } catch (error) {
            console.log("error in getting data")
        }
    }

   const setSPre = async() =>{

    console.log(`${userrole},${presentage}`);

        if (userrole === "" || presentage === "") {
            seterr("Fill All the filds");
            setsucc("");
        }else{
            try {
                await axios.post(`${Apiurl}/createSpresent/`,{
                    userrole,
                    presentage
                 });
            } catch (error) {
                seterr(error);
            }

            seterr("");
            setsucc("Presentage cerated");
        }

   }

   useEffect(() => {
        getsal();
   })

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
                    
                        <div class="container">
                            <div className="row mt-5 mb-5">

                                <div className="col-sm-1"></div>

                                <div className="col-sm-10">
                                    {succ.length > 0 &&
                                        <>
                                            <div class="alert alert-success alert-dismissible fade show">
                                                
                                                    <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
                                                    <strong>Success!</strong> {succ}
                                            </div>
                                        </>
                                    }
                                    {err.length > 0 &&
                                        <>
                                            <div class="alert alert-danger alert-dismissible fade show">
                                                
                                                
                                                    <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
                                                    <strong>Error!</strong> {err}
                                                
                                            </div>
                                        </>
                                    }
                                </div>

                                <div className="col-sm-1"></div>

                            </div>

                            <div className="row mt-5">

                               <h2>Add Salary presentage</h2>

                                <div className="d-flex justify-content-center mt-5">
                                    <form action="">

                                        <div class="col mb-3 mt-3">
                                            <label className="form-label">User Role:</label>
                                            <select class="form-select" onChange={(e) => setUrole(e.target.value)}>
                                                <option value={""}>--- Select one ---</option>
                                                <option value={"1"}>Admnistration</option>
                                                <option value={"2"}>Staff</option>
                                                <option value={"3"}>Teacher</option>
                                                
                                            </select>
                                        </div>

                                        <div class="col mb-3 mt-3">
                                            <label className="form-label">Presentage (Enter presentage without % mark):</label>
                                            <input type="text" className="form-control" onChange={(e) => setPre(e.target.value)} placeholder="Enter presentage" />
                                        </div>

                                        <button type='button'onClick={setSPre} className='debtn'>Create</button>

                                    </form>

                                </div>
                            </div>

                            <div className="row mt-5">
                                <div className="col-sm-12">
                                    <div class="table-responsive">
                                        <table class="table">
                                            <thead>
                                                <tr>
                                                    <th>User Role</th>
                                                    <th>Salary Presentage</th>
                                                </tr>
                                            </thead>
                                            {salary.map((s) =>
                                                <tbody>
                                                    <tr>
                                                        <td>{s.userrole}</td>
                                                        <td>{s.presentage} %</td>
                                                    </tr>
                                                </tbody>
                                            )}
                                        </table>
                                    </div>
                                </div>
                            </div>

                            
                            
                        </div>
                    </main>
                </div>
                
                
            </div>


        </section>
    )
}

export default SalaryPresent;