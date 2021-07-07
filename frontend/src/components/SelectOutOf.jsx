
import { Button } from 'rsuite';

import styles from '../styles/SelectOutOf.module.css'

export default function SelectOutOf({ title, options, setSelectedFunction, id, selected }) {

  function setState(element) {
    setSelectedFunction(element.target.value)
  }

  return <div className={styles.container} id={id}>
      <div className={styles.title}>{title}</div>
      {options.map(option => {
        let appearance = "ghost"
        if (option === selected) {
          appearance = "default"
        }
        return (<Button key={option} value={option} onClick={setState} color="blue" appearance={appearance} block >
          {option}
        </Button>)
      })}
  </div>
}