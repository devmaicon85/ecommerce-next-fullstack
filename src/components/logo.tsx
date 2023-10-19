import Link from "next/link";

export function Logo() {

    return (

        <h1 className="text-xl font-semibold cursor-pointer">
            <Link href="/"><span className="text-primary">FSW </span>Store</Link>
        </h1>
    )
}