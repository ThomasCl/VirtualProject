"use client";
import React, { useEffect, useState } from "react";
import { addMonths, differenceInMilliseconds, set } from "date-fns";

const CountdownTimer = () => {
  const [timeRemaining, setTimeRemaining] = useState(
    differenceInMilliseconds(
      addMonths(
        set(new Date(), {
          hours: 0,
          minutes: 0,
          seconds: 0,
          milliseconds: 0,
        }),
        1,
      ).setDate(1),
      new Date(),
    ),
  );

  useEffect(() => {
    const calculateTimeRemaining = () => {
      setTimeRemaining((prev) => prev - 1000);
      setTimeout(calculateTimeRemaining, 1000);
    };
    calculateTimeRemaining();
  }, []);

  return (
    <div>
      <h1>Countdown to Next Month</h1>
      <p>{`Time remaining: ${Math.floor(
        timeRemaining / (1000 * 60 * 60 * 24),
      )} days and ${Math.floor(
        (timeRemaining % (1000 * 60 * 60 * 24)) / (60 * 60 * 1000),
      )} hours and ${Math.floor(
        ((timeRemaining % (1000 * 60 * 60 * 24)) % (60 * 60 * 1000)) /
          (60 * 1000),
      )} minutes and ${Math.floor(
        (((timeRemaining % (1000 * 60 * 60 * 24)) % (60 * 60 * 1000)) %
          (60 * 1000)) /
          1000,
      )} seconds`}</p>
    </div>
  );
};

export default CountdownTimer;
