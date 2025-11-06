import { motion } from 'framer-motion';
import { Dumbbell, Flame, HeartPulse } from 'lucide-react';

const programs = [
  {
    title: 'Strength & Conditioning',
    icon: Dumbbell,
    image:
      'https://images.unsplash.com/photo-1517963628607-235ccdd5476b?q=80&w=1600&auto=format&fit=crop',
    desc: 'Build raw strength with progressive overload, compound lifts, and expert coaching.',
    badge: 'Popular',
  },
  {
    title: 'Fat Loss Accelerator',
    icon: Flame,
    image:
      'https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1600&auto=format&fit=crop',
    desc: 'High-intensity training and nutrition guidance to drop body fat sustainably.',
    badge: '8 Weeks',
  },
  {
    title: 'Athletic Performance',
    icon: HeartPulse,
    image:
      'https://images.unsplash.com/photo-1547949003-9792a18a2601?q=80&w=1600&auto=format&fit=crop',
    desc: 'Explosive power, agility, and endurance to perform at your best in any sport.',
    badge: 'Advanced',
  },
];

export default function Programs() {
  return (
    <section id="programs" className="relative py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Programs crafted for <span className="text-orange-500">results</span>
          </h2>
          <p className="mt-3 text-white/70 max-w-2xl mx-auto">
            Choose a path that fits your goals. Each plan includes assessments, progress tracking, and support.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group relative rounded-2xl overflow-hidden border border-white/10 bg-zinc-900/60 hover:bg-zinc-900 backdrop-blur shadow-lg"
            >
              <div className="relative h-48 overflow-hidden">
                <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <span className="absolute top-3 left-3 text-xs font-semibold bg-orange-500 text-black px-3 py-1 rounded-full shadow">
                  {p.badge}
                </span>
              </div>
              <div className="p-5 space-y-3">
                <div className="flex items-center gap-2">
                  <p.icon className="w-5 h-5 text-orange-500" />
                  <h3 className="text-lg font-bold text-white">{p.title}</h3>
                </div>
                <p className="text-sm text-white/70">{p.desc}</p>
                <a href="#register" className="inline-flex items-center text-orange-400 hover:text-orange-300 font-semibold">
                  Join this program →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute -bottom-40 right-0 w-[70vw] h-[70vw] max-w-3xl rounded-full bg-orange-500/10 blur-3xl" />
    </section>
  );
}
