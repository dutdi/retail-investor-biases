import { useEffect, useState } from "react";

const Expire = ({ setShowWrongAnswer, delay, children }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      setShowWrongAnswer(false);
    }, delay);

    // Cleanup on unmount
    return () => clearTimeout(timer);
  }, [delay, setShowWrongAnswer]);

  return visible ? <div>{children}</div> : null;
};

export default Expire;
