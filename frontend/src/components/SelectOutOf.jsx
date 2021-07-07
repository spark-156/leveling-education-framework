
import { Button } from 'rsuite';


export default function SelectOutOf({ title, options, setSelectedFunction, id, selected }) {

  function setState(element) {
    setSelectedFunction(element.target.value)
  }

  return <div id={id}>
      <div>{title}</div>
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