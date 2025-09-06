
import { motion } from "framer-motion";
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell
} from "recharts";
import { Globe, Atom, Satellite, ChevronRight, Award } from "lucide-react";
import { nuclearData, satelliteData, argentinaHighlights } from "./data";

const PIE_CHART_COLORS = ['#0ea5e9', '#8b5cf6', '#ec4899', '#f97316', '#10b981'];

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4 py-16 md:py-24"
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="md:w-1/2">
            <motion.div 
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block bg-gradient-to-r from-amber-400 to-amber-600 text-slate-900 px-4 py-1 rounded-full font-medium mb-6"
            >
              Análisis Geoestratégico 2025
            </motion.div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Capacidad Nuclear y Satelital <span className="text-amber-400">Global</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl">
              Análisis detallado de capacidades tecnológicas soberanas con enfoque en el posicionamiento estratégico de Argentina
            </p>
            <div className="flex flex-wrap gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-amber-500 text-slate-900 px-6 py-2 rounded-full font-semibold shadow hover:bg-amber-400 transition"
              >
                Ver datos clave <ChevronRight className="inline ml-2" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-amber-400 text-amber-400 px-6 py-2 rounded-full font-semibold hover:bg-amber-400 hover:text-slate-900 transition"
              >
                Metodología
              </motion.button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <motion.div 
              initial={{ scale: 0.8, rotate: -10 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-slate-800 rounded-2xl shadow-lg p-8"
            >
              <Globe size={64} className="text-amber-400 mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-2 text-center">Argentina en el mundo</h2>
              <p className="text-slate-300 text-center">Comparativa internacional de capacidades estratégicas</p>
            </motion.div>
          </div>
        </div>
      </motion.header>

      {/* Destacados Argentina */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8 text-amber-400">Destacados de Argentina</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {argentinaHighlights.map((item, idx) => (
            <div key={idx} className="bg-slate-800 rounded-xl p-6 flex flex-col items-center shadow">
              {item.icon === 'Globe' && <Globe size={40} className="text-amber-400 mb-2" />}
              {item.icon === 'Atom' && <Atom size={40} className="text-amber-400 mb-2" />}
              {item.icon === 'Satellite' && <Satellite size={40} className="text-amber-400 mb-2" />}
              {item.icon === 'Award' && <Award size={40} className="text-amber-400 mb-2" />}
              <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
              <p className="text-slate-300 text-center">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Gráficos */}
      <section className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="bg-slate-800 rounded-xl p-8 shadow">
          <h2 className="text-2xl font-bold mb-4">Arsenal Nuclear Global</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={nuclearData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
              <XAxis dataKey="country" stroke="#cbd5e1" />
              <YAxis stroke="#cbd5e1" />
              <Tooltip contentStyle={{ background: '#1e293b', border: 'none', color: '#fff' }} />
              <Bar dataKey="warheads" fill="#f59e42" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="bg-slate-800 rounded-xl p-8 shadow">
          <h2 className="text-2xl font-bold mb-4">Satélites en órbita</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={satelliteData}
                dataKey="satellites"
                nameKey="country"
                cx="50%"
                cy="50%"
                outerRadius={100}
                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(1)}%`}
              >
                {satelliteData.map((entry, idx) => (
                  <Cell key={`cell-${idx}`} fill={PIE_CHART_COLORS[idx % PIE_CHART_COLORS.length]} />
                ))}
              </Pie>
              <Tooltip contentStyle={{ background: '#1e293b', border: 'none', color: '#fff' }} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </section>

      <footer className="text-center text-slate-400 py-8">
        <span className="font-bold text-amber-400">Argentina 2025</span> — Análisis geoestratégico
      </footer>
    </div>
  );
}

export default App
