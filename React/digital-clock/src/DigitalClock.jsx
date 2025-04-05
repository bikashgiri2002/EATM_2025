import React, { useEffect, useState } from 'react';
import './DigitalClock.css'; // Import the CSS

const DigitalClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timerId);
  }, []);

  const formatTime = (value) => value.toString().padStart(2, '0');

  return (
    <div className="digital-clock">
      {formatTime(time.getHours())}:
      {formatTime(time.getMinutes())}:
      {formatTime(time.getSeconds())}
    </div>
  );
};

export default DigitalClock;
