import { useState, useEffect } from "react";
import { addMonths, differenceInMilliseconds, set } from "date-fns";

// Custom Hook
export function useCountdownTimer() {
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
    const intervalId = setInterval(() => {
      setTimeRemaining((prev) => prev - 1000);
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  // Calculate days, hours, minutes, and seconds
  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
  );
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  return {
    days,
    hours,
    minutes,
    seconds,
  };
}

const DateCard = ({
  date,
  label,
}: {
  date: React.ReactNode;
  label: string;
}) => {
  return (
    <div className="flex select-none flex-col items-center gap-4">
      <div className="flex aspect-square w-[60px] items-center justify-center rounded-xl border bg-background/90 p-2 text-3xl text-primary lg:w-[80px] lg:text-4xl">
        {date}
      </div>
      <span className="text-sm text-foreground">{label}</span>
    </div>
  );
};

// Component using the custom hook
const CountdownDisplay = () => {
  const { days, hours, minutes, seconds } = useCountdownTimer();

  return (
    <div className="mx-auto mb-2 flex max-w-max gap-4 font-bold tabular-nums">
      <DateCard date={days} label="Days" />
      <DateCard date={hours} label="Hours" />
      <DateCard date={minutes} label="Minutes" />
      <DateCard date={seconds} label="Seconds" />
    </div>
  );
};

export default CountdownDisplay;
