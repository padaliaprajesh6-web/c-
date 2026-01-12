import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./PanoramaSlider.css";

const slides = [
  {
    id: 1,
    image: "https://images.pexels.com/photos/1525041/pexels-photo-1525041.jpeg",
    title: "Mountain View",
  },
  {
    id: 2,
    image: "https://images.pexels.com/photos/164394/pexels-photo-164394.jpeg",
    title: "City Nights",
  },
  {
    id: 3,
    image: "https://images.pexels.com/photos/712392/pexels-photo-712392.jpeg",
    title: "Desert Sunset",
  },
  {
    id: 4,
    image: "https://images.pexels.com/photos/189349/pexels-photo-189349.jpeg",
    title: " Sunset",
  },
];

const PanoramaSlider = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const paginate = (dir) => {
    setDirection(dir);
    setIndex((prev) =>
      dir === 1
        ? (prev + 1) % slides.length
        : (prev - 1 + slides.length) % slides.length
    );
  };

  return (
    <div className="panorama-wrapper">
      <AnimatePresence mode="wait">
        <motion.div
          key={slides[index].id}
          className="panorama-slide"
          style={{
            backgroundImage: `url(${slides[index].image})`,
          }}
          initial={{ x: direction * 300, opacity: 0, scale: 1.05 }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
            transition: { type: "spring", stiffness: 80, damping: 18 },
          }}
          exit={{
            x: direction * -300,
            opacity: 0,
            scale: 1.05,
            transition: { type: "spring", stiffness: 80 },
          }}
        >
          <div className="overlay">
            <h1>{slides[index].title}</h1>
          </div>
        </motion.div>
      </AnimatePresence>

      <button className="nav left" onClick={() => paginate(-1)}>
        ‹
      </button>
      <button className="nav right" onClick={() => paginate(1)}>
        ›
      </button>
    </div>
  );
};

export default PanoramaSlider;
