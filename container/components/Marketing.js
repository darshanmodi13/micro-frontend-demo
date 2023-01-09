import React, { useRef, useEffect } from "react";
import mount from "marketing/Marketing";
const Marketing = () => {
  const ref = useRef(null);
  useEffect(() => {
    mount(ref.current);
  }, []);
  return <div ref={ref}>Marketing</div>;
};

export default Marketing;
