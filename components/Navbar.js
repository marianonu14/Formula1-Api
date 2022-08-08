import Image from "next/dist/client/image";
import Link from "next/dist/client/link";
import { useState } from "react";

import formulaOneLogoWhite from '../public/formulaonewhite_logo.png'
import formulaOneLogoRed from '../public/formulaone_logo.png'
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";



const Navbar = () => {
    const [navState, setNavState] = useState(false);

    const handleNav = () => {
        setNavState(!navState);
    }

    return ( 
        <div>
            <nav className="flex justify-between items-center bg-[#e10600] p-6 md:p-8 h-20">
                <Link href="/main" className="h-20 flex" >
                    <a>
                        <Image src={formulaOneLogoWhite}  alt='Formula One Logo' height={60} width={120}/>
                    </a>
                </Link>
                <div>
                    <ul className="hidden md:flex justify-evenly gap-5 text-xl text-white">
                        <Link href="/season">
                            <li>Season</li>
                        </Link>
                        <Link href="/raceSchedule">
                            <li>Race Schedule</li>
                        </Link>
                        <Link href="/drivers">
                            <li>Drivers</li>
                        </Link>
                        <Link href="/circuitInformation">
                            <li>Circuit Information</li>
                        </Link>
                    </ul>
                    <div className="md:hidden cursor-pointer text-white py-10" onClick={handleNav}>
                        <AiOutlineMenu size={25}/>
                    </div>
                </div>
            </nav>
            <div className={navState ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70 ease-in duration-300" : undefined}>
            <div className={navState ? 
                            "md:hidden fixed left-0 top-0 w-[100%] sm:w-[45%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-700" : 
                            "md:hidden fixed left-[-100%] top-0 w-[75%] sm:w-[45%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"}>
                <div className="flex justify-between item-center mb-10">
                <Image src={formulaOneLogoRed}  alt='Formula One Logo' height={60} width={120}/>
                    <div className="cursor-pointer" onClick={handleNav}>
                        <AiOutlineClose size={25}/>
                    </div>
                </div>
                <ul className="flex flex-col gap-10">
                    <Link href="/season">
                        <li onClick={()=>{setNavState(false)}} className="ml-10 text-md hover:text-red-600 hover:border-b">Season</li>
                    </Link>
                    <Link href="/raceSchedule">
                        <li onClick={()=>{setNavState(false)}} className="ml-10 text-md hover:text-red-600 hover:border-b">Race Schedule</li>
                    </Link>
                    <Link href="/drivers">
                        <li onClick={()=>{setNavState(false)}} className="ml-10 text-md hover:text-red-600 hover:border-b">Drivers</li>
                    </Link>
                    <Link href="/circuitInformation">
                        <li onClick={()=>{setNavState(false)}} className="ml-10 text-md hover:text-red-600 hover:border-b">Circuit Information</li>
                    </Link>
                </ul>
            </div>
        </div>
    </div>
     );
}
 
export default Navbar;
