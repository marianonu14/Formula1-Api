import { useEffect, useState } from "react";
import Head from "next/head";

import Navbar from "../components/Navbar";
import Title from "../components/Title";
import Spinner from "../components/UI/Spinner";

const Season = () => {
    const [seasonData, setseasonData] = useState([])
   
    useEffect(( ) => {
        fetch(`https://ergast.com/api/f1/seasons.json?limit=100&offset=20`)
          .then(res => res.json())
          .then(response => {
            const data = response.MRData.SeasonTable.Seasons;
            setseasonData(data)
          })
      }, [])

      const infoSeason = 'All The Seasons, Between 1970 Until The Current Year'
      
    return ( 
    <div>
        <Head>
            <title>Formula 1 | Season</title>
            <meta name="description" content="Formula 1 App, about history information" />
            <link rel="icon" href="/favicon.ico" />
            <link href="https://fonts.googleapis.com/css2?family=Exo+2:wght@300&display=swap" rel="stylesheet" />
        </Head>
        <Navbar />
        <div className="season-container banner" />
        <Title title={'Seasons'} />
        <p className="text-center text-xl md:text-2xl p-10">{infoSeason}</p>
        <div className="flex flex-wrap justify-evenly gap-5 px-10 pb-10">
            {seasonData.length > 0 ? 
            seasonData.map(elem => 
            <div className="flex flex-col justify-evenly gap-5 p-5 text-xl border border-b-red-700" key={Math.random()}>
                <p><span className="font-bold">Year:</span>  {elem.season}</p>
                <a className="text-red-600" href={elem.url} target="_blank" rel="noreferrer">More Information +</a>
            </div>) : 
            <Spinner />}
        </div>
    </div>);
}
 
export default Season;