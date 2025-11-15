"use client"

import React, { Dispatch, SetStateAction } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

interface Colors {
  firstBG: string;
  lastBG: string;
  color: string;
}

interface Actions {
    colors: Colors;
    setColors: Dispatch<SetStateAction<Colors>>
}


const Customize: React.FC<Actions> = ({ colors, setColors }) => {

    const handelColor = (colors: Colors) => {
      try {
        localStorage.setItem("color", JSON.stringify(colors))
      } catch (error) {
        console.log(error);
      }
    }
  return (
    <section>
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

        <SwiperSlide>
          <div
          onClick={() => {
            const newColor = {
             firstBG: "#171717",
             lastBG: "#000",
             color: "#ffffff"
            }
            setColors(newColor)
            handelColor(newColor)            
          }}
          className="lg:w-auto md:w-auto w-full pt-12 relative cursor-pointer
           bg-[#171717] p-7 rounded-lg text-white">
            <span className={`
                bg-white text-sm text-black py-1 px-2 rounded-lg absolute top-2.5 left-2.5
                ${colors.firstBG === "#171717" ? "block" : "hidden"}
                `}>
              Default
            </span>
            <h2 className="text-center text-3xl mb-4">Your Clock</h2>
            <div className="flex items-center justify-center gap-4">
              <span className="bg-black text-[#ffffff] p-4 text-3xl text-center rounded-lg">
                10
              </span>
              <span className="bg-black text-[#ffffff] p-4 text-3xl text-center rounded-lg">
                05
              </span>
              <span className="bg-black text-[#ffffff] p-4 text-3xl text-center rounded-lg">
                30
              </span>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div
        onClick={() => {
            const newColor = {
             firstBG: "#0959b4",
             lastBG: "#eee",
             color: "#0959b4"
            }
            setColors(newColor)
            handelColor(newColor)            
          }}
            className={`lg:w-auto md:w-auto w-full pt-12 relative cursor-pointer 
                bg-[#0959b4] p-7 rounded-lg text-white`}
          >
            <span className={`
                bg-white text-sm text-black py-1 px-2 rounded-lg absolute top-2.5 left-2.5
                ${colors.firstBG === "#0959b4" ? "block" : "hidden"}
                `}>
              Default
            </span>
            <h2 className="text-center text-3xl mb-4">Your Clock</h2>
            <div className="flex items-center justify-center gap-4">
              <span className="bg-[#EEE] text-[#0959b4] p-4 text-3xl text-center rounded-lg">
                10
              </span>
              <span className="bg-[#EEE] text-[#0959b4] p-4 text-3xl text-center rounded-lg">
                05
              </span>
              <span className="bg-[#EEE] text-[#0959b4] p-4 text-3xl text-center rounded-lg">
                30
              </span>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div 
        onClick={() => {
            const newColor = {
             firstBG: "#a65f00",
             lastBG: "#eee",
             color: "#a65f00"
            }
            setColors(newColor)
            handelColor(newColor) 
            
          }}
          className="lg:w-auto md:w-auto w-full pt-12 relative cursor-pointer 
          bg-[#a65f00] p-7 rounded-lg text-white">
            <span className={`
                bg-white text-sm text-black py-1 px-2 rounded-lg absolute top-2.5 left-2.5
                ${colors.firstBG === "#a65f00" ? "block" : "hidden"}
                `}>
              Default
            </span>
            <h2 className="text-center text-3xl mb-4">Your Clock</h2>
            <div className="flex items-center justify-center gap-4">
              <span className="bg-[#EEE] text-[#a65f00] p-4 text-3xl text-center rounded-lg">
                10
              </span>
              <span className="bg-[#EEE] text-[#a65f00] p-4 text-3xl text-center rounded-lg">
                05
              </span>
              <span className="bg-[#EEE] text-[#a65f00] p-4 text-3xl text-center rounded-lg">
                30
              </span>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 4 */}
        <SwiperSlide>
          <div 
        onClick={() => {
            const newColor = {
             firstBG: "#312c85",
             lastBG: "#eee",
             color: "#312c85"
            }
            setColors(newColor)
            handelColor(newColor)
          }}
          className="lg:w-auto md:w-auto w-full pt-12 relative cursor-pointer 
          bg-[#312c85] p-7 rounded-lg text-white">
            <span className={`
                bg-white text-sm text-black py-1 px-2 rounded-lg absolute top-2.5 left-2.5
                ${colors.firstBG === "#312c85" ? "block" : "hidden"}
                `}>
              Default
            </span>
            <h2 className="text-center text-3xl mb-4">Your Clock</h2>
            <div className="flex items-center justify-center gap-4">
              <span className="bg-[#EEE] text-[#312c85] p-4 text-3xl text-center rounded-lg">
                10
              </span>
              <span className="bg-[#EEE] text-[#312c85] p-4 text-3xl text-center rounded-lg">
                05
              </span>
              <span className="bg-[#EEE] text-[#312c85] p-4 text-3xl text-center rounded-lg">
                30
              </span>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Customize;
