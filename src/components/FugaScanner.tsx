import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { AlertCircle, ArrowRight, Gauge } from 'lucide-react';
import { KoviaBtn } from './ui/KoviaBtn';

const FugaScanner: React.FC = () => {
  const [leads, setLeads] = useState<number>(1800);
  const [ticket, setTicket] = useState<number>(20);
  const [minutos, setMinutos] = useState<number>(40);
  const [cr, setCr] = useState<number>(3);

  const fugaCapital = useMemo(() => {
    if (minutos > 10) {
      // Potencial = Leads * CR% * Ticket
      // Fuga = Potencial * 0.7 (Pérdida por demora según MIT)
      const potencialReal = leads * (cr / 100) * ticket;
      return potencialReal * 0.7;
    }
    return 0;
  }, [leads, ticket, minutos, cr]);

  const isHighLoss = minutos > 10;

  const handleScrollToCal = () => {
    const el = document.getElementById('agendar');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(val);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="glass-pane p-6 rounded-3xl neon-border-red w-full max-w-lg mx-auto scanline relative"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-kovia-red/10 rounded-lg text-kovia-red border border-kovia-red/20">
          <Gauge size={20} />
        </div>
        <h3 className="font-brand font-bold text-xl text-white uppercase tracking-widest">
          Fuga de Capital Scanner
        </h3>
      </div>

      <div className="space-y-6">
        {/* Sliders Area */}
        <div className="space-y-5">
          <div className="space-y-3">
            <div className="flex justify-between items-end">
              <label className="text-[10px] font-mono font-black text-slate-500 uppercase tracking-widest">Leads Mensuales</label>
              <span className="text-kovia-red font-mono font-bold text-lg">{leads}</span>
            </div>
            <input 
              type="range" 
              min="10" 
              max="5000" 
              value={leads} 
              onChange={(e) => setLeads(Number(e.target.value))}
              className="w-full h-1.5 bg-white/5 rounded-lg appearance-none cursor-pointer accent-kovia-red border border-white/5"
            />
          </div>

          <div className="space-y-3">
            <div className="flex justify-between items-end">
              <label className="text-[10px] font-mono font-black text-slate-500 uppercase tracking-widest">Ticket Promedio ($)</label>
              <span className="text-kovia-red font-mono font-bold text-lg">{formatCurrency(ticket)}</span>
            </div>
            <input 
              type="range" 
              min="15" 
              max="5000" 
              step="1"
              value={ticket} 
              onChange={(e) => setTicket(Number(e.target.value))}
              className="w-full h-1.5 bg-white/5 rounded-lg appearance-none cursor-pointer accent-kovia-red border border-white/5"
            />
          </div>

          <div className="space-y-3">
            <div className="flex justify-between items-end">
              <label className="text-[10px] font-mono font-black text-slate-500 uppercase tracking-widest">Tasa de Conversión (CR%)</label>
              <span className="text-kovia-red font-mono font-bold text-lg">{cr}%</span>
            </div>
            <input 
              type="range" 
              min="1" 
              max="50" 
              step="0.5"
              value={cr} 
              onChange={(e) => setCr(Number(e.target.value))}
              className="w-full h-1.5 bg-white/5 rounded-lg appearance-none cursor-pointer accent-kovia-red border border-white/5"
            />
          </div>

          <div className="space-y-3">
            <div className="flex justify-between items-end">
              <label className="text-[10px] font-mono font-black text-slate-500 uppercase tracking-widest">Minutos de Respuesta</label>
              <span className="text-kovia-red font-mono font-bold text-lg">
                {minutos} min
              </span>
            </div>
            <input 
              type="range" 
              min="1" 
              max="60" 
              value={minutos} 
              onChange={(e) => setMinutos(Number(e.target.value))}
              className="w-full h-1.5 bg-white/5 rounded-lg appearance-none cursor-pointer accent-kovia-red border border-white/5"
            />
          </div>
        </div>

        {/* Results Area */}
        <div className={`p-6 rounded-2xl transition-all duration-500 border ${isHighLoss ? 'bg-kovia-red/5 border-kovia-red/20 border-dashed' : 'bg-white/5 border-white/10'}`}>
          <div className="flex flex-col gap-1 mb-4">
            <span className="text-[9px] font-mono text-slate-500 uppercase tracking-[0.2em] font-bold">Fuga de Capital Estimada (Mensual)</span>
            <div className={`text-3xl font-mono font-black tracking-tighter ${isHighLoss ? 'text-kovia-red text-glow-red' : 'text-white'}`}>
              {formatCurrency(fugaCapital)}
            </div>
          </div>

          <AnimatePresence>
            {isHighLoss && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden"
              >
                <div className="flex items-start gap-3 p-4 bg-kovia-red/10 border border-kovia-red/20 rounded-xl mb-6">
                  <AlertCircle className="text-kovia-red shrink-0" size={18} />
                  <p className="text-[10px] font-mono text-kovia-red leading-relaxed font-black uppercase tracking-wider italic">
                    SISTEMA SATURADO: Estás perdiendo al 70% de tus compradores potenciales
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <KoviaBtn onClick={handleScrollToCal} className="w-full">
            <div className="flex items-center justify-center gap-3">
              <span>Sellar Fuga con Kovia</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </KoviaBtn>
        </div>

        <p className="text-center text-[8px] font-mono text-slate-600 italic">
          *Basado en la Curva de Decaimiento de Leads del MIT
        </p>
      </div>
    </motion.div>
  );
};

export default FugaScanner;
