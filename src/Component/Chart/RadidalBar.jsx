import {
    RadialBarChart,
    Legend,
    ResponsiveContainer,
    RadialBar,
  } from 'recharts';
export const DemoRadialBar = () => {
    const data1 = [
      {
        name: 'Bank',
        uv: 31.47,
        fill: '#F3BA2F',
      },
      {
        name: 'Token',
        uv: 26.69,
        fill: '#54C2C1',
      },
      {
        name: 'Cash',
        uv: 15.69,
        fill: '#0F0F3F',
      },
      {
        name: 'Stock',
        uv: 8.22,
        fill: '#9020E9',
      },
  
    ];
    const style = {
      top: '50%',
      right: 0,
      transform: 'translate(0, -50%)',
      lineHeight: '24px',
    };
    return (
      <ResponsiveContainer width="100%" height="100%" minHeight={500} minWidth={500}>
        <RadialBarChart startAngle={90} endAngle={450} cx="50%" cy="50%" innerRadius="10%" outerRadius="80%" barSize={10} data={data1}>
          <RadialBar
            minAngle={15}
            label={{ position: 'insideStart', fill: '#fff' }}
            background
            clockWise
            dataKey="uv"
          />
          <Legend iconSize={10} layout="vertical" verticalAlign="middle" wrapperStyle={style} />
        </RadialBarChart>
      </ResponsiveContainer>
  
    );
  }

  