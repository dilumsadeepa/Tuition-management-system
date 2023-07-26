import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Apiurl from '../Apiurl';
import TeacherSidebar from './TeacherSidebar';
import Dashhead from './Dashhead';
import { Link } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { useParams } from 'react-router-dom';



const CoursesIncome = () =>{

    const { id,course } = useParams();
    const [cookies,setCookie] = useCookies(['courseids']);
    const [income, setIncome] = useState([]);
    const [coursename,SetCourse]=useState([]);
    const[precentage,setPrecentage]=useState([]);
   
    const getIncome = async (e) => {
        try {
            const response = await axios.get(`${Apiurl}/getcourseincome/${id}`);
            setIncome(response.data);
            SetCourse(income.map(i => i.coursename));
            console.log("Students "+response.data);
        } catch (error) {
            console.log("Error in getting data:", error.message);
        }
    }

       
    const getSalPrecentage = async(e) =>{
        try {
            const response = await axios.get(`${Apiurl}/salarypresentbyid/${cookies.role}`);
            // console.log("Income"+response.data);
            setPrecentage(response.data);
        } catch (error) {
            console.log("error in getting data")
        }
    }

    const getMonthName = (monthNumber) => {
        const months = [
            "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
    
        // Ensure the monthNumber is within a valid range (1 to 12)
        const validMonthNumber = Math.max(1, Math.min(12, monthNumber));
    
        // Return the corresponding month name from the 'months' array
        return months[validMonthNumber - 1];
    };
   
    useEffect(()=>{
        getIncome();
        getSalPrecentage();
    },[])

    return(
        <section> 
            {/* <!-- Dashboard --> */}
                <div class="d-flex flex-column flex-lg-row h-lg-full bg-surface-secondary">
                        
                <TeacherSidebar />


                {/* <!-- Main content --> */}
                <div class="h-screen flex-grow-1 overflow-y-lg-auto">
                    
                    {/* <!-- Header --> */}
                    <Dashhead />

                    {/* <!-- Main --> */}
                     <main>
                    
                        <div class="container">
                            <h2 className='mt-3 mb-3'>{course}</h2>
                            <div className="row">
                                <div class="col-xl-4 col-sm-6 col-12">
                                    <div class="card shadow border-0">
                                       
                                    </div>
                                </div>
                            </div>


                            <div className="row mt-5">
                               
                                <div className="col-sm-12">
                                    <div class="table-responsive">
                                        <table class="table table-bordered">
                                            <thead>
                                                <tr>
                                                    <th>Month</th>
                                                    <th>Income</th>
                                                    
                                                </tr>
                                            </thead>
                                            <tbody>
                                            {income.map((i) => 
                                                <tr>
                                                <td>{getMonthName(i.month)}</td>
                                                <td>Rs {(i.total_payment*(precentage.presentage)/100).toFixed(2)}</td>
                                                {/* <td><Link to={`/showstudents/${student.id}`} className='btn btn-info'>View Students</Link></td> */}
                                                </tr>
                                            )}
                                            </tbody>
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

export default CoursesIncome;