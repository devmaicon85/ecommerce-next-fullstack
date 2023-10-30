import { Skeleton } from "@/components/ui/skeleton"
import { cn } from "@/lib/utils"

export default async function Loading() {
    return (
        <div >

            <div className="flex flex-col  sticky top-0 -z-10">
                <hr className="my-5 border-0" />
                <div className="flex flex-col bg-accent w-full items-center justify-center">
                    <div className=" p-5 flex justify-center items-center min-w-[300px] min-h-[300px] max-w-[300px] max-h-[300px] ">
                        <Skeleton />
                    </div>
                </div>
            </div >

            <div className="bg-background opacity-[0.98] rounded-t-3xl left-0 right-0 py-10 flex flex-col justify-center items-center w-full ">


                {/* IMAGES ADICIONAIS */}
                <div className="flex gap-4 sm:justify-center  w-full overflow-x-auto px-6 [&::-webkit-scrollbar]:hidden">
                    {Array.from({ length: 4 }).map((_,index) => (

                        <Skeleton key={index}  className="border cursor-pointer bg-accent rounded-lg w-[100px] h-[100px] overflow-hidden  flex justify-center items-center p-2"/>
                    ))}
                </div>


                <div className="container flex-1">

                    <hr className="my-5 border-0" />

                    <Skeleton className="bg-accent my-4 w-1/2 h-8"></Skeleton>
                    <Skeleton className="bg-accent my-4 w-1/3 h-8"></Skeleton>

                    <Skeleton className="bg-accent my-4 w-full h-8"></Skeleton>
                    <Skeleton className="bg-accent my-4 w-full h-8"></Skeleton>
                    <Skeleton className="bg-accent my-4 w-full h-8"></Skeleton>

                    
                    <hr className="my-5 border-0" />

                    {/* <ProductPrice product={product} /> */}


                    <div className="opacity-50 text-sm  text-justify leading-6">
                        <Skeleton />
                    </div>

                    <hr className="my-5 border-0" />

                    <div className="gap-2 flex flex-col">
                        <div className="text-2xl relative font-bold flex flex-col gap-2  ">
                            <div className="flex gap-2">
                                <Skeleton />
                            </div>
                        </div>
                    </div>

                    <hr className="my-10 border-0" />


                    <div className="flex flex-wrap gap-8 items-center justify-center ">
                        <div className="flex-1">
                            <Skeleton />
                        </div>
                        <div className="flex-1 flex justify-center lg:justify-end">
                            <Skeleton />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}


