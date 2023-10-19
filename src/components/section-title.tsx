import { ReactNode } from "react"

interface Props {
    children: ReactNode
}

export function SectionTitle({ children }: Props) {


    return (
        <h2 className="p-4 font-bold uppercase">{children}</h2>
    )
}