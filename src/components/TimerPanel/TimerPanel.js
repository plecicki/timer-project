import styles from './TimerPanel.module.scss';
import {useState, useEffect} from 'react';
import Display from "../Display/Display";
import ButtonsConsole from "../ButtonsConsole/ButtonsConsole";
import {msToHMS} from "../../Helper/Helper";

const TimerPanel = props => {

  const [time, setTime] = useState(0);
  const [timer, setTimer] = useState();
  const [display, setDisplay] = useState('00:00:00.000');

  useEffect(() => {
    setDisplay(msToHMS(time));
  }, [time])

  const runTimer = () => {
    setTimer(setInterval(() => {
      setTime(prevValue => prevValue + 100);
    }, 100));
  }

  const stopTimer = () => {
    if (timer) clearInterval(timer);
  }

  const resetTimer = () => {
    clearInterval(timer);
    setTime(0);
  }

  return (
    <div className={styles.timerPanel}>
      <Display>{display}</Display>
      <ButtonsConsole runTimer={runTimer} stopTimer={stopTimer} resetTimer={resetTimer}/>
    </div>
  );
}

export default TimerPanel;