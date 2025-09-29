"use client";

import { motion } from "framer-motion";

const sections = [
  {
    id: 1,
    title: "Audit & Stratégie des Achats",
    color: "bg-sky-400",
    angle: -20, // position texte
  },
  {
    id: 2,
    title: "Conseil & Management du Changement",
    color: "bg-blue-600",
    angle: 45,
  },
  {
    id: 3,
    title: "Management des Achats et de la Performance",
    color: "bg-yellow-400",
    angle: 110,
  },
  {
    id: 4,
    title: "Formations Supply-Chain & Excellence opérationnelle",
    color: "bg-orange-400",
    angle: 200,
  },
  {
    id: 5,
    title: "Coaching & actions de formation en situation de travail",
    color: "bg-green-400",
    angle: 270,
  },
];

export default function StarWheel() {
  return (
    <div className="relative flex items-center justify-center w-[500px] h-[500px] mx-auto">
      
      {/* Cercle principal */}
      <div className="relative w-[380px] h-[380px] rounded-full flex items-center justify-center">
        
        {/* Segments en cercle */}
        {sections.map((section, i) => (
          <motion.div
            key={section.id}
            className={`absolute w-1/2 h-1/2 ${section.color}`}
            style={{
              transform: `rotate(${i * 72}deg) skewY(-18deg)`,
              transformOrigin: "100% 100%",
              borderRadius: "50% 0 0 0", // arrondi comme un "camembert"
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute text-white font-bold text-xl flex items-center justify-center w-full h-full">
              {section.id}
            </div>
          </motion.div>
        ))}

        {/* Centre avec logo */}
        <div className="absolute w-36 h-36 bg-white rounded-full shadow-lg flex items-center justify-center text-xl font-bold text-green-600">
          MA<span className="text-blue-600">névok</span>
        </div>
      </div>

      {/* Titres autour */}
      {sections.map((section, i) => {
        const radius = 250; // distance du centre
        const rad = (section.angle * Math.PI) / 180;
        const x = Math.cos(rad) * radius;
        const y = Math.sin(rad) * radius;

        return (
          <div
            key={section.id}
            className="absolute w-48 text-center text-sm font-medium"
            style={{
              transform: `translate(${x}px, ${y}px)`,
            }}
          >
            {section.title}
          </div>
        );
      })}
    </div>
  );
}
