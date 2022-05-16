import React from "react"

import useQueryString from "../lib/useQueryString";
import SelectOutOf from "../components/SelectOutOf";
import { rowStyle } from "../lib"
import { vaardigheden } from '../data/open-ict-vaardigheden'
import { Row, Col } from 'antd'

export default function Vaardigheden() {
    const [vaardigheid, setSelectedVaardigheid] = useQueryString("vaardigheid");

    return <>
        <Row style={rowStyle} gutter={[16, { xs: 8, sm: 16, md: 16, lg: 16 }]}>
            <Col 
                style={{
                    margin: "0 auto"
                }} 
                span={12}
                xs={24}
                sm={24} 
                md={12} 
                lg={12} 
                xl={12}
            >
                <SelectOutOf
                    title="Vaardigheden"
                    options={Object.keys(vaardigheden)}
                    id="vaardigheden"
                    setSelectedFunction={setSelectedVaardigheid}
                    selected={vaardigheid}
                />
            </Col>
        </Row>
    </>
}
