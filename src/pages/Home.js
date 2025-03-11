import reacr from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Home() {
  const navigate = useNavigate();
  return (
    <>
      <div className="home">
        <h1>Wellcome to the home page</h1>
        <button onClick={() => navigate("order-summary")}>Place Order</button>
      </div>
    </>
  );
}
export default Home;
