import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Row, Col, Divider } from 'antd'

import { CopyCard } from '../components/Card'

import { hboi, architectuurlagen, activiteiten, activiteitenPointer, architectuurlagenPointer } from '../data/hboi'

import SelectOutOf from '../components/SelectOutOf'
import { rowStyle } from '../lib'

import { useQuery } from '../lib/useQuery';

export default function Hboi() {
  // const history = useHistory();
  const query = useQuery();

  const [selectedArchitectuurlaag, setSelectedArchitectuurlaag] = useState(query.get("architectuurlaag"));
  const [selectedActiviteit, setSelectedActiviteit] = useState(query.get("activiteit"));

  // useEffect(() => {
  //   setSelectedArchitectuurlaag(architectuurlaag);
  //   setSelectedActiviteit(activiteit);
  // }, [architectuurlaag, activiteit])

  // useEffect(() => {
  //   history.push({
  //     search: '?architectuurlaag=${}
  //   })
  // }, [selectedArchitectuurlaag, history])

  // useEffect(() => {
  //   history.push({
  //     search: '?activiteit=blue'
  //   })
  // }, [selectedActiviteit, history])


  let htmlHBOI = null;

  if (!selectedArchitectuurlaag && !selectedActiviteit) { // none selected
    htmlHBOI = <>
      {Object.keys(hboi).map(key => <>
        <Divider orientation="left">{key}</Divider>
        <Row style={rowStyle} gutter={[16, { xs: 8, sm: 16, md: 16, lg: 16, xl: 20 }]}>
          {hboi[key].map((niveau, index) => (
            <Col key={niveau} span={6} xs={24} sm={12} md={12} lg={6} xl={6}>
              <CopyCard copy={niveau} title={`Niveau ${index + 1}`}>{niveau}</CopyCard>
            </Col>
          ))}
        </Row>
      </>)}
    </>
  }
  if (selectedArchitectuurlaag && selectedActiviteit) { // both selected
    htmlHBOI = <>
      <Divider orientation="left">{selectedArchitectuurlaag} {selectedActiviteit}</Divider>
      <Row style={rowStyle} gutter={[16, { xs: 8, sm: 16, md: 16, lg: 16, xl: 20 }]}>
        {hboi[`${selectedArchitectuurlaag} ${selectedActiviteit}`].map((hboiNiveau, index) => <Col key={hboiNiveau} span={6} xs={24} sm={12} md={12} lg={6} xl={6}>
          <CopyCard copy={hboiNiveau} title={`Niveau ${index + 1}`}>{hboiNiveau}</CopyCard>
        </Col>)}
      </Row>
    </>
  }
  if (!selectedArchitectuurlaag && selectedActiviteit) { // architectuurlaag only selected
    htmlHBOI = architectuurlagenPointer[selectedArchitectuurlaag].map((architectuurlaagValue, index) => <>
      <Divider orientation="left">{selectedArchitectuurlaag} {activiteiten[index]}</Divider>
      <Row style={rowStyle} gutter={[16, { xs: 8, sm: 16, md: 16, lg: 16, xl: 20 }]}>
        {architectuurlaagValue.map((niveau, index) => (
          <Col key={niveau} span={6} xs={24} sm={12} md={12} lg={6} xl={6}>
            <CopyCard copy={niveau} title={`Niveau ${index + 1}`}>{niveau}</CopyCard>
          </Col>
        ))}
      </Row>
    </>)
  }
  if (selectedArchitectuurlaag && !selectedActiviteit) { // activiteit only selected
    htmlHBOI = activiteitenPointer[selectedActiviteit].map((activiteitValue, index) => <>
      <Divider orientation="left">{architectuurlagen[index]} {selectedActiviteit}</Divider>
      <Row style={rowStyle} gutter={[16, { xs: 8, sm: 16, md: 16, lg: 16, xl: 20 }]}>
        {activiteitValue.map((niveau, index) => (
          <Col key={niveau} span={6} xs={24} sm={12} md={12} lg={6} xl={6}>
            <CopyCard copy={niveau} title={`Niveau ${index + 1}`}>{niveau}</CopyCard>
          </Col>
        ))}
      </Row>
    </>)
  }

  return (<>
    <Row style={rowStyle} gutter={[16, { xs: 8, sm: 16, md: 16, lg: 16 }]}>
      <Col span={12} xs={24} sm={24} md={12} lg={12} xl={12}>
        <SelectOutOf
          title="Architectuurlagen"
          options={architectuurlagen}
          id="architectuurlagen"
          setSelectedFunction={setSelectedArchitectuurlaag}
          selected={selectedArchitectuurlaag}
        />
      </Col>
      <Col span={12} xs={24} sm={24} md={12} lg={12} xl={12}>
        <SelectOutOf
          title="Activiteiten"
          options={activiteiten}
          id="activiteiten"
          setSelectedFunction={setSelectedActiviteit}
          selected={selectedActiviteit}
        />
      </Col>
    </Row>
    {htmlHBOI}
  </>)
}
