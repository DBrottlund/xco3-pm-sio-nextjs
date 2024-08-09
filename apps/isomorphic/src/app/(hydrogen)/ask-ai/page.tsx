import { Metadata } from "next";
import PageHeader from "@/app/shared/page-header";

// SEO metadata
export const metadata: Metadata = {
  title: "Ask AI | XCO3",
};

const pageHeader = {
  title: "Ask AI",
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

export default function AskAI() {
  return (
    <>
      <PageHeader
        title={pageHeader.title}
        breadcrumb={pageHeader.breadcrumb}
      />
    </>
  );
}