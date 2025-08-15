/* import { Outlet, Navigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import MyContext from "../react_context/MyContext";

const ProtectedRoutes = () => {
  const { name, setName } = useContext(MyContext);
  console.log("first", name);
  useEffect(() => {
    setName(true);
    console.log("second", name);
  }, [name, setName]);
  return name ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoutes;
 */
