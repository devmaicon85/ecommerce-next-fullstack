import Link from "next/link";

export function Logo() {

    return (

        <div className="text-xl font-semibold cursor-pointer truncate">
            <Link href="/"><span className="text-primary">FSW </span>Store</Link>
        </div>
    )
}