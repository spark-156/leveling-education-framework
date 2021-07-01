import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'

import { hboi } from '../data/hboi'

import SelectOutOf from '../components/SelectOutOf'

export default function Home() {
  const router = useRouter();
  const { architectuurlaag, activiteit } = router.query;

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
    
    router.push({ pathname: '/hboi', query: { architectuurlaag: selectedArchitectuurlaag, activiteit: selectedActiviteit } }, undefined, { shallow: true });
  }, [selectedArchitectuurlaag, selectedActiviteit])
  
  const architectuurlagen = ["Gebruikersinteractie", "Organisatieprocessen", "Infrastructuur", "Software", "Hardwareinterfacing"]
  const activiteiten = ["Analyseren", "Adviseren", "Ontwerpen", "Realiseren", "Manage & Control"]
  

  return (
    <div className={styles.container}>
      <Head>
        <title>HBO-I Killer</title>
        <meta name="description" content="A better HBO-I browser" />
        <link rel="icon" href="/favico.ico" />
      </Head>

      <main>
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
      </main>

      <footer className={styles.footer}>
        
      </footer>
    </div>
  )
}
