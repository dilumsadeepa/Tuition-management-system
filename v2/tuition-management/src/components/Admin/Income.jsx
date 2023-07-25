import { useState, useEffect, useRef } from 'react';
import React from 'react';
import axios from 'axios';
import Apiurl from '../Apiurl';
import Sidebar from './AdminSidebar';
import Dashhead from './Dashhead';
import { useCookies } from 'react-cookie';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';



const Income = () => {
    const [income, setIncome] = useState([]);
    const [selectedMonth, setSelectedMonth] = useState('');
    const [cookies] = useCookies(['user']);
    const pdfRef = useRef(null);

    const handleMonthChange = (event) => {
        setSelectedMonth(event.target.value);
        const month = new Date(event.target.value).getMonth() + 1;
        getincome(month);
    };

    const getincome = async (month) => {
        try {
            const response = await axios.get(`${Apiurl}/calculate-income/${month}`);
            setIncome(response.data);
        } catch (error) {
            console.log("error in getting data")
        }
    }
    const viewslip = () => {
        if (pdfRef.current) {
            const input = pdfRef.current;
            html2canvas(input).then((canvas) => {
              const imgData = canvas.toDataURL('image/png');
              const pdf = new jsPDF('p', 'mm', 'a4');
              const pdfWidth = 190;
              const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
              pdf.addImage(imgData, 'PNG', 10, 10, pdfWidth, pdfHeight);
              pdf.save('payslip.pdf');
            });
          }
    }

    useEffect(() => {
        const currentDate = new Date();
        const currentMonth = currentDate.getMonth();
        setSelectedMonth(currentMonth + 1)
        getincome(currentMonth + 1);
    }, [])

    return (
        <section>
            <div class="d-flex flex-column flex-lg-row h-lg-full bg-surface-secondary">
                <Sidebar />

                <div class="h-screen flex-grow-1 overflow-y-lg-auto">
                    <Dashhead />
                    <main class="py-6 bg-surface-secondary">
                        <div class="container-fluid">
                            <div className="row mt-5 mb-5">
                                <div className="col-sm-12">
                                    <h2>My Income</h2>
                                </div>
                            </div>

                            <div className="row mt-3 mb-3">
                                <div className='col-sm-6 mx-auto'>
                                    <div class="mb-3 mt-3">
                                        <label htmlFor="monthPicker" className='form-label'>Select a Month: </label>
                                        <input
                                            type="month"
                                            id="monthPicker"
                                            name="monthPicker"
                                            value={selectedMonth}
                                            className='form-control'
                                            onChange={handleMonthChange}
                                        />
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div className="row mt-3 mb-3" ref={pdfRef}>
                                <div className="col-sm-8 mx-auto">
                                    <div style={{ textAlign: 'center' }} className="mt-5 mb-3">
                                        <b><h3>Payslip</h3></b>
                                        Susipwin | Anuradhapura
                                    </div>

                                    <div className="mt-5" style={{ textAlign: 'center' }}>
                                        <table width={'100%'}>
                                            <tr>
                                                <th>Name : </th>
                                                <th>Month</th>
                                            </tr>
                                            <tr>
                                                <td>{cookies.username}</td>
                                                <td>{selectedMonth}</td>
                                            </tr>
                                            <br />
                                            <tr>
                                                <th>Course count</th>
                                                <th>Number Of Student</th>
                                            </tr>
                                            <tr>
                                                <td>{income.coursecount}</td>
                                                <td>{income.payst}</td>
                                            </tr>
                                            <br />
                                            <tr>
                                                <th>Pay for staff</th>
                                                <th>Income</th>
                                            </tr>
                                            <tr>
                                                <td>RS. {income.totalIncome - income.income}</td>
                                                <td>RS. {income.income}</td>
                                            </tr>
                                        </table>
                                    </div>

                                    

                                </div>
                            </div>
                            {/* PDF export button */}
                            <br /><br />
                                    <div className="mt-5">

                                        <button type='button' style={{ width: '100%' }} className='btn btn-primary' onClick={(e) => viewslip()}>Download Slip</button>
                                    </div>
                        </div>
                    </main>
                </div>
            </div>

        </section>
    )
}

export default Income;
