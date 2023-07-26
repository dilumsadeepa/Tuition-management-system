import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from 'axios';
import Apiurl from '../Apiurl';
import Sidebar from './AdminSidebar';
import Dashhead from './Dashhead';
import Swal from 'sweetalert2';

const Parent = () => {
  const { id } = useParams();
  const [parent, setParent] = useState([]);

  const getPa = async () => {
    try {
      const response = await axios.get(`${Apiurl}/findParentByStudentId/${id}`);
      setParent(response.data);
    } catch (error) {
      console.log("error in getting data");
    }
  }

  const deleteParent = async () => {
    try {
      await axios.delete(`${Apiurl}/parentstudents/${id}`);
      setParent([]);
      Swal.fire({
        title: "Success!",
        text: "Parent data deleted successfully",
        icon: "success",
      })
      
    } catch (error) {
      console.log("error on deleting parent data", error);
      Swal.fire("Error!", "Failed to delete parent data.", "error");
    }
  }

  //axios call api
  useEffect(() => {
    getPa();
  }, []);

  return (
    <section>
      {/* <!-- Dashboard --> */}
      <div className="d-flex flex-column flex-lg-row h-lg-full bg-surface-secondary">
        <Sidebar />
        {/* <!-- Main content --> */}
        <div className="h-screen flex-grow-1 overflow-y-lg-auto">
          {/* <!-- Header --> */}
          <Dashhead />
          {/* <!-- Main --> */}
          <main className="py-6 bg-surface-secondary">
            <div className="container py-5">
              <div className="row g-6 mb-6">
                <div className="col-sm-3">
                  <Link to={`/addparent/${id}`}>
                    <div className="debtn">
                      <h3 style={{ color: "white" }}>Add Parent Data</h3>
                    </div>
                  </Link>
                </div>
              </div>

              <div className="row mt-3 mb-3">
                <div className="col-sm-6 mx-auto">
                  <div className="card shadow border-0">
                    <div className="card-body">
                      <div className="row">
                        <div className="col">
                          <table className="table">
                            <tbody className="bg-dark" style={{ color: "white" }}>
                              <tr>
                                <th>Name</th>
                                <td>{parent.username}</td>
                              </tr>
                              <tr>
                                <th>Full Name</th>
                                <td>{parent.fullname}</td>
                              </tr>
                              <tr>
                                <th>Address</th>
                                <td>{parent.address}</td>
                              </tr>
                              <tr>
                                <th>DOB</th>
                                <td>{parent.dob}</td>
                              </tr>
                              <tr>
                                <th>NIC</th>
                                <td>{parent.nic}</td>
                              </tr>
                              <tr>
                                <th>Email</th>
                                <td>{parent.email}</td>
                              </tr>
                              <tr>
                                <th>Phone Number</th>
                                <td>{parent.tel}</td>
                              </tr>
                            </tbody>
                          </table>
                          <button
                            type="button"
                            className="btn btn-danger"
                            style={{ width: '100%', marginTop: 30 }}
                            onClick={() => {
                              Swal.fire({
                                title: "Are you sure?",
                                text: "Once deleted, you will not be able to recover this parent data!",
                                icon: "warning",
                                buttons: ["Cancel", "Delete"],
                                dangerMode: true,
                              })
                              .then((willDelete) => {
                                if (willDelete) {
                                  deleteParent();
                                }
                              });
                            }}
                          >
                            Delete Parent Data
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </section>
  );
}

export default Parent;
