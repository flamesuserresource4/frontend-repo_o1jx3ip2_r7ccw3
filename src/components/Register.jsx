import { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

export default function Register() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    // For now, simulate a successful registration
    setSubmitted(true);
  }

  return (
    <section id="register" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Join <span className="text-orange-500">Sein Fitness</span>
            </h2>
            <p className="text-white/70">
              Register your interest and we’ll reach out with program details, schedule options, and next steps.
            </p>
            <ul className="grid sm:grid-cols-2 gap-3 text-white/80">
              {['Personalized plan', 'Nutrition guidance', 'Weekly check-ins', 'Community support'].map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-orange-500" /> {t}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-zinc-900/60 border border-white/10 rounded-2xl p-6 space-y-4 shadow-xl"
          >
            {submitted ? (
              <div className="text-center space-y-2">
                <h3 className="text-2xl font-bold text-white">You’re in! 🎉</h3>
                <p className="text-white/70">We’ll email you shortly with next steps.</p>
                <button type="button" onClick={() => setSubmitted(false)} className="mt-2 px-4 py-2 rounded-md border border-white/20 text-white hover:bg-white/10">Submit another</button>
              </div>
            ) : (
              <>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-white/70 mb-1">First name</label>
                    <input required className="w-full px-3 py-2 rounded-md bg-black/40 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-orange-500" placeholder="Jane" />
                  </div>
                  <div>
                    <label className="block text-sm text-white/70 mb-1">Last name</label>
                    <input required className="w-full px-3 py-2 rounded-md bg-black/40 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-orange-500" placeholder="Doe" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-white/70 mb-1">Email</label>
                  <input type="email" required className="w-full px-3 py-2 rounded-md bg-black/40 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-orange-500" placeholder="you@example.com" />
                </div>
                <div>
                  <label className="block text-sm text-white/70 mb-1">Preferred Program</label>
                  <select className="w-full px-3 py-2 rounded-md bg-black/40 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-orange-500">
                    <option>Strength & Conditioning</option>
                    <option>Fat Loss Accelerator</option>
                    <option>Athletic Performance</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-white/70 mb-1">Notes</label>
                  <textarea rows="3" className="w-full px-3 py-2 rounded-md bg-black/40 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-orange-500" placeholder="Share your goals, injuries, or schedule."></textarea>
                </div>
                <button className="w-full py-3 rounded-md bg-orange-500 text-black font-semibold shadow shadow-orange-400/30 hover:bg-orange-400 transition">Register</button>
              </>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
