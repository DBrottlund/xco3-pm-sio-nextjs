import { Metadata } from "next";
import PageHeader from "@/app/shared/page-header";

// SEO metadata
export const metadata: Metadata = {
  title: "Integrations | XCO3",
};

const pageHeader = {
  title: "Integrations",
//   breadcrumb: [
//     {
//       href: "/priority",
//       name: "Priority & Status",
//     },
//     {
//       name: "Priority & Status",
//     },
//   ],
  breadcrumb: [],
};

export default function Integrations() {
  return (
    <>
      <PageHeader
        title={pageHeader.title}
        breadcrumb={pageHeader.breadcrumb}
      />
    </>
  );
}