import { Navigate } from "react-router-dom";

const Protected = (props) => {
  if (localStorage.getItem("isLoggedIn") === "true") {
    return props.children;
  } else {
    return <Navigate to="/Login" replace />;
  }
};

export default Protected;
