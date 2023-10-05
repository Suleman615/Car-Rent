'use client'
import React from "react";
import image from 'next/image';
import {CustomButtonProps} from "@/types";
import Image from "next/image";

const CustomButton=({title,containerStyles,handleClick,textStyles,rightIcon,isDisabled , btnType}: CustomButtonProps )=>{
    return(
        <button disabled={false} type={btnType || 'button'} onClick={handleClick} className={`${containerStyles} flex flex-row relative justify-center items-center py-3 px-6 outline-none`} >
            <span className={`flex-1 ${textStyles}`}>{title}</span>
            {rightIcon&& <div className='relative w-6 h-6'>
                <Image src={rightIcon} alt='right icon' fill className='object-contain'/>

            </div>}
        </button>
    )
}

export default CustomButton