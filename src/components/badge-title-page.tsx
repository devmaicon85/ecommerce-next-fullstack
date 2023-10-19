import { ShapesIcon } from "lucide-react";
import { Badge } from "./ui/badge";

interface Props {
    children: React.ReactNode
}
export function BadgeTitlePage({ children }: Props) {

    return (

        <Badge className="gap-2 uppercase text-sm px-5 py-1 border rounded-full border-primary" variant={"outline"}>
            {children}
        </Badge>
    )
}