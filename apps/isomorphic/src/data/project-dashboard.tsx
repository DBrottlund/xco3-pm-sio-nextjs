import { createId } from '@paralleldrive/cuid2';
import SuitcaseIcon from '@components/icons/suit-case';
import CheckCircleIcon from '@components/icons/check-circle';
import HourGlassRoundIcon from '@components/icons/hour-glass-round';
import StackIcon from '@components/icons/stack';
import { IconType } from 'react-icons/lib';
import  SimpleBarChart  from '@/app/shared/project-dashboard/simple-bar-chart';
import  MixBarChart  from '@/app/shared/project-dashboard/mix-bar-chart';
import  RadialBarChart  from '@/app/shared/project-dashboard/radial-bar-chart';


export const projectStatData: StatType[] = [
  {
    title: '% of requests completed',
    subTitle: 'Viewed',
    chart: <SimpleBarChart />,
    // amount: 89935,
   increased: true,
    percentage: '10.2',
    icon: SuitcaseIcon,
  },
  {
    title: 'Sucess Rate',
    subTitle: 'Overall sucess rate 25%',
    chart: <MixBarChart />,
    // amount: 78478,
    increased: true,
    percentage: '10.2',
    icon: CheckCircleIcon,
  },
  {
    title: 'Requests',
    subTitle: 'per product',
    chart: <RadialBarChart />,
    // amount: 20321,
    increased: false,
    percentage: '10.2',
    icon: HourGlassRoundIcon,
  },

];

export const projectStatViewOptions = [
  {
    label: 'Last Day',
    value: 'last-day',
  },
  {
    label: 'Last 7 Days',
    value: 'last-seven-days',
  },
  {
    label: 'Last 30 Days',
    value: 'last-thirty-days',
  },
];

export type StatType = {
  icon: IconType;
  title: string;
  subTitle: string;
  chart: any;

  // amount: number;
  increased: boolean;
  percentage: string;
  iconWrapperFill?: string;
  className?: string;
};

type OverAllProgressDataDataType = {
  name: string;
  color: string;
  percentage: number;
  count: number;
};

export const overAllProgressData: OverAllProgressDataDataType[] = [
  { name: 'Total Projects', percentage: 126, color: '#00858D', count: 124 },
  { name: 'Completed', percentage: 26, color: '#65BE58', count: 26 },
  { name: 'Delayed', percentage: 36, color: '#FF712F', count: 36 },
  { name: 'On going', percentage: 46, color: '#666666', count: 46 },
];

export const overAllProgressViewOptions = [
  {
    label: 'This Week',
    value: 'week',
  },
  {
    label: 'This Month',
    value: 'month',
  },
];

export const activitiesData = [
  {
    label: 'React.js',
    completed: 80,
    inProgress: 100,
  },
  {
    label: 'WordP:',
    completed: 65,
    inProgress: 85,
  },
  {
    label: 'Design',
    completed: 95,
    inProgress: 65,
  },
  {
    label: 'Laravel',
    completed: 78,
    inProgress: 101,
  },
];

export const activitiesStatus = [
  { name: 'Completed' },
  { name: 'In Progress' },
];

export const ACTIVITIES_COLORS = ['#3AA6B9', '#365486'];

export const clientList = [
  {
    id: createId(),
    avatar: 'https://randomuser.me/api/portraits/women/42.jpg',
    name: 'Gina Vanleuven',
    address: 'USA',
    workType: 'AI App Development',
    workProgress: 80,
  },
  {
    id: createId(),
    avatar: 'https://randomuser.me/api/portraits/men/22.jpg',
    name: 'Albert Flores',
    address: 'London',
    workType: 'AI App Development',
    workProgress: 70,
  },
  {
    id: createId(),
    avatar: 'https://randomuser.me/api/portraits/women/42.jpg',
    name: 'Matte Hannery',
    address: 'Spain',
    workType: 'AI App Development',
    workProgress: 55,
  },
  {
    id: createId(),
    avatar: 'https://randomuser.me/api/portraits/men/22.jpg',
    name: 'Bucky Robert',
    address: 'Canada',
    workType: 'AI App Development',
    workProgress: 100,
  },
  {
    id: createId(),
    avatar: 'https://randomuser.me/api/portraits/men/22.jpg',
    name: 'Albert Flores',
    address: 'London',
    workType: 'AI App Development',
    workProgress: 70,
  },
];

