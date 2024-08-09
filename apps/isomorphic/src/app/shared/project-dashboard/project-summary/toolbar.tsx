'use client';

import { useState } from 'react';
import { useMedia } from 'react-use';
import { getDateRangeStateValues } from '@utils/get-formatted-date';
import {
  PiTrash,
  PiFunnel,
  PiTextColumns,
  PiTrashDuotone,
  PiMagnifyingGlassBold,
} from 'react-icons/pi';

import { type Table as ReactTableType } from '@tanstack/react-table';
import StatusField from '@/app/shared/controlled-table/status-field';
import {
  ActionIcon,
  Badge,
  Button,
  Checkbox,
  Popover,
  Text,
  Title,
  Input,
} from 'rizzui';
import cn from '@utils/class-names';
import PriceField from '@/app/shared/controlled-table/price-field';
import DateFiled from '@/app/shared/controlled-table/date-field';
import { FilterDrawerView } from '@/app/shared/controlled-table/table-filter';

export const statusOptions = [
  {
    label: 'Request',
    value: 'request',
  },
  {
    label: 'Viewed',
    value: 'viewed',
  },
  {
    label: 'Assigned',
    value: 'assigned',
  },
  {
    label: 'Past Due',
    value: 'pastDue',
  },  
  {
    label: 'Merged',
    value: 'merged',
  },  
  {
    label: 'Completed',
    value: 'completed',
  },  

];

interface TableToolbarProps<T extends Record<string, any>> {
  table: ReactTableType<T>;
  className?: string;
}

export default function ProjectSummaryToolbar<
  TData extends Record<string, any>,
>({ table, className }: TableToolbarProps<TData>) {

  const [openDrawer, setOpenDrawer] = useState(false);
  const [showFilters, setShowFilters] = useState(true);
  const isMediumScreen = useMedia('(max-width: 1860px)', false);
  const isMultipleSelected = table.getSelectedRowModel().rows.length > 1;

  const {
    options: { meta },
  } = table;

  return (
    <div className={cn('flex items-center justify-end gap-4', className)}>
       <div className="flex flex-wrap items-center gap-4">
        <Input
          type="search"
          placeholder="Search by title..."
          value={table.getState().globalFilter ?? ''}
          onClear={() => table.setGlobalFilter('')}
          onChange={(e) => table.setGlobalFilter(e.target.value)}
          inputClassName="h-9"
          clearable={true}
          prefix={<PiMagnifyingGlassBold className="h-4 w-4" />}
        />
        {!isMediumScreen && showFilters && <FilterElements table={table} />}
      </div>
      <FilterElements table={table} />
      {table && (
        <Popover shadow="sm" placement="bottom-end">
          <Popover.Trigger>
            <ActionIcon
              variant="outline"
              title={'Toggle Columns'}
              className="h-auto w-auto p-1"
            >
              <PiTextColumns strokeWidth={3} className="size-6" />
            </ActionIcon>
          </Popover.Trigger>
          <Popover.Content className="z-0">
            <div className="px-0.5 pt-2 text-left rtl:text-right">
              <Title as="h6" className="mb-1 px-0.5 text-sm font-semibold">
                Toggle Columns
              </Title>
              <div className="grid grid-cols-2 gap-x-0 gap-y-5 px-1.5 pb-3.5 pt-4">
                {table.getAllLeafColumns().map((column) => {
                  return (
                    typeof column.columnDef.header === 'string' &&
                    column.columnDef.header.length > 0 && (
                      <Checkbox
                        key={column.id}
                        label={<>{column.columnDef.header}</>}
                        checked={column.getIsVisible()}
                        onChange={column.getToggleVisibilityHandler()}
                      />
                    )
                  );
                })}
              </div>
            </div>
          </Popover.Content>
        </Popover>
      )}

      
    </div>
  );
}

