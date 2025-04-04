import styles from './ButtonsConsole.module.scss'
import Button from "../Button/Button";

const ButtonsConsole = props => {
  return (
    <div className={styles.buttonsConsole}>
      <Button action={props.runTimer}>START</Button>
      <Button action={props.stopTimer}>STOP</Button>
      <Button action={props.resetTimer}>RESET</Button>
    </div>
  )
}

export default ButtonsConsole;