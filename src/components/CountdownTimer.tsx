import { useEffect, useState } from "react";

interface CountdownTimerProps {
  year: number;
  month: number;
  day: number;
}

const CountdownTimer = ({ year, month, day }: CountdownTimerProps) => {
  const [days, setDays] = useState<string>("");
  const [hours, setHours] = useState<string>("");
  const [minutes, setMinutes] = useState<string>("");
  const [seconds, setSeconds] = useState<string>("");

  useEffect(() => {
    setInterval(() => {
      runCountdown();
    }, 1000);
  }, []);

  const runCountdown = () => {
    const futureDate = new Date(new Date().getFullYear() + 1, 0, 1).valueOf();
    const today = new Date().valueOf();

    const timeDiff = Math.abs(today - futureDate).valueOf();

    const days = timeDiff / (24 * 60 * 60 * 1000);
    const hours = (days % 1) * 24;
    const minutes = (hours % 1) * 60;
    const seconds = (minutes % 1) * 60;

    setSeconds(Math.floor(seconds).toString());
    setMinutes(Math.floor(minutes).toString());
    setHours(Math.floor(hours).toString());
    setDays(Math.floor(days).toString());
  };

  return <h1>{`${days}:${hours}:${minutes}:${seconds}`}</h1>;
};

export default CountdownTimer;
