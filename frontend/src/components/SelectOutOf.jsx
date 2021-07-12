
import { Button } from 'antd';

import { CopyCard } from './Card';

export default function SelectOutOf({ title, options, setSelectedFunction, selected }) {

  const setState = (value) => {
    if (value === selected) {
      return setSelectedFunction(undefined);
    } else {
      return setSelectedFunction(value);
    }
  }

  return <CopyCard title={title}>{
    options.map(option => {
      let appearance = ""
      if (option === selected) {
        appearance = "primary"
      }
      return (<Button key={option} onClick={(e) => { setState(e.target.innerText) }} color="blue" type={appearance} block >
        {option}
      </Button>)
    })
  }</CopyCard>
}