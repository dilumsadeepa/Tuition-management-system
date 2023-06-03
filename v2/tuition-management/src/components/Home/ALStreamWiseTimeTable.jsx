import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

function ALStreamWiseTimeTable() {
  return (
    <div>
        <Navbar />
        <main className="page">
            <section className="clean-block about-us">
                <div className="container">
                <div className="block-heading">
                    <h2 className="text-info">Commerce</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna, dignissim nec auctor in, mattis vitae leo.</p>
                    <div>
                    <ul className="nav nav-tabs" role="tablist" style={{ marginTop: '50px' }}>
                        <li className="nav-item" role="presentation"><a className="nav-link active" role="tab" data-bs-toggle="tab" href="#tab-1">All</a></li>
                        <li className="nav-item" role="presentation"><a className="nav-link" role="tab" data-bs-toggle="tab" href="#tab-2">Economics - ආර්ථික විද්‍යාව</a></li>
                        <li className="nav-item" role="presentation"><a className="nav-link" role="tab" data-bs-toggle="tab" href="#tab-3">Business Studies - ව්‍යාපාර අධ්‍යයනය</a></li>
                        <li className="nav-item" role="presentation"><a className="nav-link" role="tab" data-bs-toggle="tab" href="#tab-4">Accounting - ගිණුම්කරණය</a></li>
                    </ul>
                    <div className="tab-content">
                        <div className="tab-pane active" role="tabpanel" id="tab-1">
                        <h1 style={{ marginTop: '30px', marginBottom: '25.2px' }}>Commerce All Classes&nbsp;</h1>
                        <div className="table-responsive">
                            <table className="table">
                            <thead>
                                <tr>
                                <th>Starting Date</th>
                                <th>Time</th>
                                <th>Day</th>
                                <th>Batch</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <td>2023/12/01</td>
                                <td>8.00 AM</td>
                                <td>Monday</td>
                                <td>2025 A/L</td>
                                </tr>
                                <tr>
                                <td>Cell 3</td>
                                <td>Cell 4</td>
                                <td>Cell 4</td>
                                <td>Cell 4</td>
                                </tr>
                            </tbody>
                            </table>
                        </div>
                        </div>
                        <div className="tab-pane" role="tabpanel" id="tab-2">
                        <p>Content for tab 2.</p>
                        </div>
                        <div className="tab-pane" role="tabpanel" id="tab-3">
                        <p>Content for tab 3.</p>
                        </div>
                        <div className="tab-pane" role="tabpanel" id="tab-4">
                        <p>Tab content.</p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section>
    </main>
    <Footer />
    </div>
  )
}

export default ALStreamWiseTimeTable