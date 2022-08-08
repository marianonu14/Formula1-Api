import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import Title from "../components/Title";


const Main = () => {
    const [seasonData, setseasonData] = useState([])
   
    useEffect(( ) => {
        fetch(`https://ergast.com/api/f1/current/last/results.json?limit=5`)
          .then(res => res.json())
          .then(response => {
            const data = response.MRData.RaceTable.Races[0].Results;
            setseasonData(data)
          })
      }, [])

    return ( 
    <div>
        <Navbar />
        <Title title={'Main Page'} />
        <h2></h2>
        <h2 className="text-center p-10">Last Race - Season {new Date().getFullYear()}</h2>
        <div className="flex flex-col justify-evenly px-10 pb-10">
            <div className="hidden md:flex justify-between p-5 bg-red-600 text-lg text-white">
                <div className="flex justify-between w-1/2">
                    <p>Name</p>
                    <p>Pos</p>
                </div>
                <div className="flex justify-between w-1/3">
                    <p>Nat</p>
                    <p>Car</p>
                </div>
            </div>
            {1 > 0 ? 
            seasonData.map(elem => 
            <div className="flex flex-col md:flex-row justify-between p-5 text-xl border border-b-black md:border gap-5" key={Math.random()}>
                <div className="flex flex-col md:flex-row justify-between md:w-1/2 gap-5">
                    <p><span className="text-red-600 font-bold md:hidden">Name: </span>{elem.Driver.givenName} {elem.Driver.familyName}</p>
                    <p className="md:bg-red-800 md:rounded-full md:w-8 md:h-8 md:text-center md:text-white"><span className="text-red-600 font-bold md:hidden">Postion: </span>{elem.position}</p>
                </div>
                <div className="flex flex-col md:flex-row justify-between md:w-1/3 gap-5">
                    <p><span className="text-red-600 font-bold md:hidden">Nat: </span>{elem.Driver.nationality}</p>
                    <p><span className="text-red-600 font-bold md:hidden">Car: </span>{elem.Constructor.name}</p>
                </div>
            </div>) : ''}
        </div>
    </div>);
}
 
export default Main;