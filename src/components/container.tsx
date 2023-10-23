interface Props {
    children: React.ReactNode
}

export function Container({ children }: Props) {
    return (
        <div className="xs:container mx-4 xs:mx-auto my-5">
            {children}
        </div>
    )
}