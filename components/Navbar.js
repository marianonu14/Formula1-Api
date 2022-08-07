import Image from "next/dist/client/image";
import Link from "next/dist/client/link";
import formulaOneLogo from '../public/formulaonewhite_logo.png'

const Navbar = () => {
    return ( 
        <nav className="flex justify-between items-center bg-[#e10600] p-8 h-20">
            <Link href="/main" className="h-20 flex" >
                <a>
                    <Image src={formulaOneLogo}  alt='Formula One Logo' height={60} width={120}/>
                </a>
            </Link>
            <div className="hidden md:flex justify-evenly gap-5 text-lg text-white">
                <Link href="/main"><a>Season</a></Link>
                <Link href="/main"><a>Race Schedule</a></Link>
                <Link href="/main"><a>Drivers</a></Link>
                <Link href="/main"><a>Circuit Information</a></Link>
            </div>
        </nav>
     );
}
 
export default Navbar;
