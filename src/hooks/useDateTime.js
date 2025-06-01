import { useState, useEffect } from 'react';

export default function useDateTime() {
  const getCurrentDateTime = () => {
    const now = new Date();
    return { now };
  };

  const [dateTime, setDateTime] = useState(getCurrentDateTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(getCurrentDateTime());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return dateTime;
};