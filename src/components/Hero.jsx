import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] pt-24 bg-gradient-to-b from-black via-zinc-950 to-black overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/1Rla3KqD6L9Le5BI/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Build Strength with <span className="text-orange-500">Sein Fitness</span>
            </motion.h1>
            <motion.p
              className="text-white/80 text-lg max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              Personalized coaching, dynamic programs, and results-driven training tailored to your goals. Join our community and transform your body and mind.
            </motion.p>
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <a href="#programs" className="px-6 py-3 rounded-md bg-orange-500 text-black font-semibold shadow shadow-orange-400/30 hover:bg-orange-400 transition">Explore Programs</a>
              <a href="#register" className="px-6 py-3 rounded-md border border-white/20 text-white hover:bg-white/10 transition">Start Today</a>
            </motion.div>
          </div>

          <motion.div
            className="relative aspect-square rounded-3xl overflow-hidden border border-white/10 bg-white/5"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img
              src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1600&auto=format&fit=crop"
              alt="Athlete training"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-transparent to-transparent pointer-events-none" />
          </motion.div>
        </div>
      </div>

      <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[90vw] h-[90vw] max-w-4xl max-h-4xl rounded-full bg-orange-500/10 blur-3xl" />
    </section>
  );
}
