import {

  PiKanbanDuotone,
  PiChatDots,
  PiListNumbers,
  PiLightningDuotone,
  PiUserCircleDuotone,
  PiUserDuotone,
  PiBellSimpleRingingDuotone,
  PiUserGearDuotone
} from 'react-icons/pi';
import { routes } from '@/config/routes';
import { DUMMY_ID } from '@/config/constants';
import ProjectWriteIcon from '@components/icons/project-write';

// Note: do not add href in the label object, it is rendering as label
export const menuItems = [
  
  {
    name: 'Dashboard',
    // href: routes.project.dashboard,
    href: '/',
    icon: PiKanbanDuotone,
    // shortcut: {
    //   modifiers: 'alt',
    //   key: '0',
    // },
  },
  {
    name: 'Priority & Status',
    // href: routes.project.dashboard,
    href: '/priority',
    icon: PiListNumbers,
    // shortcut: {
    //   modifiers: 'alt',
    //   key: '0',
    // },
  },
  {
    name: 'Ask AI',
    // href: routes.project.dashboard,
    href: '/ask-ai',
    icon: PiChatDots,
    // shortcut: {
    //   modifiers: 'alt',
    //   key: '0',
    // },
  },
  {
    name: 'Integrations',
    // href: routes.project.dashboard,
    href: '/integrations',
    icon: PiLightningDuotone,
    // shortcut: {
    //   modifiers: 'alt',
    //   key: '0',
    // },
  },

  {
    name: 'Account',
  },
  {
    name: 'Settings',
    href: routes.forms.profileSettings,
    icon: PiUserGearDuotone,
  },
  {
    name: 'Notification Preference',
    href: routes.forms.notificationPreference,
    icon: PiBellSimpleRingingDuotone,
  },
  {
    name: 'Personal Information',
    href: routes.forms.personalInformation,
    icon: PiUserDuotone,
  },
  {
    name: 'Profile',
    href: routes.profile,
    icon: PiUserCircleDuotone,
  },

];
