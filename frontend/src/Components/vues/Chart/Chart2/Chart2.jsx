import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import './chart2.css'
export default function Chart2() {
  return (
    <div className='chart2'>
        <BarChart
      xAxis={[{ scaleType: 'band', data: ['group A', 'group B'] }]}
      series={[{ data: [4, 3, 5] }, { data: [1, 6, 3] }]}
      width={500}
      height={300}
    />
    </div>
  );
}