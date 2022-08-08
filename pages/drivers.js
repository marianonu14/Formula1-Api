import { useEffect, useState } from "react";
import Image from "next/dist/client/image";

import Navbar from "../components/Navbar";
import Title from "../components/Title";
import Spinner from "../components/UI/Spinner";

const Drivers = () => {
    const [seasonData, setseasonData] = useState([])
   
    useEffect(( ) => {
        fetch(`http://ergast.com/api/f1/drivers.json?limit=900&offset=20`)
          .then(res => res.json())
          .then(response => {
            const data = response.MRData.DriverTable.Drivers;
            setseasonData(data)
          })
      }, [])

      const infoSeason = 'All The Drivers';
      
    return ( 
    <div>
        <Navbar />
        <Title title={'Drivers'} info={infoSeason}/>
        <div className="flex flex-col justify-evenly gap-5 px-10 pb-10">
            {seasonData.length > 0 ? 
            seasonData.map(elem => 
            <div className="flex flex-col md:flex-row justify-between w-full xl:w-3/4 m-auto gap-5 p-5 text-xl border border-b-red-700" key={Math.random()}>
                <div className="flex flex-col md:flex-row justify-between md:w-[70%] gap-5">
                    <div className="flex flex-col gap-5">
                        <p><span className="font-bold">Name:</span>  {elem.givenName}</p>
                        <p><span className="font-bold">Last Name:</span>  {elem.familyName}</p>
                    </div>
                    <div className="flex flex-col gap-5">
                        <p><span className="font-bold">Nationality:</span>  {elem.nationality}</p>
                        <p><span className="font-bold">Date of Birth:</span>  {elem.dateOfBirth}</p>
                    </div>
                </div>
                <a className="text-red-600" href={elem.url} target="_blank" rel="noreferrer">More Information +</a>
            </div>) : 
            <Spinner />}
        </div>
    </div>)};

export default Drivers;