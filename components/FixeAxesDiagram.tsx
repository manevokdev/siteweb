'use client'

import { motion } from 'framer-motion'

export default function FiveAxesDiagram() {
  const petals = [
    { id: 1, title: "Audit & Stratégie des Achats", color: "#1976D2", rotate: 0 },
    { id: 2, title: "Conseil & Management du Changement", color: "#2196F3", rotate: 72 },
    { id: 3, title: "Management des Achats et de la Performance", color: "#FFC107", rotate: 144 },
    { id: 4, title: "Formations Supply-Chain & Excellence opérationnelle", color: "#FF9800", rotate: 216 },
    { id: 5, title: "Coaching & Formation en situation de travail", color: "#8BC34A", rotate: 288 }
  ]

  return (
    <div className="flex flex-col items-center">
      <svg viewBox="0 0 400 400" width="400" height="400" className="mb-6">
        <g transform="translate(200,200)">
          {petals.map((p, i) => (
            <motion.path
              key={p.id}
              d="M0,-160 C40,-150 100,-100 90,0 C100,100 40,150 0,160 C-40,150 -100,100 -90,0 C-100,-100 -40,-150 0,-160Z"
              fill={p.color}
              transform={`rotate(${p.rotate})`}
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          ))}

          {/* étoile blanche centrale */}
          <polygon
            points="0,-60 18,-20 58,-18 28,10 38,50 0,30 -38,50 -28,10 -58,-18 -18,-20"
            fill="white"
            stroke="#ddd"
            strokeWidth="2"
          />

          {/* logo / texte central */}
          <text
            x="0"
            y="5"
            textAnchor="middle"
            className="font-bold"
            style={{ fontSize: "18px", fill: "#4a4a4a" }}
          >
            MANévok
          </text>
        </g>
      </svg>

      {/* légende en dessous */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center max-w-2xl">
        {petals.map((p, i) => (
          <motion.div
            key={p.id}
            className="p-4 rounded-lg shadow bg-white"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="font-semibold text-gray-800">{p.title}</h3>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
