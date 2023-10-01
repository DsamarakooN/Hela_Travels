import { useEffect } from 'react';
import { useSelector } from "react-redux";
import { Navigate } from 'react-router-dom';
import Swal from "sweetalert2";

function withAuthentication(Component) {
  return function AuthenticatedComponent(props) {
    const user = useSelector((state) => state.user);

    useEffect(() => {
      if (!user) {
        Swal.fire({
          title: "Oops...",
          text: "Please log in before accessing this page!",
          icon: "warning",
          button: "OK",
        });
      }
    }, [user]);

    return user ? <Component {...props} /> : <Navigate to="/login" />;
  }
}

export default withAuthentication;
