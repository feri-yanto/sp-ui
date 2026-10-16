"use client";

// Icons
import { HugeiconsIcon } from '@hugeicons/react'
import { Menu01Icon, EllipsisVerticalIcon } from "@hugeicons/core-free-icons"

// Shadcn Library
import { Button } from "../ui/button";
import { useSidebar } from "../ui/sidebar";

export default function MySidebarTrigger() {
  const { state, isMobile, toggleSidebar } = useSidebar();

  if (isMobile) {
    return (
      <Button variant="outline" onClick={toggleSidebar} size="icon-lg" className="rounded-lg bg-white">
        <HugeiconsIcon icon={Menu01Icon} />
      </Button>
    );
  }

  return (
    <Button variant="outline" onClick={toggleSidebar} size="icon-lg" className="rounded-lg bg-white">
      <HugeiconsIcon icon={state == "expanded" ? Menu01Icon : EllipsisVerticalIcon} />
    </Button>
  );
}