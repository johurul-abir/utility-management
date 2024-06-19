// import { toast } from "react-toastify";
// import Swal from "sweetalert2";
import Notice from "../Notice/Notice";
import Support from "../support/Support";
import Team from "../team/Team";
import "./home.scss";

const Home = () => {
  return (
    <>
      <div className="banner">
        <div className="banner-title">
          <h4>Wellcome our</h4>
          <h1>Vashantek Rehabilitation Project</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error
            mollitia, nisi nobis reiciendis cum officia. Vero beatae officiis
            laudantium aliquid placeat fugiat, similique minima, unde non amet
            iure hic ex?
          </p>
          <button className="btn btn-info">Show more Details</button>
        </div>
      </div>

      <Support />
      <Notice />
      <Team />
    </>
  );
};

export default Home;
