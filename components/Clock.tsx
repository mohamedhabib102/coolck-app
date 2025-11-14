"use client"

import { useEffect, useRef, useState } from "react";
import { CiPlay1, CiPause1 } from "react-icons/ci";
import { IoReload } from "react-icons/io5";





interface Clock {
  hours: number;
  miuntes: number;
  seconds: number;
}

interface Colors {
  firstBG: string;
  lastBG: string;
  color: string;
}

const Clock: React.FC<Colors> = ({firstBG, lastBG, color}) => {
    const [toggle, setToggle] = useState<boolean>(false);
    const [clock, setClock] = useState<Clock>({
      hours: 0,
      miuntes: 0,
      seconds: 0,
    });
    const timerRef = useRef<NodeJS.Timeout | null>(null);

const tick = () => {
  setClock(prev => {
    let h = prev.hours;
    let m = prev.miuntes;
    let s = prev.seconds;
    

    s +=1

    if (s === 60){
      s = 0;
      m += 1
    }

    if (m === 60){
      m=0;
      h +=1
    }

    return { hours: h, miuntes: m, seconds: s };
  });
};

  const workClock = () => {
     if (timerRef.current){
       clearInterval(timerRef.current)
       timerRef.current = null;
       return;
     };

     timerRef.current = setInterval(tick, 1000)
  }

  const reload = () => {
    if (timerRef.current){
      clearInterval(timerRef.current)
      timerRef.current = null
      setToggle(!toggle)
      setClock({
        hours: 0,
        miuntes: 0,
        seconds: 0,
      })
    };
  }
     useEffect(() => {
      console.log(firstBG, lastBG, color);
      
     }, [firstBG, lastBG, color])
    return (
        <>
          <section className="lg:py-14 md:py-10 pt-0 pb-6"> 
           <div
             style={{ backgroundColor: firstBG }}
             className="p-7 rounded-lg text-white mt-10 mb-10 lg:w-lg m-auto"
           >
             <h2 className="text-center text-3xl mb-4">Your Clock</h2>
           
             <div className="flex items-center justify-center gap-4">
               <span
                 style={{ backgroundColor: lastBG, color: color }}
                 className="lg:w-36 w-[calc(100%/3)] p-4 lg:text-6xl text-4xl text-center rounded-lg"
               >
                 {clock.hours.toString().padStart(2, "0")}
               </span>
               <span
                 style={{ backgroundColor: lastBG, color: color }}
                 className="lg:w-36 w-[calc(100%/3)] p-4 lg:text-6xl text-4xl text-center rounded-lg"
               >
                 {clock.miuntes.toString().padStart(2, "0")}
               </span>
               <span
                 style={{ backgroundColor: lastBG, color: color }}
                 className="lg:w-36 w-[calc(100%/3)] p-4 lg:text-6xl text-4xl text-center rounded-lg"
               >
                 {clock.seconds.toString().padStart(2, "0")}
               </span>
             </div>
           </div>
           
           

            <div className="flex flex-row-reverse items-center lg:justify-between justify-around lg:w-lg m-auto w-full">
            <button
            onClick={() => {
              setToggle(!toggle)
              workClock()
            }}
             className={`flex items-center gap-1.5 bg-gray-600 text-white
            lg:py-1.5 lg:px-1 p-3 w-38 rounded-lg justify-center cursor-pointer transition hover:bg-gray-700`}
            >
              {toggle ? (
              <CiPause1 
              size={50}
              />
              ) : (
                <CiPlay1
                size={50}
                />
              )}
            </button>
            <button
            onClick={reload}
             className={`flex items-center gap-1.5 bg-gray-600 text-white
            lg:py-1.5 lg:px-1 p-3 w-38 w- rounded-lg justify-center cursor-pointer transition hover:bg-gray-700`}
            >
              <IoReload 
              size={50}
              />
            </button>
            </div>
        </section>
        </>
    )
}

export default Clock