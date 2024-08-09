import { Metadata } from "next";
import PageHeader from "@/app/shared/page-header";

// SEO metadata
export const metadata: Metadata = {
  title: "Priority & Status | XCO3",
};

const pageHeader = {
  title: "Priority & Status",
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

export default function PriorityStatus() {
  return (
    <>
      <PageHeader
        title={pageHeader.title}
        breadcrumb={pageHeader.breadcrumb}
      />
    </>
  );
}