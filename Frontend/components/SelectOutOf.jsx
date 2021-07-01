
import styles from '../styles/SelectOutOf.module.css'

export default function SelectOutOf({ title, options, selectedFunction, id }) {


  return <div className={styles.container}>
      <div className={styles.title}>{title}</div>
      <form>
        {options.map(option => (
          <>
            <input id={option} type="radio" value={option} name={id}/>
            <label htmlFor={option}>{option}</label>
            <br />
          </>
        ))}
      </form>
  </div>
}