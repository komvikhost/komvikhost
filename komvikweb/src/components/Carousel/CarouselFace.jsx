import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const CarouselFace = ({ face, isActive }) => {
  return (
    <AnimatePresence mode="wait">
      {isActive && (
        <motion.div
          key={face.title}
          initial={{ rotateY: 90, opacity: 0 }}
          animate={{ rotateY: 0, opacity: 1 }}
          exit={{ rotateY: -90, opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full"
        >
          <div className="flex h-full rounded-2xl overflow-hidden shadow-lg">
            <div
              className="w-1/2 bg-cover bg-center relative"
              style={{
                backgroundImage: `url(/images/ich/${face.type}.${face.ext || "png"})`,
              }}
            >
              {face.title && (
                <h1
                className="
                  absolute 
                  top-[60%] sm:top-[62%] md:top-[65%] lg:top-[68%]
                  w-full text-center text-white font-oswald
                  text-[5vw] sm:text-[4vw] md:text-[3.5vw] 
                  transition-all duration-300
                "
              >
                {face.title}
                {face.subtitle && (
                  <span className="block text-[3vw] sm:text-[2.5vw] md:text-[2vw]">
                    {face.subtitle}
                  </span>
                )}
              </h1>
              )}
            </div>
            <div className="w-1/2 relative flex flex-col justify-center p-1 text-white font-merriweather bg-black/50 backdrop-blur-sm">
              <div
                className="
                  space-y-3 sm:space-y-4 md:space-y-5
                  text-sm sm:text-base md:text-lg lg:text-xl
                  leading-relaxed sm:leading-loose
                  px-4 sm:px-6 md:px-8
                  transition-all duration-300
                "
              >
                {(face.text || []).map((p, i) => (
                  <p
                    key={i}
                    className="
                      opacity-80 
                      text-justify
                      sm:text-left
                    "
                  >
                    {p}
                  </p>
                ))}
              </div>

              {face.index && (
                <h3 className="absolute right-0 top-1/2 text-[25vh] font-oswald opacity-10">
                  {face.index}
                </h3>
              )}
              {face.index_small && (
                <h3 className="absolute bottom-10 left-10 text-[4vh] font-oswald opacity-40">
                  {face.index_small}
                </h3>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CarouselFace;