export const projectStatisticsDailyData = [
  {
    label: 'Sat',
    completed: 9800,
    inProgress: 8000,
    active: 1800,
  },
  {
    label: 'Sun',
    completed: 8700,
    inProgress: 4900,
    active: 1600,
  },
  {
    label: 'Mon',
    completed: 5000,
    inProgress: 8600,
    active: 3200,
  },
  {
    label: 'Tue',
    completed: 4500,
    inProgress: 6800,
    active: 1200,
  },
  {
    label: 'Wed',
    completed: 2500,
    inProgress: 3800,
    active: 1000,
  },
  {
    label: 'Thu',
    completed: 8000,
    inProgress: 5900,
    active: 1200,
  },
  {
    label: 'Fri',
    completed: 8700,
    inProgress: 4800,
    active: 1600,
  },
];

export const projectStatisticsMonthlyData = [
  {
    label: 'Jan',
    completed: 5650,
    inProgress: 4540,
    active: 3200,
  },
  {
    label: 'Feb',
    completed: 1890,
    inProgress: 5510,
    active: 680,
  },
  {
    label: 'Mar',
    completed: 4300,
    inProgress: 3000,
    active: 1500,
  },
  {
    label: 'Apr',
    completed: 5710,
    inProgress: 5830,
    active: 2300,
  },
  {
    label: 'May',
    completed: 5710,
    inProgress: 5830,
    active: 2300,
  },
  {
    label: 'Jun',
    completed: 5710,
    inProgress: 5830,
    active: 2300,
  },
];

export const projectStatisticsTicketStatus = [
  { name: 'Completed' },
  { name: 'In Progress' },
  { name: 'Active' },
];

export const PROJECT_STATISTICS_COLORS = ['#3562FC', '#FC9D23', '#81868F'];

export const projectStatisticsViewOptions = [
  {
    label: 'Weekly',
    value: 'week',
  },
  {
    label: 'Monthly',
    value: 'month',
  },
];

export const projectTaskData = [
  {
    title: 'Understanding the tools in Figma',
  },
  {
    title: 'Understand the basics of making designs',
  },
  {
    title: 'Design a mobile application with figma',
  },
];

