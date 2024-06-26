"use client";

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { Separator } from "@/components/ui/separator"
import React from "react";

interface ActionToolTipProps {
    label: string;
    children: React.ReactNode;
    side?: "top" | "right" | "bottom" | "left";
    align?: "start" | "center" | "end";
}
export const ActionToolTip = ({
    label,
    children,
    side,
    align
}: ActionToolTipProps) => {
    return (
        <div>
            <TooltipProvider>
                <Tooltip delayDuration={50}>
                    <TooltipTrigger asChild>
                        {children}
                    </TooltipTrigger>
                    <TooltipContent side={side} align={align}>
                        <p className="font-semibold text-sm capitalize">
                            {label.toLowerCase()}
                        </p>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
            <Separator />
        </div>
    );
}