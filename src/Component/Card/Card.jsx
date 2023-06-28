import { Card, Col, Row, Statistic, Divider,Progress  } from 'antd';
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { TinyArea, Column } from '@ant-design/plots';
import styled from 'styled-components';


const CartStyle = styled.div`
  display: flex;
  align-items:center;
  font-size: 14px;
  
  p{
    padding-right: 15px;
  }
`;
const CardContent = () => {
  return (
    <Row gutter={16}>
      <Col span={8}>
        <Card id="card" title="Tổng doanh số" bordered={true}  style={{height: "300px"}}>
          <Statistic value={112893} suffix="USD"></Statistic>
          <Divider />
          <CartStyle>
            <p>Doanh thu hằng ngày:</p>
            <Statistic value={1193} suffix="USD" valueStyle={{ fontSize: '14px' }}></Statistic>
          </CartStyle>
        </Card>
      </Col>
      <Col span={8}>
        <Card id="card" title="Lượt xem" bordered={true}  style={{height: "300px"}}>
          <Statistic value={8846} />
          <DemoTinyArea></DemoTinyArea>
          <Divider />
          <CartStyle>
            <p>Doanh thu hằng ngày:</p>
            <Statistic value={1193} suffix="USD" valueStyle={{ fontSize: '14px' }}></Statistic>
          </CartStyle>
        </Card>
      </Col>
      <Col span={8}>
        <Card id="card" title="Số lượng thanh toán" bordered={true} style={{height: "300px"}}>
          <Statistic value={6560} />
          <Progress percent={70} status="success " />
 
          <Divider />

        </Card>
      </Col>


    </Row>

  )

};


const DemoTinyArea = () => {
  const data = [
    264, 417, 438, 887, 309, 397, 550, 575, 563, 430, 525, 592, 492, 467, 513, 546, 983, 340, 539, 243, 226, 192,
  ];
  const config = {
    height: 60,
    autoFit: false,
    data,
    smooth: true,
    color: '#E5EDFE',
  };
  return <TinyArea {...config} />;
};

const DemoColumn = () => {
  const data = [
    {
      type: '家具家电',
      sales: 38,
    },
    {
      type: '家具家电',
      sales: 38,
    },
    {
      type: '家具家电',
      sales: 38,
    },
    {
      type: '粮油副食',
      sales: 52,
    },
    {
      type: '生鲜水果',
      sales: 61,
    },
    {
      type: '美容洗护',
      sales: 145,
    },
    {
      type: '母婴用品',
      sales: 48,
    },
    {
      type: '进口食品',
      sales: 38,
    },
    {
      type: '食品饮料',
      sales: 38,
    },
    {
      type: '家庭清洁',
      sales: 38,
    },
  ];
  const config = {
    data,
    xField: 'type',
    yField: 'sales',
    label: {
      // 可手动配置 label 数据标签位置
      position: 'middle',
      // 'top', 'bottom', 'middle',
      // 配置样式
      style: {
        fill: '#FFFFFF',
        opacity: 0.6,
      },
    },
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
    meta: {
      type: {
        alias: '类别',
      },
      sales: {
        alias: '销售额',
      },
    },
  };
  return <Column {...config} />;
};



export default CardContent;