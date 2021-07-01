import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'

import SelectOutOf from '../components/SelectOutOf'

export default function Home() {
  const [selectedHBOI, setSelectedHBOI] = useState("HBOI");
  const [selectedArchitectuurlaag, setSelectedArchitectuurlaag] = useState("");
  const [selectedActiviteit, setSelectedActiviteit] = useState("");

  useEffect(() => {
    setSelectedHBOI(`${selectedArchitectuurlaag} ${selectedActiviteit}`)
  }, [selectedArchitectuurlaag, selectedActiviteit])

  const architectuurlagen = ["Gebruikersinteractie", "Organisatieprocessen", "Infrastructuur", "Software", "Hardwareinterfacing"]
  const activiteiten = ["Analyseren", "Adviseren", "Ontwerpen", "Realiseren", "Manage & Control"]

  return (
    <div className={styles.container}>
      <Head>
        <title>{selectedHBOI}</title>
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
          />
          <SelectOutOf 
            title="Activiteiten" 
            options={activiteiten} 
            id="activiteiten" 
            setSelectedFunction={setSelectedActiviteit} 
          />
        </div>
        <div className={styles.items}>
          <div>this is a card</div>
          <div>this is a card</div>
          <div>this is a card</div>
          <div>this is a card</div>
        </div>
      </main>

      <footer className={styles.footer}>
        
      </footer>
    </div>
  )
}
