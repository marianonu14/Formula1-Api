

import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import Title from "../components/Title";
import Spinner from "../components/UI/Spinner";

const CircuitInformation = () => {
    const [seasonData, setseasonData] = useState([])
   
    useEffect(( ) => {
        fetch(`http://ergast.com/api/f1/circuits.json?limit=100&offset=20`)
          .then(res => res.json())
          .then(response => {
            const data = response.MRData.CircuitTable.Circuits;
            setseasonData(data)
          })
      }, [])

      
    return ( 
    <div>
        <Navbar />
        <Title title={'Circuit Information'}/>
        <div className="flex flex-col justify-evenly gap-5 px-10 pb-10 md:w-4/5 m-auto">
            {seasonData.length > 0 ? 
            seasonData.map(elem => 
            <div className="flex flex-col md:flex-row justify-between gap-5 p-5 text-xl border border-b-red-700" key={Math.random()}>
                <div className="flex flex-col gap-5">
                    <p><span className="font-bold">Circuit Name:</span>  {elem.circuitName}</p>
                    <p><span className="font-bold">Country:</span>  {elem.Location.country}</p>
                </div>
                <div className="flex flex-col gap-5 md:flex-row justify-between w-[60%]">
                    <p><span className="font-bold">Locality:</span>  {elem.Location.locality}</p>
                    <a className="text-red-600" href={elem.url} target="_blank" rel="noreferrer">More Information +</a>
                </div>
            </div>) : 
            <Spinner />}
        </div>
    </div>);
}
 
export default CircuitInformation;