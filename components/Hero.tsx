'use client'
import React from "react";
import {CustomButton} from "@/components";
import Image from "next/image";

const  Hero=()=>{
            const handleScroll=()=>{}

    return (
        <div className='flex xl:flex-row flex-col gap-5 relative z-0 max-w-[1440px] mx-auto'>

            {/************ Top Heading Section ************/}
            <div className='flex-1 pt-36 sm:px-16 px-6'>
                <h1 className='2xl:text-[72px] sm:text-[64px] text-[50px] font-extrabold'>Find , Book or Rent a CAR --quickly and Easily</h1>
                <p className='text-[27px] text-black-100 font-light mt-5'>Streamline Your car rental experience with our effortless booking process.</p>

                <CustomButton
                    title='Explore Cars'
                    containerStyles='bg-primary-blue text-white rounded-full mt-10 border-2 border-white hover:border-primary-blue'
                    handleClick={handleScroll}
                />
            </div>

            {/**************** Hero Image Section ********************/}
            <div className='xl:flex-[1.5] flex justify-end items-end w-full xl:h-screen'>
                <div className='relative xl:w-full w-[90%] xl:h-full h-[300px]  md:h-[590px] z-0'>
                    <Image src='/hero.png'  alt='hero' fill className='object-contain'/>
                </div>
                <div className='absolute   xl:-top-28 xl:-right-[45rem]  -right-1/4 bg-hero-bg bg-repeat-round -z-10 w-full xl:h-screen h-[300px] md:h-[590px] overflow-hidden'></div>

            </div>
        </div>
    )
}

export default Hero