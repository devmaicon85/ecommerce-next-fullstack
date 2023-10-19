import Image from "next/image";

interface Props {
    src: string
    alt: string
}
export function BannerCard({ src, alt }: Props) {

    return (

        <Image
            src={src}
            height={0}
            width={0}
            className="h-auto w-full max-w-[400px]"
            sizes="100vw"
            alt={alt}
        />
    )
}