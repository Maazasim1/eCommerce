import React from 'react'

import Link from 'next/link'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHome,
    faCar,
    faBuilding,
    faMobileScreen,
    faChildReaching,
} from "@fortawesome/free-solid-svg-icons";

import {faFacebook,faInstagram,faGoogle,faTwitter} from "@fortawesome/free-brands-svg-icons"


export default function Sidebar(props) {
    return (
        < div className='h-[85%] w-[14%] fixed z-20 top-0 left-0  rounded-xl overflow-x-hidden ml-[0px] mt-[150px] mb-[50px] pt-20 bg-tranparent'>


            <div className='flex flex-col gap-8'>
                <div className='pl-10'>
                    <a className='text-white font-bold   font-poppins p-4 text-center   bg-Orange  hover:text-textWhite hover:bg-white hover:pr-[60px] rounded-xl w-80'>
                        <FontAwesomeIcon icon={faHome}
                            style={{ fontSize: 20 }}
                            className="pr-7 text-white"
                        />Home
                    </a>
                </div>


                <div className='pl-10'>
                    <a className='text-white font-bold   font-poppins p-4 text-center   bg-Orange  hover:text-textWhite hover:bg-white hover:pr-[60px] rounded-xl w-80'>
                        <FontAwesomeIcon icon={faCar}
                            style={{ fontSize: 20 }}
                            className="pr-7 text-white"
                        />Vehicles
                    </a>
                </div>


                <div className='pl-10'>
                    <a className='text-white font-bold   font-poppins p-4 text-center   bg-Orange  hover:text-textWhite hover:bg-white hover:pr-[60px] rounded-xl w-80'>
                        <FontAwesomeIcon icon={faBuilding}
                            style={{ fontSize: 20 }}
                            className="pr-7 text-white"
                        />Property
                    </a>
                </div>


                <div className='pl-10'>
                    <a className='text-white font-bold   font-poppins p-4 text-center   bg-Orange  hover:text-textWhite hover:bg-white hover:pr-[60px] rounded-xl w-80'>
                        <FontAwesomeIcon icon={faMobileScreen}
                            style={{ fontSize: 20 }}
                            className="pr-7 text-white"
                        />Mobile Phones
                    </a>
                </div>


                <div className='pl-10'>
                    <a className='text-white font-bold   font-poppins p-4 text-center   bg-Orange  hover:text-textWhite hover:bg-white hover:pr-[60px] rounded-xl w-80'>
                        <FontAwesomeIcon icon={faChildReaching}
                            style={{ fontSize: 20 }}
                            className="pr-7 text-white"
                        />Kids
                    </a>
                </div>

                <div className='absolute bottom-20 left-16 text-lg'>
                <FontAwesomeIcon icon={faFacebook} className="text-white p-2" />
                <FontAwesomeIcon icon={faInstagram} className="text-white p-2" />
                <FontAwesomeIcon icon={faGoogle} className="text-white p-2" />
                <FontAwesomeIcon icon={faTwitter} className="text-white p-2" />
                    

                </div>




            </div>


        </div>
    )
}
