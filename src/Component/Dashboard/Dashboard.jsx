import React from 'react';
import {DemoRadialBar, DemoLine, DemoBarChar} from '../Chart/index';

import CardContent from "../Card/index";
import DemoColumn from "../Column/index";
import { Col, Divider, Row } from 'antd';
import Styled from 'styled-components';

const ContentStyle = Styled.div`

`;
const DashboardContents = () => {
  return (
    <ContentStyle>
      {/* <CardContent></CardContent>
      <Row gutter={16}>
        <Col className="gutter-row" span={16}>
          <DemoColumn></DemoColumn>
        </Col>
        <Col className="gutter-row" span={8}>
          <DemoColumn></DemoColumn>
        </Col>
      </Row> */}
      <Row>
        <Col span={8}>
          <DemoLine></DemoLine>

        </Col>
        <Col span={8}>
          <DemoBarChar></DemoBarChar>
        </Col>
        <Col span={8}>
          <DemoRadialBar></DemoRadialBar>
        </Col>
      </Row>
    </ContentStyle>

  )
};

export default DashboardContents;










