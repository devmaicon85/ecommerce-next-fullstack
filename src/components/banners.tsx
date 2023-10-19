import { randomInt } from "crypto";
import { BannerCard } from "./banner-card";

export function Banners() {

    const bannersUrl = [
        "/banner-home-01.png",
        "/banner-home-02.png",
        "/banner-home-03.png",
    ]

    return (

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center items-center mx-auto">
            <div className='flex justify-center'>
                <BannerCard
                    src={bannersUrl[randomInt(0, 2)]}
                    alt=""
                />
            </div>

            <div className='hidden md:flex justify-center'>
                <BannerCard
                    src={bannersUrl[randomInt(0, 2)]}
                    alt=""
                />
            </div>

            <div className='hidden lg:flex justify-center'>
                <BannerCard
                    src={bannersUrl[randomInt(0, 2)]}
                    alt=""
                />
            </div>

            <div className='hidden xl:flex justify-center'>
                <BannerCard
                    src="/banner-home-01.png"
                    alt=""
                />
            </div>
        </div>
    )
}