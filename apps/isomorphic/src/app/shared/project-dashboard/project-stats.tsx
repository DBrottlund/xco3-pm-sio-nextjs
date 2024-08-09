'use client';

import cn from '@utils/class-names';
import { PiArrowUpRightBold, PiArrowDownRightBold } from 'react-icons/pi';
import SimpleBar from 'simplebar-react';
import DropdownAction from '@components/charts/dropdown-action';
import { Text, Title } from 'rizzui';
import { useState } from 'react';
import { formatNumber } from '@utils/format-number';
import {
  StatType,
  projectStatData,
  projectStatViewOptions,
} from '@/data/project-dashboard';
import  SimpleBarChart  from './simple-bar-chart'; 

export type StatCardProps = {
  className?: string;
  transaction: StatType;
};

function StatCard({ className, transaction }: StatCardProps) {
  const { icon, title,subTitle,chart, increased, percentage } = transaction;
  const Icon = icon;
  return (
    <div
      className={cn(
        'group inline-block h-[460px] w-full rounded-lg border border-muted p-4 dark:bg-gray-100/50 2xl:p-6',
        className
      )}
    >
      <div className="mb-4 flex items-start justify-between gap-5">
        <div className="grow space-y-2">
          <Text className="text-[22px] font-bold text-gray-900 dark:text-gray-700  2xl:text-[20px] 3xl:text-3xl">
          {title}
          </Text>
          <Text className="whitespace-nowrap font-medium text-gray-500 group-first:text-gray-0 dark:group-first:text-gray-500">
            {subTitle}
          </Text>
        </div>
      </div>
      {chart}
      <div className="flex items-center gap-1.5">
        <div
          className={cn(
            'flex items-center gap-1',
            increased ? 'text-green' : 'text-red'
          )}
        >
         
        </div>

      </div>
    </div>
  );
}

export default function ProjectStats({ className }: { className?: string }) {
  const [data, setData] = useState('');
  return (
    <div className={className}>
      <div className="mb-6 flex items-center justify-between">
        <Title
          as="h1"
          className="text-base font-semibold sm:text-lg xl:text-xl"
        >
          Requests
        </Title>
        <DropdownAction
          variant="flat"
          inPortal={false}
          onChange={setData}
          options={projectStatViewOptions}
          className="rounded-md border"
        />
      </div>
      <SimpleBar>
        <div className="flex items-start gap-4 sm:gap-6">
          {projectStatData.map((stat: StatType, index: number) => {
            return <StatCard 
            key={'stat-card-' + index} transaction={stat} />;
          })}
        </div>
      </SimpleBar>
    </div>
  );
}
