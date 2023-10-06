'use client';
import {useRouter} from "next/navigation";
import {ShoeMoreProps} from "@/types";
import {CustomButton} from "@/components";
import {updateSearchParams} from "@/utils";

const ShowMore=({pageNumber, isNext}:ShoeMoreProps)=>{
    const router=useRouter()
    const handleShowMore=()=>{
        const newLimit= (pageNumber + 1) * 8
        const newPathName= updateSearchParams("limit", `${newLimit}`)

        router.push(newPathName ,  { scroll: false})
    }
    return(
        <div className='w-full flex justify-center items-center gap-5 mt-10'>
            {!isNext && (<CustomButton title='Show More ' btnType='button' containerStyles='bg-primary-blue rounded-full text-white border-2 border-white hover:border-primary-blue' handleClick={handleShowMore}/>
            )}
        </div>
    )
}

export default ShowMore;