export const requestSummaryData = [
{
  id: createId(),
  title: "Train new recruit on dilithium recrystallization procedure",
  productTags: ["Onboarding", "Compliance"],
  initiativeTags: ["Cybersecurity", "API"],
  assigneeID: 1,
  intro: "Before starting the dilithium recrystallization procedure, it's essential to understand the importance of each step and the safety protocols involved. Dilithium crystals are a critical component in the operation of the warp core, and proper handling and recrystallization are vital for maintaining the stability and efficiency of the starship's propulsion system. This training will provide the recruit with a comprehensive understanding of the procedures, safety measures, and hands-on experience needed to perform recrystallization effectively and safely.",
  tasks: [
    {
      title: "Explain warpcore magnetic containment",
      text: "Provide a detailed explanation of the magnetic containment system used in the warpcore to stabilize the antimatter and matter reactions. Include diagrams and safety protocols."
    },
    {
      title: "Demonstrate dilithium crystal handling",
      text: "Show the proper techniques for handling dilithium crystals, including how to safely install and remove them from the warp core. Emphasize the importance of protective gear."
    },
    {
      title: "Review dilithium recrystallization process",
      text: "Walk through the step-by-step procedure for recrystallizing dilithium. Cover the necessary equipment, conditions required, and potential hazards to watch out for."
    },
    {
      title: "Conduct practical exercise on recrystallization",
      text: "Have the recruit perform a supervised recrystallization of a dilithium crystal. Provide guidance and feedback to ensure proper technique and safety are maintained throughout the process."
    }
  ],
  outro: "Completing the dilithium recrystallization procedure requires precision, attention to detail, and adherence to safety protocols. By following these steps, the recruit will gain the necessary skills and confidence to handle and recrystallize dilithium crystals effectively. Regular practice and continuous learning are encouraged to maintain proficiency in these critical operations. Remember, the safety and efficiency of the warp core depend on the proper execution of these procedures. Stay vigilant and always prioritize safety.",
  completedTasks: ["Explain warpcore magnetic containment"],
  status: 'viewed',
  original: "",
  generated: "",
  createdDate: "2024-08-05T10:30:00Z",
  startDate: "2024-08-06T14:30:00Z",
  turnaround: {
    period: 'hour',
    periodNum: 8
  },
  deadline: {
    period: 'day',
    periodNum: 2
  }
},
{
  id: createId(),
  title: "Upgrade warp core containment field",
  productTags: ["Backoffice", "Maintenance"],
  initiativeTags: ["Safety", "Backoffice"],
  assigneeID: 2,
  intro: "The warp core containment field is a critical component for the safe operation of a starship. Upgrading this field will enhance the stability and safety of the warp core, reducing the risk of containment breaches and improving overall efficiency. This task involves reviewing the current containment field, identifying potential weaknesses, and implementing necessary upgrades to ensure optimal performance.",
  tasks: [
    {
      title: "Inspect current containment field",
      text: "Perform a thorough inspection of the existing warp core containment field. Document any areas that show signs of wear or potential failure."
    },
    {
      title: "Research latest containment technologies",
      text: "Investigate the latest advancements in containment field technologies. Evaluate which solutions could be integrated into the current system."
    },
    {
      title: "Develop upgrade plan",
      text: "Create a detailed plan outlining the steps required to upgrade the containment field. Include necessary materials, safety protocols, and a timeline for implementation."
    },
    {
      title: "Implement upgrades",
      text: "Execute the upgrade plan, installing new components and making necessary adjustments to the containment field. Ensure all safety measures are strictly followed."
    }
  ],
  outro: "Upgrading the warp core containment field is essential for maintaining the safety and efficiency of the starship. By carefully inspecting, researching, and implementing the latest technologies, we can ensure the warp core operates within safe parameters. Continuous monitoring and regular maintenance are crucial to sustaining these improvements. Always prioritize safety and be vigilant for any signs of containment field degradation.",
  completedTasks: ["Inspect current containment field", "Research latest containment technologies"],
  status: 'pastDue',
  original: "",
  generated: "",
  createdDate: "2024-08-01T10:30:00Z",
  startDate: "2024-08-01T03:30:00Z",
  turnaround: {
    period: 'hour',
    periodNum: 12
  },
  deadline: {
    period: 'hour',
    periodNum: 20
  }
},
{
  id: createId(),
  title: "Optimize Teleporter Systems",
  productTags: ["Backoffice (general)", "Pipeline"],
  initiativeTags: ["UI", "Cybersecurity"],
  assigneeID: 3,
  intro: "Teleporter systems are crucial for the efficient and safe transportation of personnel and cargo on a starship. Optimizing these systems will ensure faster and more reliable teleportation, minimizing errors and enhancing overall operational efficiency. This task involves evaluating the current teleporter systems, identifying bottlenecks, and implementing improvements to boost performance and security.",
  tasks: [
    {
      title: "Assess current teleporter performance",
      text: "Conduct a comprehensive assessment of the existing teleporter systems. Measure teleportation accuracy, speed, and reliability, and document any issues or inefficiencies."
    },
    {
      title: "Research teleporter system advancements",
      text: "Explore the latest advancements in teleporter technology. Identify potential upgrades or modifications that could be applied to enhance system performance."
    },
    {
      title: "Develop optimization plan",
      text: "Create a detailed plan for optimizing the teleporter systems. Outline the steps required, necessary resources, and a timeline for implementation."
    },
    {
      title: "Implement teleporter optimizations",
      text: "Execute the optimization plan, making necessary adjustments and upgrades to the teleporter systems. Ensure all changes are thoroughly tested for safety and efficiency."
    }
  ],
  outro: "Optimizing the teleporter systems is essential for ensuring the smooth and efficient operation of the starship's transportation capabilities. By carefully assessing, researching, and implementing the latest technologies, we can significantly enhance teleporter performance and reliability. Continuous monitoring and regular updates will be necessary to maintain these improvements. Always prioritize safety and accuracy in all teleportation procedures.",
  completedTasks: ["Assess current teleporter performance", "Research teleporter system advancements", "Develop optimization plan", "Implement teleporter optimizations"],
  status: 'completed',
  original: "",
  generated: "",
  createdDate: "2024-08-02T10:30:00Z",
  startDate: "2024-08-05T03:30:00Z",
  turnaround: {
    period: 'day',
    periodNum: 1
  },
  deadline: {
    period: 'week',
    periodNum: 1
  }
},
{
  id: createId(),
  title: "Develop Strategy for Borg Adaptive Shield Deactivation",
  productTags: ["Analyst", "Compliance"],
  initiativeTags: ["API", "Cybersecurity"],
  assigneeID: 4,
  intro: "Borg adaptive shields are a formidable defense mechanism, constantly adjusting to counteract various types of attacks. Developing a strategy to deactivate these shields is critical for enhancing our tactical capabilities against Borg threats. This task involves analyzing the adaptive nature of Borg shields, identifying potential vulnerabilities, and creating a plan to exploit these weaknesses.",
  tasks: [
    {
      title: "Analyze Borg shield adaptation patterns",
      text: "Study the adaptation patterns of Borg shields during past encounters. Identify common responses to different types of attacks and document the findings."
    },
    {
      title: "Identify potential vulnerabilities",
      text: "Using the analysis of adaptation patterns, pinpoint potential weaknesses in the Borg shields. Consider unconventional methods and technologies that may exploit these vulnerabilities."
    },
    {
      title: "Develop deactivation plan",
      text: "Create a comprehensive plan for deactivating Borg adaptive shields. Include specific techniques, necessary equipment, and a step-by-step approach for implementation."
    }
  ],
  outro: "Successfully deactivating Borg adaptive shields requires a deep understanding of their adaptation mechanisms and innovative strategies to exploit identified vulnerabilities. This project will significantly enhance our defensive and offensive capabilities against Borg threats. Regular updates and refinements to the strategy will be essential as new information and technologies become available. Always prioritize thorough analysis and precise execution in these high-stakes operations.",
  completedTasks: ["Analyze Borg shield adaptation patterns"],
  status: 'assigned',
  original: "",
  generated: "",
  createdDate: "2024-08-02T00:30:00Z",
  startDate: "2024-08-05T18:30:00Z",
  turnaround: {
    period: 'day',
    periodNum: 3
  },
  deadline: {
    period: 'day',
    periodNum: 3
  }
},
{
  id: createId(),
  title: "Develop Strategy for Borg Adaptive Shield Deactivation",
  productTags: ["Analyst", "Compliance"],
  initiativeTags: ["API", "Cybersecurity"],
  assigneeID: 4,
  intro: "Borg adaptive shields are a formidable defense mechanism, constantly adjusting to counteract various types of attacks. Developing a strategy to deactivate these shields is critical for enhancing our tactical capabilities against Borg threats. This task involves analyzing the adaptive nature of Borg shields, identifying potential vulnerabilities, and creating a plan to exploit these weaknesses.",
  tasks: [
    {
      title: "Analyze Borg shield adaptation patterns",
      text: "Study the adaptation patterns of Borg shields during past encounters. Identify common responses to different types of attacks and document the findings."
    },
    {
      title: "Identify potential vulnerabilities",
      text: "Using the analysis of adaptation patterns, pinpoint potential weaknesses in the Borg shields. Consider unconventional methods and technologies that may exploit these vulnerabilities."
    },
    {
      title: "Develop deactivation plan",
      text: "Create a comprehensive plan for deactivating Borg adaptive shields. Include specific techniques, necessary equipment, and a step-by-step approach for implementation."
    }
  ],
  outro: "Successfully deactivating Borg adaptive shields requires a deep understanding of their adaptation mechanisms and innovative strategies to exploit identified vulnerabilities. This project will significantly enhance our defensive and offensive capabilities against Borg threats. Regular updates and refinements to the strategy will be essential as new information and technologies become available. Always prioritize thorough analysis and precise execution in these high-stakes operations.",
  completedTasks: [],
  status: 'request',
  original: "",
  generated: "",
  createdDate: "2024-08-02T00:30:00Z",
  startDate: "",
  turnaround: {
    period: 'day',
    periodNum: 3
  },
  deadline: {
    period: 'day',
    periodNum: 3
  }
}


];

