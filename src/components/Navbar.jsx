import { useState } from 'react';
import { Flame, Dumbbell, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#programs', label: 'Programs' },
    { href: '#register', label: 'Register' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/70 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="flex items-center gap-2">
            <span className="inline-flex items-center justify-center w-8 h-8 rounded bg-orange-500 text-black shadow-lg shadow-orange-500/30">
              <Flame className="w-5 h-5" />
            </span>
            <span className="font-extrabold tracking-tight text-white">
              <span className="text-orange-500">Sein</span> Fitness
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-white/80 hover:text-white transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#register"
              className="inline-flex items-center gap-2 bg-orange-500 text-black font-semibold px-4 py-2 rounded-md shadow shadow-orange-400/30 hover:bg-orange-400 transition"
            >
              <Dumbbell className="w-4 h-4" /> Join Now
            </a>
          </nav>

          <button
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-white/10"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 animate-in fade-in slide-in-from-top-2">
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="text-base font-medium text-white/90 hover:text-white"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#register"
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center gap-2 bg-orange-500 text-black font-semibold px-4 py-2 rounded-md shadow shadow-orange-400/30 hover:bg-orange-400 transition"
              >
                <Dumbbell className="w-4 h-4" /> Join Now
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
