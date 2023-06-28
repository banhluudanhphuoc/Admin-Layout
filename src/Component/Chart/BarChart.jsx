import {
    BarChart,
    Bar,
    Cell,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ReferenceLine,
    ResponsiveContainer,
    RadialBar,
  } from 'recharts';

export const DemoBarChar = () => {
    const data = [
      {
        name: '6 March',
        pv:2000,
      },
     
      {
        name: '7 March',
        pv:-2000,
  
      },
      {
        name: '8 March',
        pv:2000,
  
      },
      {
        name: '9 March',
        pv:500,
  
      },
      {
        name: '10 March',
        pv:1500,
  
      },
      {
        name: '11 March',
        pv: -3000,
  
      },
      {
        name: '12 March',
        pv: -1200,
  
      },
    ];
    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
         
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <ReferenceLine y={0} stroke="#000" />
          <Bar dataKey='pv' radius={[10, 10, 0,0]}>
            {data.map((datum, entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={
                  datum.pv > 0
                    ? '#4FB5C9'
                    : '#F05D5E'
                }
              />
            ))}
          </Bar>
          {/* <Bar dataKey="pv" fill="#8884d8" />
          <Bar dataKey="uv" fill="#82ca9d" /> */}
        </BarChart>
      </ResponsiveContainer>
    );
  }