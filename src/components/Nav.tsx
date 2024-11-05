import React, { useEffect, useState } from 'react'
import { TfiAlignJustify } from "react-icons/tfi";
import { CiShoppingCart } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";
import { IoIosSearch } from "react-icons/io";
import SideManu from './SideManu';

const Nav = () => {
    const [isOpenSideManu, setIsOpenSideManu] = useState(false)
    const [isMobile, setIsMobile] = useState(true)
    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 1024)
        window.addEventListener('resize', handleResize)
        handleResize()
        return () => window.removeEventListener('resize', handleResize)
    }, [])
    return (
        <>
            <div className='flex w-full justify-center pt-5 px-10 lg:px-20'>
                <div className=' flex basis-1/3 items-center p-3 justify-start'>
                    {!isMobile && <p>this is the collections</p>}
                    {isMobile &&
                        (isOpenSideManu ?
                            <RxCross1 className='cursor-pointer w-6 h-6' onClick={() => setIsOpenSideManu(false)} />
                            : <TfiAlignJustify className='cursor-pointer w-6 h-6' onClick={() => setIsOpenSideManu(true)} />)
                    }
                </div>
                <div className='flex basis-1/3 justify-center items-center flex-col'>
                    <p className='font-bold'>boatboyyikyik</p>
                    <p>Thailand</p>
                </div>
                <div className='flex basis-1/3 pr-5 justify-end gap-2'>
                    <IoIosSearch className='cursor-pointer w-8 h-8' />
                    <CiShoppingCart className='cursor-pointer w-8 h-8' />
                </div>
            </div>
            <div className='absolute top-[calc(68px)] left-0'>
                {isOpenSideManu && <SideManu />}
            </div>
        </>
    )
}

export default Nav