import React, { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { Grid, Col } from 'rsuite'

import { Card } from '../components/Card'

import { hboi, architectuurlagen, activiteiten } from '../data/hboi'

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
    history.replace(`/hboi/${selectedArchitectuurlaag}/${selectedActiviteit}`);
  }, [selectedArchitectuurlaag, selectedActiviteit])


  return (
    <>
      <Grid>
        <Col xs={24} sm={24} md={12} lg={12}>
          <SelectOutOf
            title="Architectuurlagen"
            options={architectuurlagen}
            id="architectuurlagen"
            setSelectedFunction={setSelectedArchitectuurlaag}
            selected={architectuurlaag}
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={12}>
          <SelectOutOf
            title="Activiteiten"
            options={activiteiten}
            id="activiteiten"
            setSelectedFunction={setSelectedActiviteit}
            selected={activiteit}
          />
        </Col>
      </Grid>
      {hboi[selectedHBOI] ?
        <Grid>
          <Col xs={24} sm={24} md={6} lg={6}><Card copy title="Niveau 1" content={hboi[selectedHBOI][0]} /></Col>
          <Col xs={24} sm={24} md={6} lg={6}><Card copy title="Niveau 2" content={hboi[selectedHBOI][1]} /></Col>
          <Col xs={24} sm={24} md={6} lg={6}><Card copy title="Niveau 3" content={hboi[selectedHBOI][2]} /></Col>
          <Col xs={24} sm={24} md={6} lg={6}><Card copy title="Niveau 4" content={hboi[selectedHBOI][3]} /></Col>
        </Grid>
        :
        null
      }
    </>
  )
}
