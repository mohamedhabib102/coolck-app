"use client"

import { useEffect, useRef, useState } from "react";
import { CiPlay1, CiPause1 } from "react-icons/ci";
import { IoReload } from "react-icons/io5";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper/modules";



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

interface Goals {
  name: string;
  clock: Clock;
  date: string;
}



const Clock: React.FC<Colors> = ({firstBG, lastBG, color}) => {
    const [toggle, setToggle] = useState<boolean>(false);
    const [clock, setClock] = useState<Clock>({
      hours: 0,
      miuntes: 0,
      seconds: 0,
    });
    const timerRef = useRef<NodeJS.Timeout | null>(null);
    const [typing, setTyping] = useState<boolean>(false);
    const [inputText, setInputText] = useState<string>("Your Clock")
    const [goals, setGoals] = useState<Goals[]>([])

const tick = () => {
  setClock(prev => {
    let h = prev.hours;
    let m = prev.miuntes;
    let s = prev.seconds;

    s +=1
    if (s === 60){
      s = 1;
      m += 1
    }

    if (m === 60){
      m=1;
      h +=1
    }
    return { hours: h, miuntes: m, seconds: s };
  });
};

  const workClock = () => {
     if (timerRef.current){
       clearInterval(timerRef.current)
       timerRef.current = null;
       const savedClock = clock;
       const currentClock = {
        name: inputText,
        savedClock,
       }
       localStorage.setItem("clock", JSON.stringify(currentClock));
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
    } else{

    if (timerRef.current) clearInterval(timerRef.current)
      timerRef.current = null
      setClock({
        hours: 0,
        miuntes: 0,
        seconds: 0,
      })
      localStorage.removeItem("clock")
    }


    const previousClock = { ...clock };

    if (previousClock.seconds !== 0) {
    
      const currentClock:Goals = {
        name: inputText,
        clock: previousClock,
        date: new Date().toDateString()
      };
    
      const stored = localStorage.getItem("goals");
      const existingGoals = stored ? JSON.parse(stored) : [];
    
      existingGoals.push(currentClock);
    
      localStorage.setItem("goals", JSON.stringify(existingGoals));
    
      setGoals((prev) => [...prev, currentClock]);
    }
  }
     useEffect(() => {
      const clockSave =  localStorage.getItem("clock");
      const goals = localStorage.getItem("goals");

      if (clockSave){
        const clockLocal = JSON.parse(clockSave);
        setClock(clockLocal.savedClock)
        setInputText(clockLocal.name);
      }

      if (goals){
        const goalsUser =  JSON.parse(goals);
        setGoals(goalsUser)
      }



     }, [])
    return (
        <>
          <section className="lg:py-14 md:py-10 pt-0 pb-6"> 
      <div className="flex gap-2 flex-col  justify-center items-center mt-10 mb-10
            ">

       <div>
          <div
             style={{ backgroundColor: firstBG }}
             className="p-7 rounded-lg text-white lg:w-lg"
           >
             {typing ? (
              <input 
              type="text" 
              name="inputText"
              value={inputText}
              onChange={(e) => {
                const savedName = localStorage.getItem("clock");
                if (savedName) {
                  const name =  JSON.parse(savedName)
                  name.name = e.target.value;
                  localStorage.setItem("clock", JSON.stringify(name))
                } 
                setInputText(e.target.value)
              }} 
              placeholder="type name goal"
              onBlur={() => setTyping(!typing)}
              className="border border-white py-2 px-3 rounded-lg w-full mb-4
              outline-none placeholder:transition placeholder:duration-300 focus:placeholder:opacity-0"
              />
             ) : (
              <h2 
              onDoubleClick={() => setTyping(!typing)}
              className="text-center text-3xl mb-4">{inputText}</h2>
             )}
           
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

             <div className="mt-8 flex gap-1.5 flex-row-reverse items-center lg:justify-between justify-around lg:w-lg m-auto w-full">
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
       </div>
             
             
          <div className="w-full">
            <h3 className={
              `text-2xl text-gray-600 text-left rounded-lg p-2 font-bold mb-4
            uppercase ${goals.length ? "block" : "hidden"}`
            }>Goals</h3>
            <div>
           {goals.length > 0 && (
             <Swiper
              modules={[Pagination]}
              pagination={{ clickable: true }}
              spaceBetween={20}
              slidesPerView={3}
              breakpoints={{
                  0: {
                      slidesPerView: 1,
                  }, 
                  1024: {
                      slidesPerView: 3
                  }
              }}
             >
               {goals.map((ele, index) => (
                 <SwiperSlide key={index}>
                   <div className="flex items-center justify-between gap-4 bg-white/10 p-4 rounded-lg">
                     <div className="text-white">
                       <h5 className="text-lg font-bold">{ele.name}</h5>
                       <p className="lg:text-lg text-sm">عاااش عليك يعمم انا مبسوط منك</p>
                     </div>
           
                     {ele.date && (
                       <span className="text-white text-sm text-center bg-gray-800 p-1 rounded-sm">
                         {ele.date}
                       </span>
                     )}
                   </div>
                 </SwiperSlide>
               ))}
             </Swiper>
           )}
            </div>
          </div>

          </div>


        </section>
        </>
    )
}

export default Clock