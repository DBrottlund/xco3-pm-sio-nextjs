import { createColumnHelper } from '@tanstack/react-table';
import { RequestSummaryDataType } from '@/data/project-dashboard';
import CircleProgressBar from '@components/charts/circle-progressbar';
import {  calculateDeadlineAndPercentage } from '@/app/shared/project-dashboard/calculate-complete-deadline';
import { format, parseISO } from 'date-fns';
import { ActionIcon, Badge, Checkbox, Text, Tooltip, Button } from 'rizzui';
import Link from 'next/link';
import PencilIcon from '@components/icons/pencil';
import { routes } from '@/config/routes';
import DeletePopover from '@/app/shared/delete-popover';
import EyeIcon from '@components/icons/eye';
import DateCell from '@ui/date-cell';
import StatusField from '@/app/shared/controlled-table/status-field';
import { useState } from 'react';
import { useMedia } from 'react-use';
import cn from '@utils/class-names';
import  RequestEditView  from '../request-edit';

function getStatusBadge(status: string) {
  switch (status) {
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

function getProgressColor(status: string) {
  switch (status) {
    case 'request':
      return '#FFA500'; // Orange
    case 'viewed':
      return '#32CD32'; // Lime Green
    case 'assigned':
      return '#FF6347'; // Tomato Red
    case 'pastDue':
      return '#DC143C'; // Crimson
    case 'merged':
      return '#1E90FF'; // Dodger Blue
    case 'completed':
      return '#1E90FF'; // Dodger Blue
    default:
      return '#B88400'; // Golden Brown
  }
}

function getTimeProgressColor(percentTime: number, percentTask: number): string {
  if (percentTask >= percentTime) {
      return '#32CD32'; // Green
  } else if (percentTime >= percentTask + 10) {
      return '#FF6347'; // Red
  } else if (percentTime >= percentTask) {
      return '#FFFF00'; // Yellow
  } else {
      return '#B88400'; // Golden Brown (default)
  }
}

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

interface FormData {
  title: string;
  backoffice: string;
  initiatives: string;
  assigneeType: string;
  assignee: string;
  summary: string;
  details: string;
  task: string;
  turnaround: string;
  deadline: string;
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

const columnHelper = createColumnHelper<RequestSummaryDataType>();

const assignees = ['',"Geordi La Forge", "Reginald Barclay", "Leah Brahms", "Westley Crusher"]
let percentTime = 0;

export const defaultColumns = [
  columnHelper.accessor('productTags', {
    size: 100,
    filterFn: 'prodinitFilter' as any,    
    header: 'Products/Initiative',
    cell: ({ row: { original } }) => (
      <div className="text-[10px]">
        {[
          ...(original.productTags ?? []),
          ...(original.initiativeTags ?? [])
        ].join(', ')}
      </div>
    ),
  }),

  columnHelper.accessor('title', {
    size: 200,
    header: 'Title',
  }),


  columnHelper.accessor('assigneeID', {
    size: 75,
    header: 'Assignee',
    cell: ({ row: { original } }) => (
      <div className="text-[10px]">
        {assignees[original.assigneeID]}
      </div>
    ),
  }),

  columnHelper.accessor('deadline', {
    size: 120,
    header: 'Deadline',
    filterFn: 'dueDate' as any,

    cell: ({ row: { original } }) => {
      const deadline = `${original.deadline.periodNum} ${original.deadline.period}`;
      const startDate = original.startDate;
      const timeZone = 'America/Chicago';
  
      const completeDeadlinePercentage = calculateDeadlineAndPercentage(startDate, deadline, timeZone);
      const completeDeadline = completeDeadlinePercentage.deadline;
  
      const percentage = completeDeadlinePercentage.percentageElapsed;
      const formattedPercentage = percentage.toFixed(0);
      percentTime = percentage;
  
      // Parse and format the complete deadline date
      const formattedDeadline = completeDeadline != 'N/A' ? format(parseISO(completeDeadline), 'MMMM d, yyyy hh:mm a') : 'N/A' ;
  
      return (
        <>
          {formattedDeadline !== 'N/A' ? (
            <DateCell date={new Date(formattedDeadline)} />
          ) : (
            'N/A'
          )}
        </>
      );
        
        
    },
  }),

  // columnHelper.accessor('status', {
  //   size: 100,
  //   header: 'Status',
  //   filterFn: 'statusFilter' as any,
  //   cell: ({ row: { original } }) => getStatusBadge(original.status),
  // }),




  columnHelper.accessor('tasks', {
    size: 100,
    header: 'Progress',
    cell: ({ row: { original } }) => {
      const percentage = (original.completedTasks.length / original.tasks.length) * 100;
      const formattedPercentage = percentage.toFixed(0);
      const formattedTimePercentage = percentTime.toFixed(0);




      return (
        <div className="flex gap-4 text-[10px]">
<div className="flex flex-col items-center">
<div className="text-center">{'Task'}</div>
          <CircleProgressBar
            size={40}
            strokeWidth={4}
            stroke="#f0f0f0"
            percentage={percentage}
            label={`${formattedPercentage}%`}
            progressColor={getTimeProgressColor(percentTime, percentage)}
          />
          </div>
          <div className="">

          <div className="justify-center items-center text-center ">{'Time'}</div>
          <CircleProgressBar
            size={40}
            strokeWidth={4}
            stroke="#f0f0f0"
            percentage={percentTime}
            label={`${formattedTimePercentage}%`}
            progressColor={getTimeProgressColor(percentTime, percentage)}
          />
        </div>
        </div>
      );
    },
  }),
  columnHelper.accessor('status', {
    size: 100,
    header: 'Status',
    filterFn: 'statusFilter' as any,
    cell: ({
      row,
      table
    }) => (

      <StatusField
      options={statusOptions}
      value={row.original.status}
      onChange={(e) => table.getColumn('status')?.setFilterValue(e)}
      getOptionValue={(option: { value: any }) => option.value}
      getOptionDisplayValue={(option) =>
        renderOptionDisplayValue(option.value as string)
      }
      displayValue={(selected: string) => renderOptionDisplayValue(selected)}
      dropdownClassName="!z-20 h-auto"
      className="w-auto"
    />

    )
  }),
  columnHelper.accessor('deadline', {
    header: 'Actions',
    size: 90,
    enablePinning: true,
    enableSorting: false,
    cell: ({
      row,
      table: {
        options: { meta },
      },
    }) => { 
      
      const [openDrawer, setOpenDrawer] = useState(false);
      const [showFilters, setShowFilters] = useState(true);
      const [formData, setFormData] = useState<FormData>({
        title: 'TEST',
        backoffice: '',
        initiatives: '',
        assigneeType: '',
        assignee: '',
        summary: '',
        details: '',
        task: '',
        turnaround: '',
        deadline: ''
      });

      // const pushFormData = () =>{
      //   setFormData({
      //     title: 'test',
      //     backoffice: 'test',
      //     initiatives: '',
      //     assigneeType: '',
      //     assignee: '',
      //     summary: '',
      //     details: '',
      //     task: '',
      //     turnaround: '',
      //     deadline: ''
      //   })
      // }

      const setRow = (row) => {
        setFormData({
          title: row.original.title,
          backoffice: '',
          initiatives: [
            ...(row.original.productTags ?? []),
            ...(row.original.initiativeTags ?? [])
          ].join(', '),
          assigneeType: '',
          assignee: '',
          summary: '',
          details: '',
          task: '',
          turnaround: '',
          deadline: ''
        })
      }

      const isMediumScreen = useMedia('(max-width: 1860px)', false);
     return (
      <>
        <div className="flex items-center justify-center gap-3 pe-3"> 

        {isMediumScreen && (
          <RequestEditView isOpen={openDrawer} setOpenDrawer={setOpenDrawer} setFormData={setFormData} formData={formData}>
            <div className="grid grid-cols-1 gap-6 overflow-y-auto max-h-screen">
              {/* <FilterElements table={table} /> */}
            </div>
          </RequestEditView>
        )}

          <Tooltip
            size="sm"
            content={'Edit Request'}
            placement="top"
            color="invert"
          >
            <Button
              {...(isMediumScreen
                ? {
                    onClick: () => {
                      console.log('drawer!');
                      setRow(row)
                      setOpenDrawer(() => !openDrawer);
                    },
                  }
                : { onClick: () => setShowFilters(() => !showFilters) })}
              variant={'outline'}
              className={cn(
                'h-[34px] pe-3 ps-2.5',
                !isMediumScreen && showFilters && 'border-dashed border-gray-700'
              )}
            >
              {/* <ActionIcon
                as="span"
                size="sm"
                variant="outline"
                className="hover:!border-gray-900 hover:text-gray-700"
              > */}
                <PencilIcon className="h-4 w-4" />
              {/* </ActionIcon> */}
            </Button>
          </Tooltip>
          {/* <Tooltip
            size="sm"
            content={'View Invoice'}
            placement="top"
            color="invert"
          >
            <Link
              href={routes.invoice.details(row.original.id)}
              aria-label="go to invoice details"
            >
              <ActionIcon
                as="span"
                size="sm"
                variant="outline"
                className="hover:!border-gray-900 hover:text-gray-700"
              >
                <EyeIcon className="h-4 w-4" />
              </ActionIcon>
            </Link>
          </Tooltip> */}
          <DeletePopover
            title={`Delete the request`}
            description={`Are you sure you want to delete this #${row.id} request?`}
            onDelete={() =>
              meta?.handleDeleteRow && meta?.handleDeleteRow(row.original)
            }
          />
        </div>
      </>
    )
  }
  })
];
