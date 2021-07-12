import React, { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { Row, Col } from 'antd'

import { CopyCard } from '../components/Card'
import { NavbarHBOI } from '../components/Navbar'

import { hboi, architectuurlagen, activiteiten, selectActiviteiten, selectArchitectuurlagen } from '../data/hboi'

import SelectOutOf from '../components/SelectOutOf'
import { rowStyle } from '../lib'

export default function Hboi() {
  const history = useHistory();
  const { architectuurlaag, activiteit } = useParams();

  const [selectedArchitectuurlaag, setSelectedArchitectuurlaag] = useState(architectuurlaag);
  const [selectedActiviteit, setSelectedActiviteit] = useState(activiteit);

  let htmlHBOI = null;

  useEffect(() => {
    setSelectedArchitectuurlaag(architectuurlaag);
    setSelectedActiviteit(activiteit);

  }, [architectuurlaag, activiteit])

  useEffect(() => {
    history.replace(`/hboi/${selectedArchitectuurlaag}/${selectedActiviteit}`);
  }, [selectedArchitectuurlaag, selectedActiviteit])


  if (!(selectedArchitectuurlaag == "undefined" || selectedActiviteit == "undefined")) { // both selected
    htmlHBOI = <Row style={rowStyle} gutter={[16, { xs: 8, sm: 16, md: 16, lg: 16, xl: 20 }]}>
      {hboi[`${selectedArchitectuurlaag} ${selectedActiviteit}`].map((hboiNiveau, index) => <Col key={hboiNiveau} span={6} xs={24} sm={12} md={12} lg={6} xl={6}><CopyCard copy={hboiNiveau} title={`Niveau ${index + 1}`}>{hboiNiveau}</CopyCard></Col>)}
    </Row>
  }
  if (!(selectedArchitectuurlaag === "undefined") && selectedActiviteit === "undefined") {
    console.log('architectuurlaag only selected')
  }
  if (selectedArchitectuurlaag === "undefined" && !(selectedActiviteit === "undefined")) {
    console.log('activiteit only selected')
  }

  return (
    <>
      <NavbarHBOI active={"hboi"} />
      <Row style={rowStyle} gutter={[16, { xs: 8, sm: 16, md: 16, lg: 16 }]}>
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
      {htmlHBOI}
    </>
  )
}
