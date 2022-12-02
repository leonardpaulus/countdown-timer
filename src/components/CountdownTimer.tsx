import { useEffect, useState } from "react";
import styles from "./CountdownTimer.module.scss";

interface CountdownTimerProps {
  year: number;
  month: number;
  day: number;
}

const CountdownTimer = ({ year, month, day }: CountdownTimerProps) => {
  const [seconds, setSeconds] = useState<string>("");
  const [minutes, setMinutes] = useState<string>("");
  const [hours, setHours] = useState<string>("");
  const [days, setDays] = useState<string>("");
  const [months, setMonths] = useState<string>("");
  const [years, setYears] = useState<string>("");

  useEffect(() => {
    setInterval(() => {
      const composedDate = `${year}-${month}-${day}`;

      const pastDate = new Date(composedDate).getTime().valueOf();
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

      setYears(`${addLeadingZeros(years)}`);
      setMonths(`${addLeadingZeros(months)}`);
      setDays(`${addLeadingZeros(days)}`);
      setHours(`${addLeadingZeros(hours)}`);
      setMinutes(`${addLeadingZeros(minutes)}`);
      setSeconds(`${addLeadingZeros(seconds)}`);
    }, 1000);
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.digits}>
        <span>{`${years}`}</span>
        <span>Years</span>
      </div>
      <div className={styles.digits}>
        <span>{`${months}`}</span>
        <span>Months</span>
      </div>
      <div className={styles.digits}>
        <span>{`${days}`}</span>
        <span>Days</span>
      </div>
      <div className={styles.digits}>
        <span>{`${hours}`}</span>
        <span>Hours</span>
      </div>
      <div className={styles.digits}>
        <span>{`${minutes}`}</span>
        <span>Minutes</span>
      </div>
      <div className={styles.digits}>
        <span>{`${seconds}`}</span>
        <span>Seconds</span>
      </div>
    </div>
  );
};

export default CountdownTimer;