export type RequestSummaryDataType = (typeof requestSummaryData)[0];


// project summary table data
export const projectSummaryData = [
  {
    id: createId(),
    project: 'Android app development',
    manager: 'Rachel Green',
    dueData: 'Jul 07, 2024',
    assignedTo: 'Mobile Team',
    status: 'completed',
    progress: 100,
  },
  {
    id: createId(),
    project: 'E-commerce platform',
    manager: 'Matte Henry',
    dueData: 'Jul 24, 2024',
    assignedTo: 'DevOps Team',
    status: 'onGoing',
    progress: 70,
  },
  {
    id: createId(),
    project: 'IOS app development',
    manager: 'Michael Brown',
    dueData: 'Jul 25, 2024',
    assignedTo: 'Backend Team',
    status: 'delayed',
    progress: 35,
  },
  {
    id: createId(),
    project: 'Marketing website',
    manager: 'Rachel Green',
    dueData: 'Jul 12, 2024',
    assignedTo: 'WordPress Team',
    status: 'completed',
    progress: 100,
  },
  {
    id: createId(),
    project: 'IOS app development',
    manager: 'John Bushmill',
    dueData: 'Jun 29, 2024',
    assignedTo: 'Backend Team',
    status: 'atRisk',
    progress: 42,
  },
  {
    id: createId(),
    project: 'IOS app development',
    manager: 'Anna Smith',
    dueData: 'Jul 07, 2024',
    assignedTo: 'WordPress Team',
    status: 'completed',
    progress: 100,
  },
  {
    id: createId(),
    project: 'Data analytics tool',
    manager: 'Rachel Green',
    dueData: 'Jun 30, 2024',
    assignedTo: 'Backend Team',
    status: 'completed',
    progress: 80,
  },
  {
    id: createId(),
    project: 'Internal dashboard',
    manager: 'Rachel Green',
    dueData: 'Jul 27, 2024',
    assignedTo: 'Angular Team',
    status: 'onGoing',
    progress: 51,
  },
  {
    id: createId(),
    project: 'Internal dashboard',
    manager: 'Anna Smith',
    dueData: 'Jul 02, 2024',
    assignedTo: 'React Team',
    status: 'delayed',
    progress: 51,
  },
  {
    id: createId(),
    project: 'Data analytics tool',
    manager: 'Tom Hanks',
    dueData: 'Jun 28, 2024',
    assignedTo: 'React Team',
    status: 'atRisk',
    progress: 34,
  },
];

