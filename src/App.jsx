import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Programs from './components/Programs';
import Gallery from './components/Gallery';
import Register from './components/Register';

function App() {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <main>
        <Hero />
        <Programs />
        <Gallery />
        <Register />
      </main>
      <footer className="border-t border-white/10 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/60 text-sm">© {new Date().getFullYear()} Sein Fitness. All rights reserved.</p>
          <div className="text-sm text-white/60">Crafted with passion · Black & Orange Vibes</div>
        </div>
      </footer>
    </div>
  );
}

export default App;
