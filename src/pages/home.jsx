import { Link } from "react-router-dom";
import { ArrowRight, Coffee, Heart, Compass, Sparkles } from "lucide-react";

export default function Home() {
  return (
    <main className="bg-sand-100 text-sand-900 min-h-screen">
      <section className="relative max-w-6xl mx-auto px-6 pt-28 pb-20 md:py-28 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 flex flex-col gap-6 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-leaf-100/50 border border-leaf-200/35 w-fit">
            <span className="w-2 h-2 rounded-full bg-leaf-650 animate-pulse"></span>
            <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-leaf-800">
              Welcome to Daun Jati Cafe
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-extrabold text-sand-900 leading-tight tracking-tight">
            Where Every Sip <br />
            Holds a <span className="font-cursive text-honey-600 font-normal italic lowercase">moment of peace</span>
          </h1>

          <p className="text-sm md:text-base text-sand-700 leading-relaxed max-w-lg">
            A quiet sanctuary hidden in Binjai. Time slows down between our artisan brews, cozy corners, and warm, meaningful conversations. Discover the poetry of roasted beans.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-2">
            <Link
              to="/product"
              className="bg-leaf-800 hover:bg-leaf-700 text-white font-bold py-3.5 px-8 rounded-xl shadow-lg shadow-leaf-900/10 hover:shadow-leaf-900/20 transition-all duration-300 flex items-center justify-center gap-2 group text-xs tracking-widest"
            >
              EXPLORE OUR MENU
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/order"
              className="bg-white hover:bg-sand-200 text-sand-700 font-bold py-3.5 px-8 border border-sand-300 rounded-xl transition-all duration-300 text-center text-xs tracking-widest"
            >
              ORDER ONLINE
            </Link>
          </div>
        </div>

        <div className="lg:col-span-5 relative w-full h-[350px] md:h-[500px]">
          <div className="absolute inset-4 border border-leaf-500/20 rounded-3xl translate-x-2 translate-y-2 z-0"></div>
          <div className="relative z-10 w-full h-full rounded-3xl overflow-hidden shadow-xl border border-sand-200">
            <img
              src="https://images.unsplash.com/photo-1507133750040-4a8f57021571?auto=format&fit=crop&w=800&q=80"
              alt="Premium latte cup close up"
              className="w-full h-full object-cover hover:scale-102 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-sand-900/20 via-transparent to-transparent"></div>
          </div>
          <div className="absolute -bottom-4 -left-4 z-20 bg-white border border-sand-200 p-4 rounded-2xl shadow-lg flex items-center gap-3">
            <div className="p-2.5 bg-leaf-50 text-leaf-800 rounded-lg">
              <Coffee size={20} />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] text-sand-700/60 uppercase font-bold tracking-widest">Google Rating</span>
              <span className="text-xs font-bold text-sand-900">4.9 ★ Binjai</span>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 px-6 bg-white border-t border-b border-sand-200/60">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center text-center mb-16 gap-2">
            <span className="text-xs uppercase tracking-widest text-leaf-700 font-bold">Our Philosophy</span>
            <h2 className="font-serif text-3xl md:text-4xl text-sand-900 font-bold">Crafted with Care & Passion</h2>
            <div className="w-12 h-0.5 bg-leaf-500 mt-2"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-sand-50/50 border border-sand-200 p-8 rounded-2xl flex flex-col gap-5 hover:border-leaf-500/30 hover:shadow-lg transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-leaf-50 text-leaf-800 border border-leaf-100 flex items-center justify-center group-hover:bg-leaf-800 group-hover:text-white transition-colors duration-300">
                <Coffee size={22} />
              </div>
              <h3 className="font-serif text-lg font-bold text-sand-900">Artisan Brewing</h3>
              <p className="text-xs text-sand-700/80 leading-relaxed">
                Every cup is prepared by coffee enthusiasts who understand bean profiles and brewing precision.
              </p>
            </div>
            <div className="bg-sand-50/50 border border-sand-200 p-8 rounded-2xl flex flex-col gap-5 hover:border-leaf-500/30 hover:shadow-lg transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-leaf-50 text-leaf-800 border border-leaf-100 flex items-center justify-center group-hover:bg-leaf-800 group-hover:text-white transition-colors duration-300">
                <Heart size={22} />
              </div>
              <h3 className="font-serif text-lg font-bold text-sand-900">Cozy Atmosphere</h3>
              <p className="text-xs text-sand-700/80 leading-relaxed">
                Quiet corners, soft instrumental music, and relaxing lighting designed to put your mind at ease.
              </p>
            </div>
            <div className="bg-sand-50/50 border border-sand-200 p-8 rounded-2xl flex flex-col gap-5 hover:border-leaf-500/30 hover:shadow-lg transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-leaf-50 text-leaf-800 border border-leaf-100 flex items-center justify-center group-hover:bg-leaf-800 group-hover:text-white transition-colors duration-300">
                <Compass size={22} />
              </div>
              <h3 className="font-serif text-lg font-bold text-sand-900">Rich Ingredients</h3>
              <p className="text-xs text-sand-700/80 leading-relaxed">
                We select premium locally sourced ingredients for both our drinks and our traditional food menu.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 rounded-3xl overflow-hidden h-[300px] md:h-[400px] shadow-lg border border-sand-200">
            <img
              src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80"
              alt="Interior of Daun Jati Cafe"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="lg:col-span-6 flex flex-col gap-6 text-left">
            <span className="text-xs uppercase tracking-widest text-leaf-700 font-bold">The Vibe</span>
            <h2 className="font-serif text-3xl md:text-4xl text-sand-900 font-bold leading-tight">
              A cozy space designed for your stories
            </h2>
            <div className="w-12 h-0.5 bg-leaf-500"></div>
            <p className="text-xs md:text-sm text-sand-700 leading-relaxed">
              "A quiet coffee shop hums like a gentle secret — time slows down between sips and soft conversations. The air is rich with the poetry of roasted beans, and every cup holds a story waiting to be felt, not told."
            </p>
            <Link
              to="/about"
              className="text-leaf-800 hover:text-leaf-700 font-bold inline-flex items-center gap-1.5 group w-fit transition-colors text-xs tracking-wider"
            >
              LEARN MORE ABOUT US
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}