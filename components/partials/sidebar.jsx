
// NextJS
import Image from "next/image";

// Icons
import { HugeiconsIcon } from "@hugeicons/react";
import { AddCircleIcon, Agreement03Icon, ClipboardCheckIcon, ContentWritingIcon, DocumentValidationIcon, Home03Icon, HistoryIcon, TransactionHistoryIcon } from "@hugeicons/core-free-icons";

// Shadcn Library
import { CollapsibleContent } from "../ui/collapsible";
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarMenuSub, SidebarMenuSubButton, SidebarMenuSubItem } from "../ui/sidebar";

// Partials Components
import CollapsibleMenu from "./sub-menu";

export default function AppSidebar() {
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="px-3">
        <SidebarMenu>
          <SidebarMenuItem>
            <div className="flex items-center gap-x-3 overflow-hidden">
              <div className="size-10 shrink-0">
                <Image src="/images/brand-logo.svg" alt="brand logo" width={40} height={40} />
              </div>
              <span className="text-xl font-semibold">SIPINTAR</span>
            </div>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent className="px-1.5">
        <SidebarGroup>
          <SidebarGroupLabel>Utama</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton isActive variant="sidebarMenu">
                  <HugeiconsIcon icon={Home03Icon} /> <span>Beranda</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <CollapsibleMenu title="Perizinan" iconName={Agreement03Icon}>
                  <CollapsibleContent>
                    <SidebarMenuSub className="ml-5 mr-0">
                      <SidebarMenuSubItem>
                        <SidebarMenuSubButton className="py-4 rounded-sm">
                          <HugeiconsIcon icon={AddCircleIcon} /> <span>Buat izin</span>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                      <SidebarMenuSubItem>
                        <SidebarMenuSubButton className="py-4 rounded-sm">
                          <HugeiconsIcon icon={HistoryIcon} /> <span>Riwayat izin</span>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                      <SidebarMenuSubItem>
                        <SidebarMenuSubButton className="py-4 rounded-sm">
                          <HugeiconsIcon icon={ClipboardCheckIcon} /> <span>Persetujuan</span>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </CollapsibleMenu>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}