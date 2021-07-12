import React, { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { Row, Col } from 'antd'

import { CopyCard } from '../components/Card'
import { NavbarHBOI } from '../components/Navbar'

import { hboi, architectuurlagen, activiteiten } from '../data/hboi'

import SelectOutOf from '../components/SelectOutOf'

export default function Hboi() {
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
      <NavbarHBOI active={"hboi"} />
      <Row gutter={[16, { xs: 8, sm: 16, md: 16, lg: 16 }]}>
        <Col span={12} xs={24} sm={24} md={12} lg={12} xl={12}>
          <SelectOutOf
            title="Architectuurlagen"
            options={architectuurlagen}
            id="architectuurlagen"
            setSelectedFunction={setSelectedArchitectuurlaag}
            selected={architectuurlaag}
          />
        </Col>
        <Col span={12} xs={24} sm={24} md={12} lg={12} xl={12}>
          <SelectOutOf
            title="Activiteiten"
            options={activiteiten}
            id="activiteiten"
            setSelectedFunction={setSelectedActiviteit}
            selected={activiteit}
          />
        </Col>
      </Row>
      <br />
      {hboi[selectedHBOI] ?
        <Row gutter={[16, { xs: 8, sm: 16, md: 16, lg: 16, xl: 20 }]}>
          <Col span={6} xs={24} sm={12} md={12} lg={6} xl={6}><CopyCard copy={hboi[selectedHBOI][0]} title="Niveau 1">{hboi[selectedHBOI][0]}</CopyCard></Col>
          <Col span={6} xs={24} sm={12} md={12} lg={6} xl={6}><CopyCard copy={hboi[selectedHBOI][1]} title="Niveau 2">{hboi[selectedHBOI][1]}</CopyCard></Col>
          <Col span={6} xs={24} sm={12} md={12} lg={6} xl={6}><CopyCard copy={hboi[selectedHBOI][2]} title="Niveau 3">{hboi[selectedHBOI][2]}</CopyCard></Col>
          <Col span={6} xs={24} sm={12} md={12} lg={6} xl={6}><CopyCard copy={hboi[selectedHBOI][3]} title="Niveau 4">{hboi[selectedHBOI][3]}</CopyCard></Col>
        </Row>
        :
        null
      }
    </>
  )
}
