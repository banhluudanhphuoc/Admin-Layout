import React from 'react';
import { Line } from '@ant-design/plots';


export const DemoLine = () => {
    const data = [
      {
        year: '1991',
        value: 56,
      },
      {
        year: '1992',
        value: 39,
      },
      {
        year: '1993',
        value: 64,
      },
      {
        year: '1994',
        value: 5,
      },
      {
        year: '1995',
        value: 62,
      },
      {
        year: '1996',
        value: 50,
      },
      {
        year: '1997',
        value: 62,
      },
      {
        year: '1998',
        value: 63,
      },
      {
        year: '1999',
        value: 75,
      },
      {
        year: '2000',
        value: 80,
      },
      {
        year: '2001',
        value: 34,
      },
      {
        year: '2002',
        value: 62,
      },
      {
        year: '2003',
        value: 39,
      },
      {
        year: '2004',
        value: 48,
      },
      {
        year: '2005',
        value: 49,
      },
  
    ];
    const config = {
      data,
      xField: 'year',
      yField: 'value',
      smooth: true,
      lineWidth: 40,
      color: "l(0) 0:#9747FF 0.5:#7ec2f3 1:#14F4C9",
      tooltip: {
        showMarkers: false,
      },
  
    };
    return <Line {...config} />;
  };

