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
    complete: 50,
  },
  {
    name: 'Feb',
    complete: 90,
  },
  {
    name: 'Mar',
    complete: 20,
  },
  {
    name: 'Apr',
    complete: 65,
  },
  {
    name: 'May',
    complete: 82,
  },
  {
    name: 'June',
    complete: 99,
  },
  {
    name: 'July',
    complete: 12,
  },{
    name: 'Aug',
    complete: 66,
  },{
    name: 'Sept',
    complete: 77,
  },{
    name: 'Nov',
    complete: 88,
  },{
    name: 'Dec',
    complete: 33,
  },
];

export default function SimpleBarChart({ className }: { className?: string }) {
  const isMediumScreen = useMedia('(max-width: 1200px)', false);
  return (
    <WidgetCard title={''} className={'border-none lg:p-1 -ml-[20px] -mr-[20px] '}>
      <div className="mt-5 aspect-[1060/660] w-full lg:mt-7">
      <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            barSize={isMediumScreen ? 9 : 12}
            margin={{
              left: -10,
            }}
            className="[&_.recharts-cartesian-grid-vertical]:opacity-0"
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis tickLine={false} dataKey="name" />
            <YAxis tickLine={false} />
            <Tooltip content={<CustomTooltip postfix='%' />} />
            {/* <Legend /> */}
            <Bar dataKey="complete" fill="#5a5fd7" radius={[2, 2, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </WidgetCard>
  );
}
