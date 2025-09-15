import { FaCircle } from "react-icons/fa";
import "./Loading.css";

function Loading() {
  return (
    <div className="loading">
        <img src="logo.avif" alt="logo" />
        <div className="loading-text">
            <FaCircle className="loading-icon"/>
            <FaCircle className="loading-icon"/>
            <FaCircle className="loading-icon"/>
        </div>
    </div>
  );
}

export default Loading;
