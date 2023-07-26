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
    const [said, setsaid] = useState("");

    const getsal = async(e) =>{
        try {
            const response = await axios.get(`${Apiurl}/salarypresent`);
            setSalary(response.data);
        } catch (error) {
            console.log("error in getting data")
        }
    };
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

   };

   const edit = (id,urole,pre) =>{
        console.log(urole+','+pre);
        document.getElementById('urolev').value = urole;
        document.getElementById('uroled').innerHTML = urole;
        document.getElementById('pre').value = pre;
        document.getElementById('sid').value = id;
        setsaid(id);
        document.getElementById('crbtn').style.display = "none";
        document.getElementById('upbtn').style.display = "block";
   };

   const updatePRE = async (e) => {
        e.preventDefault();
        console.log("clicked");
       
        // let id = document.getElementById('sid').value;
        let id = said;
        let ro = document.getElementById('urolev').value;
        let pr = document.getElementById('pre').value;

        console.log(id+','+ro+','+pr);

        await axios.patch(`${Apiurl}/updatepre/${id}`,{
            userrole:ro,
            presentage:pr
        });

        

        document.getElementById('crbtn').style.display = "block";
        document.getElementById('upbtn').style.display = "none";
    
    };

    const deletepr = async(id) =>{
        console.log(`${Apiurl}/deletespre/${id}`);
        try {
            const deleted = await axios.delete(`${Apiurl}/deletespre/${id}`);
            setsucc("Presentage Deleted, "+deleted);
        } catch (error) {
            console.log("error on deleting" + error);
        }
    };

    const getUserRoleLabel = (userRole) => {
        switch (userRole) {
          case '1':
            return 'Administartion';
          case '2':
            return 'Staff';
          case '3':
            return 'Teacher';
          default:
            return 'Unknown Role';
        }
      };
      

   useEffect(() => {
        // document.getElementById('upbtn').style.display = "none";
        getsal();
   });

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

                               <h2>Salary percentage</h2>

                                <div className="d-flex justify-content-center mt-5">
                                    <form action="">
                                        <input type="hidden" id='sid' value={""} />
                                        <div class="col mb-3 mt-3">
                                            <label className="form-label">User Role:</label>
                                            <select className="form-select" onChange={(e) => setUrole(e.target.value)}>
                                                <option id='urolev' value={""}><span id='uroled'>--- Select one ---</span></option>
                                                <option value={"1"}>Administration</option>
                                                <option value={"2"}>Staff</option>
                                                <option value={"3"}>Teacher</option>
                                                
                                            </select>
                                        </div>

                                        <div class="col mb-3 mt-3">
                                            <label className="form-label">percentage (Enter percentage without % mark):</label>
                                            <input type="text" className="form-control" id='pre' onChange={(e) => setPre(e.target.value)} placeholder="Enter presentage" />
                                        </div>

                                        
                                        <button type='button' style={{width:'100%'}} id='crbtn' onClick={setSPre} className='debtn crbtn'>Create</button>
                                        <br />
                                        <button type='button' style={{width:'100%'}} id='upbtn' className='btn btn-primary upbtn' onClick={updatePRE}>Update</button>

                                    </form>

                                </div>
                            </div>

                            <br /><hr />

                            <div className="row mt-5">
                                <div className="col-sm-12">
                                    <div class="table-responsive">
                                        <table class="table table-dark">
                                            <thead>
                                                <tr>
                                                    <th>User Role</th>
                                                    <th>Salary percentage</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            {salary.map((s) =>
                                                <tbody>
                                                    <tr>
                                                        <td>{getUserRoleLabel(s.userrole)}</td>
                                                        <td>{s.presentage} %</td>
                                                        <td><button type='button' onClick={(e) => edit(s.id,s.userrole,s.presentage)} className='btn btn-info mr-3'>Edit</button> <button type='button' onClick={(e) => deletepr(s.id)} className='btn btn-danger'>Delete</button></td>
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