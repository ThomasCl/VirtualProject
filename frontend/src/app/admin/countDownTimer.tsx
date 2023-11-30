"use client";

import { addMonths, differenceInMilliseconds, set } from "date-fns";
import { useEffect, useState } from "react";

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
      {Math.floor(timeRemaining / (1000 * 60 * 60 * 24)) !== 0 &&
        Math.floor(timeRemaining / (1000 * 60 * 60 * 24)) + " days and "}
      {Math.floor(
        (timeRemaining % (1000 * 60 * 60 * 24)) / (60 * 60 * 1000),
      ) !== 0 &&
        Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (60 * 60 * 1000)) +
          " hours and "}
      {Math.floor(
        ((timeRemaining % (1000 * 60 * 60 * 24)) % (60 * 60 * 1000)) /
          (60 * 1000),
      ) !== 0 &&
        Math.floor(
          ((timeRemaining % (1000 * 60 * 60 * 24)) % (60 * 60 * 1000)) /
            (60 * 1000),
        ) + " minutes and "}
      {Math.floor(
        (((timeRemaining % (1000 * 60 * 60 * 24)) % (60 * 60 * 1000)) %
          (60 * 1000)) /
          1000,
      ) !== 0 &&
        Math.floor(
          (((timeRemaining % (1000 * 60 * 60 * 24)) % (60 * 60 * 1000)) %
            (60 * 1000)) /
            1000,
        ) + " seconds"}
    </div>
  );
};

export default CountdownTimer;

{
  /* <p>{`${
  Math.floor(timeRemaining / (1000 * 60 * 60 * 24)) !== 0 && "days and"
} ${Math.floor(
  (timeRemaining % (1000 * 60 * 60 * 24)) / (60 * 60 * 1000),
)} hours and ${Math.floor(
  ((timeRemaining % (1000 * 60 * 60 * 24)) % (60 * 60 * 1000)) /
    (60 * 1000),
)} minutes and ${Math.floor(
  (((timeRemaining % (1000 * 60 * 60 * 24)) % (60 * 60 * 1000)) %
    (60 * 1000)) /
    1000,
)} seconds`}</p> */
}
