"use client";

import { ServerWithMembersWithProfiles } from "@/types";
import { MemberRole } from "@prisma/client";

import { ChevronDown } from "lucide-react";

import { 
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";

interface ServerHeaderProps {
    server: ServerWithMembersWithProfiles;
    role?: MemberRole
};

export const ServerHeader = ({
    server,
    role
}: ServerHeaderProps) => {
    const isAdmin = role ===MemberRole.ADMIN;
    const isModerator = isAdmin || role === MemberRole.MODERATOR;

    return (
        <DropdownMenu>
            <DropdownMenuTrigger
              className="focus:outline-none"
              asChild
            >
                <button
                  className="w-full text-md font-semibold px-3 flex items-center h-12 border-neutral-200 dark:border-neutral-800 border-b-2 hover: bg-zing-700/10 dark:hover:bg-zinc-700/50 transition"                  
                >
                    {server.name}
                    <ChevronDown className="h-5 w-5 ml-auto" />
                </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              className="w-56 text-xs font-medium text-black dark:text-neutral-400 space-y-[2px]"
            >

            </DropdownMenuContent>
        </DropdownMenu>
    )
}