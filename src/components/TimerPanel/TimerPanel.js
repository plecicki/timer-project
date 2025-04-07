import styles from './TimerPanel.module.scss';
import {useState, useEffect} from 'react';
import Display from "../Display/Display";
import ButtonsConsole from "../ButtonsConsole/ButtonsConsole";

const TimerPanel = props => {

  const [time, setTime] = useState(0);
  const [timer, setTimer] = useState();
  const [display, setDisplay] = useState('00:00:00.000');

  useEffect(() => {
    setDisplay(msToHMS(time));
  }, [time])

  const runTimer = () => {
    setTimer(setInterval(() => {
      setTime(prevValue => prevValue + 1);
    }, 1));
  }

  const stopTimer = () => {
    if (timer) clearInterval(timer);
  }

  const resetTimer = () => {
    clearInterval(timer);
    setTime(0);
  }

  const msToHMS = (ms) => {
    let seconds = ms / 1000;
    const hours = parseInt( seconds / 3600 );
    seconds = seconds % 3600;
    const minutes = parseInt( seconds / 60 );
    seconds = seconds % 60;
    return twoDigitsParser(hours)+":"+twoDigitsParser(minutes)+":"+twoDigitsParser(seconds);
  }

  const twoDigitsParser = (number) => {
    if (number < 10) return '0' + number;
    else return ''+number;
  }

  return (
    <div className={styles.timerPanel}>
      <Display>{display}</Display>
      <ButtonsConsole runTimer={runTimer} stopTimer={stopTimer} resetTimer={resetTimer}/>
    </div>
  );
}

export default TimerPanel;