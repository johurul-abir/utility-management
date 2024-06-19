import AllDueBills from "./AllDueBills";
import GetAllBills from "./GetAllBills";

const BillsBox = () => {
  return (
    <>
      <div className="card">
        <div className="card-body pt-0">
          {/* Tab Menu */}
          <nav className="user-tabs mb-4">
            <ul className="nav nav-tabs nav-tabs-bottom nav-justified">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  href="#pat_appointments"
                  data-bs-toggle="tab"
                >
                  All Sucessfull Payments
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#pat_prescriptions"
                  data-bs-toggle="tab"
                >
                  All Due Payments
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#pat_medical_records"
                  data-bs-toggle="tab"
                >
                  <span className="med-records">Upcoming Bill </span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#pat_billing"
                  data-bs-toggle="tab"
                >
                  All Bills
                </a>
              </li>
            </ul>
          </nav>
          {/* /Tab Menu */}

          {/* Tab Content */}
          <div className="tab-content pt-0">
            {/* Successfull payment Tab */}
            <div id="pat_appointments" className="tab-pane fade show active">
              <div className="card card-table mb-0">
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table table-hover table-center mb-0">
                      <thead>
                        <tr>
                          <th>Doctor</th>
                          <th>Appt Date</th>
                          <th>Booking Date</th>
                          <th>Amount</th>
                          <th>Follow Up</th>
                          <th>Status</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <h2 className="table-avatar">
                              <a
                                href="doctor-profile.html"
                                className="avatar avatar-sm me-2"
                              >
                                <img
                                  className="avatar-img rounded-circle"
                                  src="assets/img/doctors/doctor-thumb-01.jpg"
                                  alt="User Image"
                                />
                              </a>
                              <a href="doctor-profile.html">
                                Dr. Ruby Perrin <span>Dental</span>
                              </a>
                            </h2>
                          </td>
                          <td>
                            14 Nov 2023{" "}
                            <span className="d-block text-info">10.00 AM</span>
                          </td>
                          <td>12 Nov 2023</td>
                          <td>$160</td>
                          <td>16 Nov 2023</td>
                          <td>
                            <span className="badge rounded-pill bg-success-light">
                              Confirm
                            </span>
                          </td>
                          <td>
                            <div className="table-action">
                              <a
                                href=""
                                className="btn btn-sm bg-primary-light"
                              >
                                <i className="fas fa-print" /> Print
                              </a>
                              <a href="" className="btn btn-sm bg-info-light">
                                <i className="far fa-eye" /> View
                              </a>
                            </div>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <h2 className="table-avatar">
                              <a
                                href="doctor-profile.html"
                                className="avatar avatar-sm me-2"
                              >
                                <img
                                  className="avatar-img rounded-circle"
                                  src="assets/img/doctors/doctor-thumb-10.jpg"
                                  alt="User Image"
                                />
                              </a>
                              <a href="doctor-profile.html">
                                Dr. Olga Barlow <span>Dental</span>
                              </a>
                            </h2>
                          </td>
                          <td>
                            5 Nov 2023{" "}
                            <span className="d-block text-info">5.00 PM</span>
                          </td>
                          <td>1 Nov 2023</td>
                          <td>$100</td>
                          <td>7 Nov 2023</td>
                          <td>
                            <span className="badge rounded-pill bg-success-light">
                              Confirm
                            </span>
                          </td>
                          <td>
                            <div className="table-action">
                              <a
                                href=""
                                className="btn btn-sm bg-primary-light"
                              >
                                <i className="fas fa-print" /> Print
                              </a>
                              <a href="" className="btn btn-sm bg-info-light">
                                <i className="far fa-eye" /> View
                              </a>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            {/* /Successfull payment Tab */}

            {/* Due payment Tab */}
            <div className="tab-pane fade" id="pat_prescriptions">
              <AllDueBills />
            </div>
            {/* /Prescription Tab */}
            {/* Medical Records Tab */}
            <div id="pat_medical_records" className="tab-pane fade">
              <div className="card card-table mb-0">
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table table-hover table-center mb-0">
                      <thead>
                        <tr>
                          <th>ID</th>
                          <th>Date </th>
                          <th>Description</th>
                          <th>Attachment</th>
                          <th>Created</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <a href="">#MR-0010</a>
                          </td>
                          <td>14 Nov 2023</td>
                          <td>Dental Filling</td>
                          <td>
                            <a href="#">dental-test.pdf</a>
                          </td>
                          <td>
                            <h2 className="table-avatar">
                              <a
                                href="doctor-profile.html"
                                className="avatar avatar-sm me-2"
                              >
                                <img
                                  className="avatar-img rounded-circle"
                                  src="assets/img/doctors/doctor-thumb-01.jpg"
                                  alt="User Image"
                                />
                              </a>
                              <a href="doctor-profile.html">
                                Dr. Ruby Perrin <span>Dental</span>
                              </a>
                            </h2>
                          </td>
                          <td>
                            <div className="table-action">
                              <a href="" className="btn btn-sm bg-info-light">
                                <i className="far fa-eye" /> View
                              </a>
                              <a
                                href=""
                                className="btn btn-sm bg-primary-light"
                              >
                                <i className="fas fa-print" /> Print
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <a href="">#MR-0009</a>
                          </td>
                          <td>13 Nov 2023</td>
                          <td>Teeth Cleaning</td>
                          <td>
                            <a href="#">dental-test.pdf</a>
                          </td>
                          <td>
                            <h2 className="table-avatar">
                              <a
                                href="doctor-profile.html"
                                className="avatar avatar-sm me-2"
                              >
                                <img
                                  className="avatar-img rounded-circle"
                                  src="assets/img/doctors/doctor-thumb-02.jpg"
                                  alt="User Image"
                                />
                              </a>
                              <a href="doctor-profile.html">
                                Dr. Darren Elder <span>Dental</span>
                              </a>
                            </h2>
                          </td>
                          <td>
                            <div className="table-action">
                              <a href="" className="btn btn-sm bg-info-light">
                                <i className="far fa-eye" /> View
                              </a>
                              <a
                                href=""
                                className="btn btn-sm bg-primary-light"
                              >
                                <i className="fas fa-print" /> Print
                              </a>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            {/* /Medical Records Tab */}

            {/* Billing Tab */}
            <div id="pat_billing" className="tab-pane fade">
              <GetAllBills />
            </div>
            {/* /Billing Tab */}
          </div>
          {/* Tab Content */}
        </div>
      </div>
    </>
  );
};

export default BillsBox;
