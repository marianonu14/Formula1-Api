import formulaOneLogo from '../public/formulaone_logo.png'
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
    return ( 
        <div className="w-full h-screen p-10 flex flex-col items-center justify-evenly">
            <div className='flex flex-col md:flex-row items-center justify-center'>
                <Image src={formulaOneLogo} alt="Formula 1 Logo"/>
                <h1 className='uppercase'>Formula 1 Api</h1>
            </div>
            <p className='text-xl md:text-2xl text-center'>All The Information About F1 Racing, It s Here !</p>
            <Link href="/main">
                <button className='w-60 text-lg'>Start Now</button>
            </Link>
        </div>
     );
}
 
export default Header;