
import { Button } from 'rsuite';

import { CopyCard } from './Card';

export default function SelectOutOf({ title, options, setSelectedFunction, selected }) {

  function setState(element) {
    setSelectedFunction(element.target.value)
  }

  return <CopyCard title={title}>{
    options.map(option => {
      let appearance = "ghost"
      if (option === selected) {
        appearance = "default"
      }
      return (<Button key={option} value={option} onClick={setState} color="blue" appearance={appearance} block >
        {option}
      </Button>)
    })
  }</CopyCard>
}