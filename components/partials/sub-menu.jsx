// Icons
import { HugeiconsIcon } from "@hugeicons/react";
import { ChevronDownIcon } from "@hugeicons/core-free-icons";

// Shadcn Library
import { SidebarMenuButton } from "../ui/sidebar";
import { Collapsible, CollapsibleTrigger } from "../ui/collapsible";

export default function CollapsibleMenu(props) {
  return (
    <Collapsible>
      <CollapsibleTrigger render={
        <SidebarMenuButton variant="sidebarMenu">
          <HugeiconsIcon icon={props.iconName} /> <span>{props.title}</span> <HugeiconsIcon icon={ChevronDownIcon} className="ml-auto transition-transform" />
        </SidebarMenuButton>
      } />
      {props.children}
    </Collapsible>
  );
}