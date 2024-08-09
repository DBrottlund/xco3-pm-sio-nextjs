'use client';

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { PiXBold } from 'react-icons/pi';
import { ActionIcon, Title,
  Input,
  Textarea,
  Button,
 } from 'rizzui';
import cn from '@utils/class-names';
import { useMedia } from '@hooks/use-media';
import { ToggleColumns } from '@/app/shared/table';
const Drawer = dynamic(() => import('rizzui').then((module) => module.Drawer), {
  ssr: false,
});

// const formData = {
//   title: 'test',
//   backoffice: '',
//   initiatives: '',
//   assigneeType: '',
//   assignee: '',
//   summary: '',
//   details: '',
//   task: '',
//   turnaround: '',
//   deadline: ''
// };



interface FormErrors {
  assignee?: string;
  turnaround?: string;
  deadline?: string;
}

const EditForm: React.FC = ({formData}) => {


  const [errors, setErrors] = useState<FormErrors>({});

  const handleChange = (e: any) => {
    // setFormData({
    //   ...formData,
    //   [e.target.name]: e.target.value
    // });
  };

  const validateForm = () => {
    let errors: FormErrors = {};
    if (!formData.assignee) errors.assignee = 'Assignee is required';
    if (!formData.turnaround) errors.turnaround = 'Turnaround is required';
    if (!formData.deadline) errors.deadline = 'Deadline is required';
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (validateForm()) {
      // Handle form submission
      console.log(formData);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 bg-white rounded shadow-md">
      <div>
        <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
        <Input
          name="title"
          id="title"
          value={formData.title}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="backoffice" className="block text-sm font-medium text-gray-700">Backoffice</label>
        <Input
          name="backoffice"
          id="backoffice"
          value={formData.backoffice}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="initiatives" className="block text-sm font-medium text-gray-700">Initiatives</label>
        <Input
          name="initiatives"
          id="initiatives"
          value={formData.initiatives}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="assigneeType" className="block text-sm font-medium text-gray-700">Assignee Type</label>
        <Input
          name="assigneeType"
          id="assigneeType"
          value={formData.assigneeType}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="assignee" className="block text-sm font-medium text-gray-700">Assignee *</label>
        <Input
          name="assignee"
          id="assignee"
          value={formData.assignee}
          onChange={handleChange}
          required
        />
        {errors.assignee && <p className="text-red-500 text-sm">{errors.assignee}</p>}
      </div>
      <div>
        <label htmlFor="summary" className="block text-sm font-medium text-gray-700">Summary</label>
        <Textarea
          name="summary"
          id="summary"
          value={formData.summary}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="details" className="block text-sm font-medium text-gray-700">Details</label>
        <Textarea
          name="details"
          id="details"
          value={formData.details}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="task" className="block text-sm font-medium text-gray-700">Task</label>
        <Textarea
          name="task"
          id="task"
          value={formData.task}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="turnaround" className="block text-sm font-medium text-gray-700">Turnaround *</label>
        <Input
          name="turnaround"
          id="turnaround"
          value={formData.turnaround}
          onChange={handleChange}
          required
        />
        {errors.turnaround && <p className="text-red-500 text-sm">{errors.turnaround}</p>}
      </div>
      <div>
        <label htmlFor="deadline" className="block text-sm font-medium text-gray-700">Deadline *</label>
        <Input
          type="date"
          name="deadline"
          id="deadline"
          value={formData.deadline}
          onChange={handleChange}
          required
        />
        {errors.deadline && <p className="text-red-500 text-sm">{errors.deadline}</p>}
      </div>
      <Button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md shadow-sm hover:bg-blue-700">
        Submit
      </Button>
    </form>
  );
};

function submitForm(setOpenDrawer : any){
  setOpenDrawer(false);
}

export default function RequestEditView({
  isOpen,
  drawerTitle,
  setOpenDrawer,
  children,
  formData,
}: React.PropsWithChildren<{
  drawerTitle?: string;
  hasSearched?: boolean;
  setOpenDrawer: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen?: boolean;
  setFormData?: any;
  formData?:any;
}>) {


  return (
    <Drawer
      size="lg"
      isOpen={isOpen ?? false}
      onClose={() => setOpenDrawer(false)}
      overlayClassName="dark:bg-opacity-40 dark:backdrop-blur-md"
      containerClassName="dark:bg-gray-100 overflow-y-auto max-h-screen"
      className="z-[9999] overflow-y-auto max-h-screen"
      
    >
      <div className="flex h-full flex-col p-5">
        <div className="-mx-5 mb-6 flex items-center justify-between border-b border-muted px-5 pb-4">
          <Title as="h5">{drawerTitle}</Title>
          <ActionIcon
            size="sm"
            rounded="full"
            variant="text"
            title={'Close Filter'}
            onClick={() => setOpenDrawer(false)}
          >
            <PiXBold className="h-4 w-4" />
          </ActionIcon>
        </div>
        <div className="flex-grow">
          <div className="grid grid-cols-1 gap-6 [&_.price-field>span.mr-2]:mb-1.5 [&_.price-field]:flex-col [&_.price-field]:items-start [&_.react-datepicker-wrapper]:w-full [&_.react-datepicker-wrapper_.w-72]:w-full [&_.text-gray-500]:text-gray-700 [&_button.h-9]:h-10 sm:[&_button.h-9]:h-11 [&_label>.h-9]:h-10 sm:[&_label>.h-9]:h-11 [&_label>.w-24.h-9]:w-full">
            {children}
            <EditForm
            
            formData={formData}

            />
          </div>
        </div>
        <Button
          size="lg"
          onClick={() => submitForm(setOpenDrawer)}
          className="mt-5 h-11 w-full text-sm"
        >
          Save Request
        </Button>
      </div>
    </Drawer>
  );
}
