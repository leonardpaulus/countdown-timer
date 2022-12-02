import { useEffect, useState } from "react";

const CountdownTimer = () => {
  const [countDown, setCountDown] = useState<string>("");

  useEffect(() => {
    setInterval(() => {
      const futureDate = new Date(new Date().getFullYear() + 1, 0, 1).valueOf();
      const today = new Date().valueOf();

      const timeDiff = Math.abs(today - futureDate).valueOf();

      const days = timeDiff / (24 * 60 * 60 * 1000);
      const hours = (days % 1) * 24;
      const minutes = (hours % 1) * 60;
      const seconds = (minutes % 1) * 60;

      const addLeadingZeros = (date: number) => {
        return `${Math.floor(date)}`.length < 2
          ? "0" + `${Math.floor(date)}`
          : `${Math.floor(date)}`;
      };

      const countDownToSet = `${addLeadingZeros(days)} : ${addLeadingZeros(
        minutes
      )} : ${addLeadingZeros(hours)} : ${addLeadingZeros(seconds)}`;

      setCountDown(countDownToSet);
    }, 1000);
  }, []);

  return <h1>{countDown}</h1>;
};

export default CountdownTimer;
