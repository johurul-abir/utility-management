import AllDueBills from "./AllDueBills";
import AllPaidBills from "./AllPaidBills";
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
              <AllPaidBills />
            </div>
            {/* /Successfull payment Tab */}

            {/* Due payment Tab */}
            <div className="tab-pane fade" id="pat_prescriptions">
              <AllDueBills />
            </div>
            {/* /Prescription Tab */}

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
