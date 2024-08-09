'use client';

import React from 'react';
import { useState } from 'react';
import { useMedia } from 'react-use';

import cn from '@utils/class-names';
import { defaultColumns } from './column';
import ProjectSummaryToolbar from './toolbar';
import MainTable from '@/app/shared/table/main-table';
import WidgetCard from '@components/cards/widget-card';
import {
  ProjectSummaryDataType,
  projectSummaryData,
  RequestSummaryDataType,
  requestSummaryData
} from '@/data/project-dashboard';
import TablePagination from '@/app/shared/table/table-pagination';
import { useTanStackTable } from '@/app/shared/tan-table/custom-table-components/use-TanStack-Table';

export default function ProjectSummary({ className }: { className?: string }) {

  const [openDrawer, setOpenDrawer] = useState(false);
  const [showFilters, setShowFilters] = useState(true);
  const isMediumScreen = useMedia('(max-width: 1860px)', false);

  const { table, setData } = useTanStackTable<RequestSummaryDataType>({
    tableData: requestSummaryData,
    columnConfig: defaultColumns,
    options: {
      initialState: {
        pagination: {
          pageIndex: 0,
          pageSize: 20,
        },
      },
      filterFns: {
        statusFilter: (row, columnId, value) => {
          if (!value) return true;
          return row.getValue(columnId).toLowerCase() === value.toLowerCase();
        },
        prodinitFilter: (row, columnId, value) => {
          if (!value) return true;
          const combinedValues = [...(row.getValue('productTags') ?? []), ...(row.getValue('initiativeTags') ?? [])];
          return combinedValues.some(tag => tag.toLowerCase().includes(value.toLowerCase()));
        },
        
        createdDate: (row, columnId, value) => {
          if (!value) return true;
          const cellDate = new Date(row.getValue(columnId));
          const filterDate = new Date(value);
          return cellDate.toDateString() === filterDate.toDateString();
        },
        dueDate: (row, columnId, value) => {
          if (!value) return true;
          const cellDate = new Date(row.getValue(columnId));
          const filterDate = new Date(value);
          return cellDate.toDateString() === filterDate.toDateString();
        },
      },
      meta: {
        handleDeleteRow: (row) => {
          setData((prev) => prev.filter((r) => r.id !== row.id));
        },
      },
      enableSorting: true,
      enableColumnResizing: true,
    },
  });

  return (
    <WidgetCard
      title="Requests Summary"
      actionClassName="ps-0 w-full @xl:ps-2 @xl:w-auto"
      headerClassName="flex-wrap gap-4 @xl:flex-nowrap"
      className={cn('flex flex-col gap-4 dark:bg-gray-100/50', className)}
      action={
        <ProjectSummaryToolbar
          table={table}
          className="w-full justify-between"
        />
      }
    >


      <MainTable table={table} variant={'modern'} />
      <TablePagination table={table} />
    </WidgetCard>
  );
}
