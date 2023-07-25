import React, { useState, useEffect } from 'react';

// import { useCookies } from 'react-cookie';
import axios from 'axios';
import Apiurl from '../Apiurl';
import TeacherSidebar from './TeacherSidebar';
import Dashhead from './Dashhead';
import { useCookies } from 'react-cookie';
import CanvasJSReact from '@canvasjs/react-charts';

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
const options = {
    title: {
        text: "Basic Column Chart"
    },
    data: [
    {
        // Change type to "doughnut", "line", "splineArea", etc.
        type: "column",
        dataPoints: [
            { label: "Apple",  y: 10  },
            { label: "Orange", y: 15  },
            { label: "Banana", y: 25  },
            { label: "Mango",  y: 30  },
            { label: "Grape",  y: 28  }
        ]
    }
    ]
}
const Teacher = () =>{

    // const [cookies] = useCookies(['user']);
    const [courses, setCourses] = useState([]);
    const [cookies,setCookie] = useCookies(['courseids']);
    const [total,setTotal]=useState([]);
    
    const getTotalIncome = async(courseIds) =>{
        try {
            const response = await axios.get(`${Apiurl}/gettotalincome/${courseIds}`);
            // console.log("Income"+response.data);
            setTotal(response.data)
        } catch (error) {
            console.log("error in getting data")
        }
    }
    
    const getcou = async (e) => {
        try {
            const response = await axios.get(`${Apiurl}/teachercourse/${cookies.id}`);
            setCourses(response.data);
        } catch (error) {
            console.log("Error in getting data:", error.message);
        }
    }

    useEffect(()=>{
        getcou();
        const courseIds = courses.map((course) => course.id).join(',');
        setCookie('courseids', courseIds);
        getTotalIncome(courseIds);
    },[courses, setCookie])

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
                    <main class="py-6 bg-surface-secondary">
                        <div class="container-fluid">
                            {/* <!-- Card stats --> */}
                            <div class="row g-6 mb-6">
                                <div class="col-xl-3 col-sm-6 col-12">
                                    <div class="card shadow border-0">
                                        <div class="card-body">
                                            <div class="row">
                                                <div class="col">
                                                    <span class="h6 font-semibold text-muted text-sm d-block mb-2">Total Income</span>
                                                    <span class="h3 font-bold mb-0">Rs {total.map((t)=>t.total_payment.toFixed(2))}</span>
                                                </div>
                                                <div class="col-auto">
                                                    <div class="icon icon-shape bg-tertiary text-white text-lg rounded-circle">
                                                        <i class="bi bi-credit-card"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="mt-2 mb-0 text-sm">
                                                
                                                {/* <span class="text-nowrap text-xs text-muted">Since last month</span> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-3 col-sm-6 col-12">
                                    <div class="card shadow border-0">
                                        <div class="card-body">
                                            <div class="row">
                                                <div class="col">
                                                    <span class="h6 font-semibold text-muted text-sm d-block mb-2">All Students</span>
                                                    <span class="h3 font-bold mb-0">1500</span>
                                                </div>
                                                <div class="col-auto">
                                                    <div class="icon icon-shape bg-primary text-white text-lg rounded-circle">
                                                        <i class="bi bi-people"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="mt-2 mb-0 text-sm">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                               
                            </div>
                            {/* Bar chart */}
                            <div>
			<CanvasJSChart options = {options}
				/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
                        </div>
                    </main>
                </div>
                
                 
            </div>


        </section>
        
    )
}

export default Teacher;