function FilterElements<T extends Record<string, any>>({
  table,
}: TableToolbarProps<T>) {
  const isFiltered =
    table.getState().globalFilter || table.getState().columnFilters.length > 0;
  
    const dueDate =
    table.getColumn('deadline')?.getFilterValue() ?? ([null, null] as any);
  return (
    <>
      <DateFiled
        className="w-full"
        placeholderText="Select due date"
        endDate={getDateRangeStateValues(dueDate[1])}
        selected={getDateRangeStateValues(dueDate[0])}
        startDate={getDateRangeStateValues(dueDate[0])}
        onChange={(date) => table.getColumn('deadline')?.setFilterValue(date)}
      />
      <StatusField
        options={statusOptions}
        value={table.getColumn('status')?.getFilterValue() ?? []}
        onChange={(e) => table.getColumn('status')?.setFilterValue(e)}
        getOptionValue={(option: { value: any }) => option.value}
        getOptionDisplayValue={(option) =>
          renderOptionDisplayValue(option.value as string)
        }
        displayValue={(selected: string) => renderOptionDisplayValue(selected)}
        dropdownClassName="!z-20 h-auto"
        className="w-auto"
      />

      {isFiltered && (
        <Button
          size="sm"
          onClick={() => {
            table.resetGlobalFilter();
            table.resetColumnFilters();
          }}
          variant="flat"
          className="h-9 bg-gray-200/70"
        >
          <PiTrashDuotone className="me-1.5 h-[17px] w-[17px]" /> Clear
        </Button>
      )}
    </>
  );
}

function renderOptionDisplayValue(value: string) {
  switch (value.toString()) {
      case 'request':
        return (
          <div className="flex items-center">
            <Badge color="warning" renderAsDot />
            <Text className="ms-2 font-medium" style={{ color: '#FFA500' }}>Request</Text> {/* Orange */}
          </div>
        );
      case 'viewed':
        return (
          <div className="flex items-center">
            <Badge color="success" renderAsDot />
            <Text className="ms-2 font-medium" style={{ color: '#32CD32' }}>Viewed</Text> {/* Lime Green */}
          </div>
        );
      case 'assigned':
        return (
          <div className="flex items-center">
            <Badge color="info" renderAsDot />
            <Text className="ms-2 font-medium" style={{ color: '#FF6347' }}>Assigned</Text> {/* Tomato Red */}
          </div>
        );
      case 'pastDue':
        return (
          <div className="flex items-center">
            <Badge color="danger" renderAsDot />
            <Text className="ms-2 font-medium" style={{ color: '#DC143C' }}>Past Due</Text> {/* Crimson */}
          </div>
        );
      case 'merged':
        return (
          <div className="flex items-center">
            <Badge color="primary" renderAsDot />
            <Text className="ms-2 font-medium" style={{ color: '#1E90FF' }}>Merged</Text> {/* Dodger Blue */}
          </div>
        );
      case 'completed':
        return (
          <div className="flex items-center">
            <Badge color="secondary" renderAsDot />
            <Text className="ms-2 font-medium" style={{ color: '#1E90FF' }}>Completed</Text> {/* Dodger Blue */}
          </div>
        );
      default:
        return (
          <div className="flex items-center">
            <Badge renderAsDot className="bg-gray-400" />
            <Text className="ms-2 font-medium text-gray-600">Request</Text> {/* Gray */}
          </div>
        );
    }
}

{
  /* <Popover position="bottom-end">
          <Popover.Trigger>
            <ActionIcon
              variant="outline"
              title={'Toggle Columns'}
              className="h-auto w-auto p-1"
            >
              <PiTextColumns strokeWidth={3} className="size-6" />
            </ActionIcon>
          </Popover.Trigger>
          <Popover.Content className="z-0">
            <div className="p-2 text-left rtl:text-right">
              <Title as="h6" className="mb-6 px-0.5 text-sm font-semibold">
                Toggle Columns
              </Title>
              <div className="grid grid-cols-2 gap-6">
                {table.getAllLeafColumns().map((column) => {
                  return (
                    typeof column.columnDef.header === 'string' &&
                    column.columnDef.header.length > 0 && (
                      <Checkbox
                        key={column.id}
                        label={<>{column.columnDef.header}</>}
                        checked={column.getIsVisible()}
                        onChange={column.getToggleVisibilityHandler()}
                      />
                    )
                  );
                })}
              </div>
            </div>
          </Popover.Content>
        </Popover> */
}
