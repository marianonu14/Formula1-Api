import { useEffect, useState } from "react";
import Head from "next/head";

import Navbar from "../components/Navbar";
import Title from "../components/Title";
import Spinner from "../components/UI/Spinner";

const CircuitInformation = () => {
    const [seasonData, setseasonData] = useState([])
   
    useEffect(( ) => {
        fetch(`https://ergast.com/api/f1/circuits.json?limit=100&offset=20`)
          .then(res => res.json())
          .then(response => {
            const data = response.MRData.CircuitTable.Circuits;
            setseasonData(data)
          })
      }, [])

      
    return ( 
    <div>
        <Head>
            <title>Formula 1 | Circuit Information</title>
            <meta name="description" content="Formula 1 App, about history information" />
            <link rel="icon" href="/favicon.ico" />
            <link href="https://fonts.googleapis.com/css2?family=Exo+2:wght@300&display=swap" rel="stylesheet" />
        </Head>
        <Navbar />
        <div className="circuit-container banner" />
        <Title title={'Circuit Information'}/>
        <div className="flex flex-col justify-evenly gap-5 px-10 pb-10 m-auto">
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
            <div className="flex justify-center">
                <Spinner />
            </div>}
        </div>
    </div>);
}
 
export default CircuitInformation;