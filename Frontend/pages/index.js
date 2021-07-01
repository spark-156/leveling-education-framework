import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'

import { hboi } from '../data/hboi'

import SelectOutOf from '../components/SelectOutOf'

export default function Home({ hboiData }) {
  const router = useRouter();
  const { query } = useRouter();

  const [selectedHBOI, setSelectedHBOI] = useState(false);
  const [selectedArchitectuurlaag, setSelectedArchitectuurlaag] = useState();
  const [selectedActiviteit, setSelectedActiviteit] = useState();

  useEffect(() => {
    if (!selectedArchitectuurlaag) return;
    if (!selectedActiviteit) return;
    router.push({pathname: '/', query: { architectuurlaag: selectedArchitectuurlaag, activiteit: selectedActiviteit} })
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
        {hboiData[selectedHBOI]
        ? 
          <div className={styles.items}>
            <div>{hboiData[selectedHBOI][0]}</div>
            <div>{hboiData[selectedHBOI][1]}</div>
            <div>{hboiData[selectedHBOI][2]}</div>
            <div>{hboiData[selectedHBOI][3]}</div>
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

export const getStaticProps = async () => {
  return {
    props: {
      hboiData: hboi,
    }
  }
}