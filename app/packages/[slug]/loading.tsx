import { Skeleton } from "@nextui-org/skeleton"
import { Card } from "@nextui-org/card"

export default function Loading() {
  return (
    <div className="mx-auto  2xl:max-w-[90vw] px-4 sm:px-6 lg:px-8 mt-10 mb-10">
      <Skeleton className=" w-1/5 rounded-lg lg:text-3xl">
        <div className="h-5 w-2/5 rounded-lg bg-default-300"></div>
      </Skeleton>
      <div className="lg:mt-[20px] mt-[60px] flex flex-col gap-2 w-full">
        <div className="flex gap-2">
          <Skeleton className=" w-[170px] h-[170px] rounded-lg lg:text-3xl"></Skeleton>
          <div className="space-y-4 mt-[50px]">
            <Skeleton className=" w-[70px] h-3 rounded-lg lg:text-3xl"></Skeleton>
            <Skeleton className=" w-[170px] h-3 rounded-lg lg:text-3xl"></Skeleton>
            <div className="flex justify-between pt-[20px]">
              <Skeleton className=" w-[50px] h-3 rounded-lg lg:text-3xl"></Skeleton>
              <Skeleton className=" w-[40px] h-3 rounded-lg lg:text-3xl"></Skeleton>
            </div>
          </div>
        </div>
        <div className="flex gap-2">
          <Skeleton className=" w-[170px] h-[170px] rounded-lg lg:text-3xl"></Skeleton>
          <div className="space-y-4 mt-[50px]">
            <Skeleton className=" w-[70px] h-3 rounded-lg lg:text-3xl"></Skeleton>
            <Skeleton className=" w-[170px] h-3 rounded-lg lg:text-3xl"></Skeleton>
            <div className="flex justify-between pt-[20px]">
              <Skeleton className=" w-[50px] h-3 rounded-lg lg:text-3xl"></Skeleton>
              <Skeleton className=" w-[40px] h-3 rounded-lg lg:text-3xl"></Skeleton>
            </div>
          </div>
        </div>
        <div className="flex gap-2">
          <Skeleton className=" w-[170px] h-[170px] rounded-lg lg:text-3xl"></Skeleton>
          <div className="space-y-4 mt-[50px]">
            <Skeleton className=" w-[70px] h-3 rounded-lg lg:text-3xl"></Skeleton>
            <Skeleton className=" w-[170px] h-3 rounded-lg lg:text-3xl"></Skeleton>
            <div className="flex justify-between pt-[20px]">
              <Skeleton className=" w-[50px] h-3 rounded-lg lg:text-3xl"></Skeleton>
              <Skeleton className=" w-[40px] h-3 rounded-lg lg:text-3xl"></Skeleton>
            </div>
          </div>
        </div>
        <div className="flex gap-2">
          <Skeleton className=" w-[170px] h-[170px] rounded-lg lg:text-3xl"></Skeleton>
          <div className="space-y-4 mt-[50px]">
            <Skeleton className=" w-[70px] h-3 rounded-lg lg:text-3xl"></Skeleton>
            <Skeleton className=" w-[170px] h-3 rounded-lg lg:text-3xl"></Skeleton>
            <div className="flex justify-between pt-[20px]">
              <Skeleton className=" w-[50px] h-3 rounded-lg lg:text-3xl"></Skeleton>
              <Skeleton className=" w-[40px] h-3 rounded-lg lg:text-3xl"></Skeleton>
            </div>
          </div>
        </div>
        <div className="flex gap-2">
          <Skeleton className=" w-[170px] h-[170px] rounded-lg lg:text-3xl"></Skeleton>
          <div className="space-y-4 mt-[50px]">
            <Skeleton className=" w-[70px] h-3 rounded-lg lg:text-3xl"></Skeleton>
            <Skeleton className=" w-[170px] h-3 rounded-lg lg:text-3xl"></Skeleton>
            <div className="flex justify-between pt-[20px]">
              <Skeleton className=" w-[50px] h-3 rounded-lg lg:text-3xl"></Skeleton>
              <Skeleton className=" w-[40px] h-3 rounded-lg lg:text-3xl"></Skeleton>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
