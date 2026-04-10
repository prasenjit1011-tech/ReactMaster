import { useState } from "react";

export default function useButton() {
  const [status, setStatus] = useState(false);
  const [cnt, setCnt] = useState(0);
  const handleClick = () => {
    setStatus(status => {
      const newStatus = !status;
      return newStatus;
    });
    
    setCnt(cnt => cnt + 1);    
  };
  return { handleClick, status, cnt };
}