
import styles from '../styles/SelectOutOf.module.css'

export default function SelectOutOf({ title, options, setSelectedFunction, id }) {

  function setState(element) {
    setSelectedFunction(element.target.value)
  }

  return <div className={styles.container} id={id}>
      <div className={styles.title}>{title}</div>
      <div onChange={setState}>
        {options.map(option => (
          <>
            <input id={option} type="radio" value={option} name={id}/>
            <label htmlFor={option}>{option}</label>
            <br />
          </>
        ))}
      </div>
  </div>
}