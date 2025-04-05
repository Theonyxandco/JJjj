
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';

function Home() {
  return (
    <div className="bg-gradient-to-b from-black to-gray-900 h-screen flex justify-center items-center">
      <motion.h1 className="text-5xl font-bold text-gold">Élégance Drive</motion.h1>
    </div>
  );
}

function AdminPanel() {
  const [headline, setHeadline] = useState("Lyxig transportupplevelse i världsklass");

  return (
    <div className="bg-black text-white p-6">
      <h2 className="text-3xl font-bold">Admin Panel</h2>
      <input 
        className="p-2 mt-4 bg-gray-800 text-white" 
        type="text" 
        value={headline} 
        onChange={(e) => setHeadline(e.target.value)} 
      />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<AdminPanel />} />
      </Routes>
    </Router>
  );
}
