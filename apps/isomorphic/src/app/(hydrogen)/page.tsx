import ProjectDashboard from '@/app/shared/project-dashboard';

import { metaObject } from '@/config/site.config';

export const metadata = {
  ...metaObject(),
};

export default function ProjectDashboardPage() {
  return <ProjectDashboard />;
}

