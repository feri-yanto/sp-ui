
// NextJS
import Image from "next/image";

// Icons
import { HugeiconsIcon } from '@hugeicons/react'
import { Logout01Icon, Notification01Icon, Settings02Icon, Sun03Icon, UserCircleIcon } from "@hugeicons/core-free-icons"

// Shadcn Library
import { Button } from "../ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu";

// Custome Component
import MySidebarTrigger from "./sidebar-trigger";

export default function Navbar() {
  return (
    <nav className="w-full min-h-16 flex items-center px-5 bg-white border-b border-b-slate-200">
      <div className="flex-1">
        <MySidebarTrigger />
      </div>
      <div className="flex-1 flex items-center justify-end gap-x-5">
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon" className="rounded-lg bg-white">
            <HugeiconsIcon icon={Sun03Icon} />
          </Button>
          <Button variant="outline" size="icon" className="rounded-lg bg-white">
            <HugeiconsIcon icon={Notification01Icon} />
          </Button>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger render={
            <Button variant="ghost" size="icon-lg" className="overflow-hidden">
              <Image src="/images/profile.jpg" alt="profile picture" width={40} height={40} />
            </Button>
          } />
          <DropdownMenuContent className="px-3 py-2 mt-2 rounded-lg">
            <DropdownMenuGroup>
              <DropdownMenuItem className="rounded-md"><HugeiconsIcon icon={UserCircleIcon} /> Profil</DropdownMenuItem>
              <DropdownMenuItem className="rounded-md"><HugeiconsIcon icon={Settings02Icon} /> Pengaturan</DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="rounded-md"><HugeiconsIcon icon={Logout01Icon} /> Keluar</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
}