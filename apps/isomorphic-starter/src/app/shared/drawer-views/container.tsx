"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { Drawer } from "rizzui";
import { useDrawer } from "@/app/shared/drawer-views/use-drawer";
import cn from "@utils/class-names";

export default function GlobalDrawer() {
  const { isOpen, view, placement, closeDrawer, containerClassName } = useDrawer();
  const pathname = usePathname();
  useEffect(() => {
    closeDrawer();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <Drawer
      isOpen={isOpen}
      onClose={closeDrawer}
      placement={placement}
      overlayClassName="dark:bg-opacity-40 dark:backdrop-blur-md"
      containerClassName={cn("dark:bg-gray-100 min-w-min max-w-[320px]", containerClassName)}
      className="z-[9999] h-screen"
      customSize={320}
    >
      {view}
    </Drawer>
  );
}
