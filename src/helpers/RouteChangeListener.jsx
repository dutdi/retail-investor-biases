import { useLocation } from "react-router-dom";
import { useContext, useEffect } from "react";
import { Context } from "./Context";

const RouteChangeListener = () => {
  const { setDetailsButton } = useContext(Context);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== "/test") {
      setDetailsButton(true);
    }
  }, [location, setDetailsButton]);

  return null;
};

export default RouteChangeListener;
