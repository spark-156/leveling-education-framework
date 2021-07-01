import React, { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'

import styles from '../styles/App.module.css'

import { hboi } from '../data/hboi'

import SelectOutOf from '../components/SelectOutOf'

export default function Home() {
  const history = useHistory();
  const { architectuurlaag, activiteit } = useParams();

  const [selectedHBOI, setSelectedHBOI] = useState(`${architectuurlaag} ${activiteit}`);
  const [selectedArchitectuurlaag, setSelectedArchitectuurlaag] = useState(architectuurlaag);
  const [selectedActiviteit, setSelectedActiviteit] = useState(activiteit);
  
  useEffect(() => {
    setSelectedArchitectuurlaag(architectuurlaag);
    setSelectedActiviteit(activiteit);
    setSelectedHBOI(`${architectuurlaag} ${activiteit}`)
  }, [architectuurlaag, activiteit])
  
  useEffect(() => {
    if (!selectedArchitectuurlaag) return;
    if (!selectedActiviteit) return;
    
    history.replace(`/hboi/${selectedArchitectuurlaag}/${selectedActiviteit}`);
  }, [selectedArchitectuurlaag, selectedActiviteit])
  
  const architectuurlagen = ["Gebruikersinteractie", "Organisatieprocessen", "Infrastructuur", "Software", "Hardwareinterfacing"]
  const activiteiten = ["Analyseren", "Adviseren", "Ontwerpen", "Realiseren", "Manage & Control"]
  

  return (
      <>
        <div className={styles.select}>
          <SelectOutOf 
            title="Architectuurlagen" 
            options={architectuurlagen} 
            id="architectuurlagen" 
            setSelectedFunction={setSelectedArchitectuurlaag}
            defaultSelectIndex={architectuurlagen.indexOf(selectedArchitectuurlaag)}
          />
          <SelectOutOf 
            title="Activiteiten" 
            options={activiteiten} 
            id="activiteiten" 
            setSelectedFunction={setSelectedActiviteit}
            defaultSelectIndex={activiteiten.indexOf(selectedActiviteit)}
          />
        </div>
        {hboi[selectedHBOI] ? 
          <div className={styles.items}>
            <div>{hboi[selectedHBOI][0]}</div>
            <div>{hboi[selectedHBOI][1]}</div>
            <div>{hboi[selectedHBOI][2]}</div>
            <div>{hboi[selectedHBOI][3]}</div>
          </div> 
        : 
          null
        }
    </>
  )
}
