import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import Title from "../components/Title";
import Spinner from "../components/UI/Spinner";


const RaceSchedule = () => {
    const [scheduleData, setScheduleData] = useState([])
    const [year, setYear] = useState()
    const [inputValue, setInputValue] = useState()
    const [spinnerState, setSpinnerState] = useState(false)
   
    useEffect(( ) => {
        if (year){
            fetch(`https://ergast.com/api/f1/${year}.json`)
            .then(res => res.json())
            .then(response => {
              const data = response.MRData.RaceTable.Races;
              setSpinnerState(false)
              setScheduleData(data)
            })
        } return
      }, [year])

      const handleValue = (e) => {
        const value = Number(e.target.value);
        if (value < 2022 && value > 1971) {
            setInputValue(e.target.value);
        } return ;
      }

      const handleYear = (e) => {
        e.preventDefault()
        setSpinnerState(true)
        setYear(inputValue);
      }

      console.log(scheduleData);
      console.log(year);
    return ( 
    <div>
        <Navbar />
        <div className="race-container banner" />
        <Title title={'Race Schedule'}  />
        <form onSubmit={handleYear} className="flex justify-center gap-2 md:gap-5 w-[90%] m-auto">
            <input type="number" placeholder="Type Year" className="w-[60%] p-2 md:p-5" onChange={handleValue} />
            <button className="md:w-1/5">Search</button>
        </form>
        <p className="text-center py-10 text-2xl font-bold">Schedule Year: <span className="text-red-600">{year}</span></p>
        <div className="flex flex-col justify-center items-center gap-5 px-10 pb-10">
            {scheduleData.length > 0 && 
            scheduleData.map(elem => 
            <div className="flex flex-wrap md:flex-row justify-between w-full gap-5 p-5 text-xl border border-b-red-700" key={Math.random()}>
                <div className="flex flex-col gap-3">
                    <p><span className="font-bold">Race Name: </span>{elem.raceName}</p>
                    <p><span className="font-bold">Circuit Name: </span>{elem.Circuit.circuitName}</p>
                    <p><span className="font-bold">Country: </span>{elem.Circuit.Location.country}</p>
                </div>
                <div className="flex flex-col gap-5 w-[50%] md:flex-row md:justify-between">
                    <p><span className="font-bold">Round: </span>{elem.round}</p>
                    <a className="text-red-600" href={elem.url} target="_blank" rel="noreferrer">More Information +</a>
                </div>
            </div>)}
            {spinnerState && scheduleData.length === 0 && <Spinner />}
        </div>
    </div> );
}
 
export default RaceSchedule;