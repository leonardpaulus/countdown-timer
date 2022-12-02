import { useEffect, useState } from "react";

interface CountdownTimerProps {
  year: number;
  month: number;
  day: number;
}

const CountdownTimer = ({ year, month, day }: CountdownTimerProps) => {
  const [countDown, setCountDown] = useState<string>("");

  useEffect(() => {
    setInterval(() => {
      const composedDate = `${year}-${month}-${day}`;

      const pastDate = new Date(composedDate).getTime().valueOf();
      //   const futureDate = new Date(new Date().getFullYear() + 1, 0, 1).valueOf();
      const today = new Date().valueOf();

      const timeDiff = Math.abs((today - pastDate).valueOf());

      let seconds = Math.floor(timeDiff / 1000);
      let minutes = Math.floor(seconds / 60);
      let hours = Math.floor(minutes / 60);
      let days = Math.floor(hours / 24);
      let months = Math.floor(days / 30);
      let years = Math.floor(days / 365);

      seconds %= 60;
      minutes %= 60;
      hours %= 24;
      days %= 30;
      months %= 12;

      const addLeadingZeros = (date: number) => {
        return `${Math.floor(date)}`.length < 2
          ? "0" + `${Math.floor(date)}`
          : `${Math.floor(date)}`;
      };

      const countDownToSet = `${addLeadingZeros(years)} : ${addLeadingZeros(
        months
      )} : ${addLeadingZeros(days)} : ${addLeadingZeros(
        hours
      )} : ${addLeadingZeros(minutes)} : ${addLeadingZeros(seconds)}`;

      setCountDown(countDownToSet);
    }, 1000);
  }, []);

  return <h1>{countDown}</h1>;
};

export default CountdownTimer;
