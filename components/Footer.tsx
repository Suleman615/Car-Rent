import Link from "next/link";
import Image from "next/image";
import {footerLinks} from "@/constants";
const Footer=()=>{
        return(
            <footer className='flex flex-col text-black-100-100 mt-5 border-t border-gray-100 '>
                <div className='flex max-md:flex-col flex-nowrap lg:flex-wrap justify-between  sm:px-16 md:px-16 py-10 border-b '>
                    <div className='flex flex-col justify-start items-start gap-6 mx-auto'>
                        <Image src='/logo.svg' alt='LOGO' width={118} height={18} className='object-contain'/>
                        <p className='text-base text-gray-700'>
                            Car Hub 2023 <br/>
                            All Rights Reserved &copy;
                        </p>
                    </div>

                    <div className='flex-1 w-full flex md:justify-end flex-wrap max-md:mt-10 gap-20 md:gap-10 lg:gap-20 '>
                        {footerLinks.map((link)=>(
                            <div key={link.title} className='flex flex-col gap-3 text-base min-w-[200px] sm:min-w-[auto]  mx-auto'>
                                <h3 className='font-bold'>{link.title}</h3>
                                {link.links.map((item)=>(
                                    <Link
                                        key={item.title}
                                        href={item.url}
                                        className='text-gray-500 '
                                    >{item.title}</Link>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
                <div className='flex justify-between  items-center flex-wrap  bordet-t border-gray-100 sm:px-16 px-5 py-6'>
                    <p className='mx-auto'>@2023 Carhub. All Rights Reserved &copy;</p>
                    <div className='flex-1 flex sm:justify-end justify-center max-sm:mt-4 gap-10'>
                        <Link
                            href='/'
                            className='text-gray-500'>
                            Privacy Policy
                        </Link>
                        <Link
                            href='/'
                            className='text-gray-500'>
                            Terms of use
                        </Link>
                    </div>
                </div>

            </footer>
        )
}

export default Footer;