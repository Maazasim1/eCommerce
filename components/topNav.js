import React from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
    faSearch,
    faBagShopping,
    faCircleArrowLeft,
    faCircleArrowRight,
    faLocationDot,
    faCartShopping,
    faBars,
} from "@fortawesome/free-solid-svg-icons";


export default function TopNav() {
    return (
        <div>
            <div className='sticky top-0  z-10 pl-7 mb-10' >

                <div className='flex flex-row sm:w-full h-[65px] justify-end pr-10 bg-Orange sticky top-0' id='navbar'>
                    <div className='absolute left-0 w-screen'>
                        <FontAwesomeIcon icon={faBagShopping} className='font-20 text-white pr-5 text-xl' />

                        <a className=' text-poppins font-normal w-[100px] text-white'>
                            Modern Logo
                        </a>
                        <a className='pl-40 text-3xl text-white'>OFFERS  </a>
                        
                        <a className='mb-20 text-white'> | New Offers</a>
                        <FontAwesomeIcon icon={faCircleArrowLeft} className='pl-5 p-3 text-white'/>
                        <FontAwesomeIcon icon={faCircleArrowRight} className='p-3 text-white'/>
                    </div>


                  

                    <FontAwesomeIcon
                        icon={faSearch}
                        style={{ fontSize: 20 }}
                        className="pr-10 pt-5 text-white"
                    />
                    
                    <FontAwesomeIcon icon={faLocationDot}
                        style={{ fontSize: 20}}
                        className="pt-5 text-white"
                    />
                    <FontAwesomeIcon icon={faCartShopping}
                        style={{ fontSize: 20 }}
                        className="pl-5 pt-5 text-white"
                    />
                    
                    <FontAwesomeIcon icon={faBars}
                        style={{ fontSize: 20, color: "white",opacity:'0.6' }}
                        className="pl-20 pt-5 text-white"
                    />
                   



                </div>
            </div>
        </div>
    )
}
