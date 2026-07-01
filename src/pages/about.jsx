import { MapPin, Star, Sparkles } from "lucide-react";

export default function About() {
  const franchisesCol1 = ["Binjai", "Makassar", "Surabaya", "Bali"];
  const franchisesCol2 = ["Jakarta", "Malang", "Medan", "Solo"];
  const franchisesCol3 = ["Balikpapan", "Aceh", "Padang", "Semarang"];

  const contacts = [
    {
      name: "WhatsApp",
      value: "+62 822-9412-2418",
      href: "https://wa.me/6282294122418",
      icon: "/Logo-Icon/Logo_whatsapp.png",
    },
    {
      name: "Instagram",
      value: "@daunjatibinjai",
      href: "https://instagram.com/daunjatibinjai",
      icon: "/Logo-Icon/Logo_instagram.png",
    },
    {
      name: "TikTok",
      value: "DaunJatiidn",
      href: "https://tiktok.com/@DaunJatiidn",
      icon: "/Logo-Icon/Logo_tiktok.png",
    },
  ];

  return (
    <main className="min-h-screen bg-sand-100 text-sand-900 pt-28">
      <section className="grid grid-cols-1 lg:grid-cols-2 border-b border-sand-200/60">
        <div className="flex flex-col justify-center py-20 px-8 md:px-16 lg:px-20 bg-sand-100 gap-6">
          <div className="flex items-center gap-2">
            <div className="flex text-honey-500">
              <Star size={14} fill="currentColor" />
              <Star size={14} fill="currentColor" />
              <Star size={14} fill="currentColor" />
              <Star size={14} fill="currentColor" />
              <Star size={14} fill="currentColor" />
            </div>
            <span className="text-[10px] uppercase tracking-widest text-leaf-800 font-bold flex items-center gap-1">
              <Sparkles size={10} />
              4.9 Rated Café in Binjai
            </span>
          </div>

          <h1 className="font-serif text-3xl md:text-5xl font-extrabold text-sand-900 leading-tight">
            Our Story & Vibe
          </h1>
          <div className="w-12 h-0.5 bg-leaf-500"></div>

          <p className="text-sm md:text-base leading-relaxed text-sand-700">
            <strong className="text-sand-900 font-serif font-semibold">Daun Jati Cafe</strong> was built out of a simple passion: to serve premium, artisan coffee while providing a cozy sanctuary for Binjai locals.
          </p>

          <p className="text-sm md:text-base leading-relaxed text-sand-700">
            Whether you are looking to catch up on work, spend a quiet moment with a book, or enjoy traditional Indonesian and Western cuisines with family and friends, we have curated a relaxing space just for you.
          </p>
        </div>
        <div className="relative min-h-[350px] lg:min-h-[550px] bg-sand-200">
          <img
            src="https://images.unsplash.com/photo-1453614512568-c4024d13c247?auto=format&fit=crop&w=1200&q=80"
            alt="Artisan coffee barista counter"
            className="w-full h-full object-cover"
          />
        </div>
      </section>
      <section className="py-24 px-6 md:px-12 bg-sand-50/60">
        <div className="max-w-6xl mx-auto flex flex-col gap-16">
          <div className="text-center flex flex-col items-center gap-2">
            <span className="text-xs uppercase tracking-widest text-leaf-700 font-bold">Locations</span>
            <h2 className="font-serif text-3xl md:text-4xl text-sand-900 font-bold">Find Our Branches</h2>
            <div className="w-12 h-0.5 bg-leaf-500 mt-1"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-white border border-sand-200 p-8 rounded-2xl flex flex-col gap-6 shadow-xs">
              <div className="flex items-start gap-4">
                <div className="p-3.5 bg-leaf-50 rounded-xl text-leaf-800 border border-leaf-100/50">
                  <MapPin size={22} />
                </div>
                <div className="flex flex-col gap-1.5">
                  <h3 className="font-serif text-lg font-bold text-sand-900">Binjai Main Branch</h3>
                  <p className="text-xs md:text-sm text-sand-700 leading-relaxed font-semibold">
                    Jl. Kapten Muslim No.2d, Pekan Binjai, Kec. Binjai Kota, Kota Binjai, Sumatera Utara
                  </p>
                </div>
              </div>

              <a
                href="https://maps.app.goo.gl/bkhQvBmokUPiGMnN7"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-leaf-800 hover:bg-leaf-700 text-white font-bold py-3.5 px-6 rounded-xl transition-all duration-300 text-xs tracking-widest cursor-pointer shadow-md shadow-leaf-900/10"
              >
                OPEN IN GOOGLE MAPS
              </a>
            </div>
            <div className="flex flex-col gap-6">
              <h3 className="font-serif text-xl font-bold text-sand-900 tracking-wide">
                Our Franchise Network
              </h3>
              <p className="text-sm text-sand-700 leading-relaxed font-semibold">
                Enjoy Daun Jati Cafe's signature coffee blends and local dishes across the country:
              </p>

              <div className="grid grid-cols-3 gap-4 bg-white p-6 rounded-2xl border border-sand-200 shadow-xs">
                <ul className="flex flex-col gap-2.5 text-xs text-sand-700 font-bold">
                  {franchisesCol1.map((city) => (
                    <li key={city} className="flex items-center gap-2">
                      <span className="text-leaf-800">📍</span> {city}
                    </li>
                  ))}
                </ul>
                <ul className="flex flex-col gap-2.5 text-xs text-sand-700 font-bold">
                  {franchisesCol2.map((city) => (
                    <li key={city} className="flex items-center gap-2">
                      <span className="text-leaf-800">📍</span> {city}
                    </li>
                  ))}
                </ul>
                <ul className="flex flex-col gap-2.5 text-xs text-sand-700 font-bold">
                  {franchisesCol3.map((city) => (
                    <li key={city} className="flex items-center gap-2">
                      <span className="text-leaf-800">📍</span> {city}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="border-t border-sand-200 pt-16">
            <h3 className="font-serif text-xl text-center text-sand-900 font-bold mb-10 tracking-wide">
              Direct Contact Channels
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {contacts.map((contact) => (
                <a
                  key={contact.name}
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white border border-sand-200 p-6 rounded-2xl flex flex-col items-center gap-4 text-center hover:border-leaf-500/40 hover:-translate-y-0.5 transition-all duration-300 shadow-xs group"
                >
                  <img
                    src={contact.icon}
                    alt={contact.name}
                    className="w-10 h-10 object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] text-leaf-800 font-bold uppercase tracking-wider">
                      {contact.name}
                    </span>
                    <span className="text-xs font-bold text-sand-900 group-hover:text-leaf-700 transition-colors">
                      {contact.value}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}