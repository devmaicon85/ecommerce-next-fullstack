import { ArrowDownIcon } from "lucide-react";
import { Badge } from "./ui/badge";
import { cn } from "@/lib/utils";

interface BadgeProps {
    children: number;
    className?: string
}
export function BadgeDiscount({ children, className, ...props }: BadgeProps) {
    return (
        <>
            {+children > 0 &&
                <Badge className={cn("text-sm bg-primary rounded-full px-3 h-7 flex gap-1 items-center", className)}>
                    <ArrowDownIcon size={10} /> {children}%
                </Badge>
            }
        </>
    )

}
