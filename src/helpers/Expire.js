import React, { useEffect, useState } from 'react';

const Expire = ({ setShowWrongAnswer, delay, children }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setVisible(false);
      setShowWrongAnswer(false);
    }, delay);
  }, []);

  return visible ? <div>{children}</div> : <div></div>;
};

export default Expire;
