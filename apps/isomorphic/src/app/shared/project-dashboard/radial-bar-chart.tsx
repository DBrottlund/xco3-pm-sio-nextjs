'use client';

import WidgetCard from '@components/cards/widget-card';
import { CustomTooltip } from '@components/charts/custom-tooltip';

import {
  RadialBarChart as RadialBarChartComponent,
  RadialBar,
  Legend,
  ResponsiveContainer,
  Tooltip,
} from 'recharts';
import cn from '@utils/class-names';
import { useMedia } from '@hooks/use-media';

const data = [
  {
    name: 'Onboarding',
    requests: 10,
    fill: '#FF0000',  // Red
  },
  {
    name: 'Analyst',
    requests: 5,
    fill: '#E1306C',  // Instagram Pink
  },
  {
    name: 'Pipeline',
    requests: 15,
    fill: '#1DA1F2',  // Twitter Blue
  },
  {
    name: 'Docs',
    requests: 8,
    fill: '#4267B2',  // Facebook Blue
  },
  {
    name: 'Vault',
    requests: 15,
    fill: '#FF9900',  // Orange
  },
  {
    name: 'Compliance',
    requests: 19,
    fill: '#FF6600',  // Dark Orange
  },
  {
    name: 'Backoffice Settings',
    requests: 4,
    fill: '#32CD32',  // Lime Green
  },
  {
    name: 'Backoffice (general)',
    requests: 5,
    fill: '#8A2BE2',  // Blue Violet
  }
];

const style = {
  // top: '25%',
  // right: -190,
  transform: 'translate(240px, -10px)',
  lineHeight: '28px',
};

const styleBar = {
  // top: '40%',
  // right: -20,
  transform: 'translate(-75px, -20px)',
};

export default function RadialBarChart({ className }: { className?: string }) {
  const isMobile = useMedia('(max-width: 480px)', false);
  return (
    <WidgetCard title={''} className={'border-none lg:p-1 -ml-[20px] -mr-[20px] '}>
      <div className="mt-5 aspect-[1060/760] w-full lg:mt-7">

        <ResponsiveContainer width="100%" height="100%">
        <RadialBarChartComponent 
        style={styleBar} 
        // cx="50%" 
        // cy="50%" 
        innerRadius="30%" 
        outerRadius="100%" 
        barSize={10} 
        data={data}>

<Tooltip content={<CustomTooltip postfix='%' />} />


          <RadialBar
          startAngle={45}
            background
            dataKey="requests"
            
          />

          <Legend 
          iconSize={10} 
          layout="vertical" 
          verticalAlign="middle" 
          wrapperStyle={style} 
          />

        </RadialBarChartComponent>
      </ResponsiveContainer>

      </div>
    </WidgetCard>
  );
}
