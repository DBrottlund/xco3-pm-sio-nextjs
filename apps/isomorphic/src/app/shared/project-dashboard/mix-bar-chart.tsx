'use client';

import WidgetCard from '@components/cards/widget-card';
import { CustomTooltip } from '@components/charts/custom-tooltip';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { useMedia } from '@hooks/use-media';

const data = [
  {
    name: 'Jan',
    'Past Due': 50,
    'Completions On Time': -150,
  },
  {
    name: 'Feb',
    'Past Due': 20,
    'Completions On Time': -88,
  },
  {
    name: 'Mar',
    'Past Due': 44,
    'Completions On Time': -98,
  },
  {
    name: 'Apr',
    'Past Due': 23,
    'Completions On Time': -69,
  },
  {
    name: 'May',
    'Past Due': 10,
    'Completions On Time': -50,
  },
  {
    name: 'June',
    'Past Due': 50,
    'Completions On Time': -222,
  },
  {
    name: 'July',
    'Past Due': 23,
    'Completions On Time': -20,
  },{
    name: 'Aug',
    'Past Due': 12,
    'Completions On Time': -10,
  },{
    name: 'Sept',
    'Past Due': 50,
    'Completions On Time': -100,
  },{
    name: 'Nov',
    'Past Due': 32,
    'Completions On Time': -124,
  },{
    name: 'Dec',
    'Past Due': 50,
    'Completions On Time': -20,
  },
];

export default function MixBarChart({ className }: { className?: string }) {
  const isMediumScreen = useMedia('(max-width: 1200px)', false);
  return (
    <WidgetCard title={''} className={'border-none lg:p-1 -ml-[20px] -mr-[20px] '}>
      <div className="mt-5 aspect-[1060/660] w-full lg:mt-7">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            stackOffset="sign"
            barSize={isMediumScreen ? 9 : 12}
            margin={{
              top: 5,
            right: 30,
            left: 20,
            bottom: 5,
            }}
            className="[&_.recharts-cartesian-grid-vertical]:opacity-0"
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis tickLine={false} dataKey="name" />
            {/* <YAxis tickLine={false} /> */}
            <Tooltip content={<CustomTooltip />} />
            <Legend />
            <Bar dataKey="Past Due" stackId="stack" fill="#5a5fd7" radius={[2, 2, 9, 9]} />

            <Bar dataKey="Completions On Time" stackId="stack"  fill="#eab308" radius={[2, 2, 9, 9]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </WidgetCard>
  );
}