export type ProjectSummaryDataType = (typeof projectSummaryData)[0];

export const projectRecentActivitiesData = [
  {
    id: createId(),
    title: 'Android app development',
    activity: 'Rachel Green added a new task in IOS app development',
    date: '1 hour ago',
  },
  {
    id: createId(),
    title: 'E-commerce platform',
    activity: 'Anna Smith added a new task in Data analytics tool',
    date: '2 hours ago',
  },
  {
    id: createId(),
    title: 'IOS app development',
    activity: 'John Bushmill added a new task in IOS app development',
    date: '3 hours ago',
  },
  {
    id: createId(),
    title: 'Marketing website',
    activity: 'Rachel Green added a new task in IOS app development',
    date: '4 hours ago',
  },
  {
    id: createId(),
    title: 'IOS app development',
    activity: 'Anna Smith added a new task in Data analytics tool',
    date: '5 hours ago',
  },
  {
    id: createId(),
    title: 'IOS app development',
    activity: 'John Bushmill added a new task in IOS app development',
    date: '6 hours ago',
  },
  {
    id: createId(),
    title: 'Data analytics tool',
    activity: 'Rachel Green added a new task in IOS app development',
    date: '7 hours ago',
  },
  {
    id: createId(),
    title: 'Internal dashboard',
    activity: 'Anna Smith added a new task in Data analytics tool',
    date: '8 hours ago',
  },
  {
    id: createId(),
    title: 'Internal dashboard',
    activity: 'John Bushmill added a new task in IOS app development',
    date: '9 hours ago',
  },
  {
    id: createId(),
    title: 'Data analytics tool',
    activity: 'Rachel Green added a new task in IOS app development',
    date: '10 hours ago',
  },
  {
    id: createId(),
    title: 'IOS app development',
    activity: 'Anna Smith added a new task in Data analytics tool',
    date: '11 hours ago',
  },
  {
    id: createId(),
    title: 'IOS app development',
    activity: 'John Bushmill added a new task in IOS app development',
    date: '12 hours ago',
  },
  {
    id: createId(),
    title: 'Data analytics tool',
    activity: 'Rachel Green added a new task in IOS app development',
    date: '13 hours ago',
  },
  {
    id: createId(),
    title: 'Internal dashboard',
    activity: 'Anna Smith added a new task in Data analytics tool',
    date: '14 hours ago',
  },
  {
    id: createId(),
    title: 'Internal dashboard',
    activity: 'John Bushmill added a new task in IOS app development',
    date: '15 hours ago',
  },
  {
    id: createId(),
    title: 'Data analytics tool',
    activity: 'Rachel Green added a new task in IOS app development',
    date: '16 hours ago',
  },
  {
    id: createId(),
    title: 'IOS app development',
    activity: 'Anna Smith added a new task in Data analytics tool',
    date: '17 hours ago',
  },
];

export const activeTasksData = [
  {
    title: 'Analysis',
    start: 1,
    end: 3,
  },
  {
    title: 'Design',
    start: 3,
    end: 5,
  },
  {
    title: 'Development',
    start: 5,
    end: 7,
  },
  {
    title: 'Testing',
    start: 7,
    end: 9,
  },
  {
    title: 'Deployment',
    start: 9,
    end: 10,
  },
];

export const activeTaskMonths = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

export const activeTaskViewOptions = [
  {
    label: 'Today',
    value: 'today',
  },
  {
    label: 'Month',
    value: 'month',
  },
];
