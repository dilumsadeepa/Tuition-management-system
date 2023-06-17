import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Apiurl from '../Apiurl';
import Sidebar from './Sidebar';
import Dashhead from './Dashhead';
import { Link } from 'react-router-dom';
import User from '../User';





const  ParentProfile= () => {
    const [payments, setPayments] = useState([]);

    const getpay = async (e) => {
        console.log(User.getUser());
        try {
            const response = await axios.get(`${Apiurl}/payment`);
            console.log(response.data);
            setPayments(response.data);


        } catch (error) {
            console.log("error in getting data")
        }

    }

    useEffect(() => {
        getpay();
    }, [])
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
                        <div class="container-fluid">


                        </div>
                    </main>
                </div>


            </div>
        </section>
    )
}


export default ParentProfile;