import { useState } from "react";
import { Link } from "react-router-dom";
import { products } from "../data/products";
import { ShoppingBag } from "lucide-react";

export default function Product() {
  const [filter, setFilter] = useState("all");

  const categories = [
    { id: "all", name: "ALL MENU" },
    { id: "coffee", name: "COFFEE" },
    { id: "non", name: "NON COFFEE" },
    { id: "food", name: "MAIN COURSE" },
    { id: "snack", name: "SNACKS" },
  ];

  const filteredProducts =
    filter === "all"
      ? products
      : products.filter((p) => p.type === filter);

  const formatRupiah = (val) => "Rp " + val.toLocaleString("id-ID");

  return (
    <main className="min-h-screen bg-sand-100 text-sand-900 pt-28">
      <section className="py-6 px-6 border-b border-sand-200/80 bg-sand-100">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-3 md:gap-4">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-6 py-2.5 rounded-xl text-xs font-bold tracking-widest transition-all duration-300 cursor-pointer ${
                filter === cat.id
                  ? "bg-leaf-800 text-white shadow-md shadow-leaf-900/10"
                  : "bg-white border border-sand-300 text-sand-700 hover:border-leaf-500/40 hover:text-leaf-800"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </section>
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border border-sand-200 rounded-2xl overflow-hidden shadow-xs hover:border-leaf-500/30 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 flex flex-col h-full group"
            >
              <div className="relative h-56 overflow-hidden bg-sand-200">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=500&auto=format&fit=crop&q=60";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sand-900/15 to-transparent"></div>
                <span className="absolute top-4 right-4 bg-white/95 text-[9px] uppercase font-bold tracking-widest text-leaf-800 px-3 py-1 rounded-lg border border-sand-200 shadow-xs">
                  {item.type}
                </span>
              </div>
              <div className="p-6 flex flex-col flex-grow gap-3">
                <div className="flex flex-col gap-1">
                  <h3 className="font-serif text-lg font-bold text-sand-900 group-hover:text-leaf-800 transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-xs text-sand-700/80 leading-relaxed min-h-[34px] line-clamp-2">
                    {item.desc}
                  </p>
                </div>

                <div className="flex items-center justify-between mt-auto pt-4 border-t border-sand-200/80">
                  <span className="font-serif text-base font-bold text-leaf-800">
                    {formatRupiah(item.price)}
                  </span>
                  <Link
                    to={`/order?product=${encodeURIComponent(item.name)}`}
                    className="flex items-center gap-1.5 bg-honey-500 hover:bg-honey-600 text-white text-xs font-bold py-2.5 px-4 rounded-xl transition-all duration-300 cursor-pointer"
                  >
                    <ShoppingBag size={12} />
                    Order
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-sand-700">No items available in this category.</p>
          </div>
        )}
      </section>
    </main>
  );
}