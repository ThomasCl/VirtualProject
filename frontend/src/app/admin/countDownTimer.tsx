"use client";
import React, { useCallback, useEffect, useState } from "react";
import { format, addMonths, differenceInMilliseconds } from "date-fns";

const CountdownTimer = () => {
  const [timeRemaining, setTimeRemaining] = useState(
    differenceInMilliseconds(addMonths(new Date(), 1).setDate(1), new Date()),
  );

  useEffect(() => {
    const calculateTimeRemaining = () => {
      setTimeRemaining((prev) => prev - 1000);
      setTimeout(calculateTimeRemaining, 1000);
    };
    calculateTimeRemaining();
  }, []);

  const calculateTime = (): [number, number, number, number] => {
    const remainingDays = timeRemaining % (1000 * 60 * 60 * 24);
    const days = Math.floor(remainingDays);
    const hours = Math.floor(days / (60 * 60 * 1000));
    const minutes = Math.floor(
      hours / (60 * 1000),
    );
    const seconds = Math.floor(
      minutes / 1000,
    );
    return [days, hours, minutes, seconds];
  };

  const [days, hours, minutes, seconds] = calculateTime();

  return (
    <div>
      <h1>Countdown to Next Month</h1>
      <p>{`Time remaining: ${days} days and ${hours} hours and ${minutes} minutes and ${seconds} seconds`}</p>
    </div>
  );
};

export default CountdownTimer;
