import { useState, useEffect, useRef } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { products } from "../data/products";
import { ArrowLeft, CheckCircle, User, Mail, Phone, MapPin, Plus, Minus, ReceiptText, Sparkles, Trash2, ShoppingCart } from "lucide-react";

export default function Order() {
  const [searchParams] = useSearchParams();
  const productParam = searchParams.get("product") || "";

  const [selectedCategory, setSelectedCategory] = useState("all");
  const [cart, setCart] = useState([]);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const [nameError, setNameError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [receipt, setReceipt] = useState(null);

  const receiptRef = useRef(null);

  useEffect(() => {
    if (productParam) {
      const match = products.find((p) => p.name === productParam);
      if (match) {
        setCart((prev) => {
          const exists = prev.find((item) => item.name === match.name);
          if (exists) return prev;
          return [...prev, { name: match.name, price: match.price, qty: 1, image: match.image }];
        });
      }
    }
  }, [productParam]);

  const addToCart = (productObj) => {
    setCart((prev) => {
      const exists = prev.find((item) => item.name === productObj.name);
      if (exists) {
        return prev.map((item) =>
          item.name === productObj.name ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prev, { name: productObj.name, price: productObj.price, qty: 1, image: productObj.image }];
    });
  };

  const decrementCart = (productName) => {
    setCart((prev) => {
      const exists = prev.find((item) => item.name === productName);
      if (!exists) return prev;
      if (exists.qty === 1) {
        return prev.filter((item) => item.name !== productName);
      }
      return prev.map((item) =>
        item.name === productName ? { ...item, qty: item.qty - 1 } : item
      );
    });
  };

  const removeFromCart = (productName) => {
    setCart((prev) => prev.filter((item) => item.name !== productName));
  };

  const getItemQty = (productName) => {
    const found = cart.find((item) => item.name === productName);
    return found ? found.qty : 0;
  };

  const grandTotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  const formatRupiah = (val) => "Rp " + val.toLocaleString("id-ID");

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((p) => p.type === selectedCategory);

  function handleOrder(e) {
    e.preventDefault();

    setNameError("");
    setPhoneError("");

    let hasError = false;

    if (cart.length === 0) {
      alert("Please add at least one product to your order!");
      return;
    }

    // Validate name (must contain letters and spaces only)
    if (!/^[a-zA-Z\s]+$/.test(fullName)) {
      setNameError("❌ Name must contain letters and spaces only!");
      hasError = true;
    }

    // Validate phone number (must contain numbers only)
    if (!/^\d+$/.test(phone)) {
      setPhoneError("❌ Phone number must contain numbers only!");
      hasError = true;
    }

    if (hasError) return;

    // Set receipt state
    setReceipt({
      fullName,
      email,
      phone,
      address,
      items: [...cart],
      grandTotal,
      date: new Date().toLocaleString("id-ID"),
    });

    // Clear form inputs & cart
    setFullName("");
    setEmail("");
    setPhone("");
    setAddress("");
    setCart([]);
  }

  useEffect(() => {
    if (receipt && receiptRef.current) {
      receiptRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [receipt]);

  return (
    <main className="min-h-screen bg-sand-100 pt-28 pb-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto flex flex-col gap-12">
        <div className="text-center flex flex-col items-center gap-2">
          <span className="text-xs uppercase tracking-widest text-leaf-700 font-bold flex items-center gap-1.5 bg-leaf-100/50 px-3 py-1 rounded-full border border-leaf-200/35">
            <Sparkles size={11} className="text-leaf-800" />
            Simple Ordering
          </span>
          <h1 className="font-serif text-3xl md:text-5xl text-sand-900 font-extrabold tracking-tight">
            Checkout Your Cravings
          </h1>
          <div className="w-12 h-0.5 bg-leaf-500 mt-2"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 md:p-8 border border-sand-200 shadow-md shadow-sand-200/30 flex flex-col gap-6">
            <div className="flex flex-col gap-1">
              <h3 className="font-serif text-lg font-bold text-sand-900">
                1. Browse Menu & Add Items
              </h3>
              <p className="text-xs text-sand-700/80">
                Tap "+" to add products to your basket. You can order multiple different items.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 pb-2 border-b border-sand-200/60">
              {["all", "coffee", "non", "food", "snack"].map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                    selectedCategory === cat
                      ? "bg-leaf-800 text-white"
                      : "bg-sand-100 hover:bg-sand-200 text-sand-700"
                  }`}
                >
                  {cat === "non" ? "Non Coffee" : cat === "food" ? "Main Course" : cat}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-h-[460px] overflow-y-auto pr-2">
              {filteredProducts.map((p) => {
                const qtyInCart = getItemQty(p.name);
                const hasItem = qtyInCart > 0;
                return (
                  <div
                    key={p.name}
                    className={`rounded-2xl p-3 border transition-all duration-300 flex flex-col gap-2 overflow-hidden group select-none ${
                      hasItem
                        ? "bg-leaf-50/50 border-leaf-700 shadow-xs"
                        : "bg-sand-50/40 border-sand-200 hover:border-sand-300 hover:bg-sand-50"
                    }`}
                  >
                    <div className="h-24 w-full rounded-xl overflow-hidden bg-sand-200 relative">
                      <img
                        src={p.image}
                        alt={p.name}
                        className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                        onError={(e) => {
                          e.target.src = "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=200&auto=format&fit=crop&q=60";
                        }}
                      />
                    </div>
                    
                    <div className="flex flex-col gap-0.5">
                      <span className="text-[11px] font-bold text-sand-900 leading-tight line-clamp-1">{p.name}</span>
                      <span className="text-[10px] font-bold text-leaf-800">{formatRupiah(p.price)}</span>
                    </div>

                    <div className="mt-auto pt-2">
                      {hasItem ? (
                        <div className="flex items-center justify-between bg-leaf-800 text-white rounded-lg p-1">
                          <button
                            type="button"
                            onClick={() => decrementCart(p.name)}
                            className="p-1 hover:bg-leaf-700 rounded-md transition-colors cursor-pointer"
                          >
                            <Minus size={10} strokeWidth={3} />
                          </button>
                          <span className="text-[11px] font-bold px-1">{qtyInCart}</span>
                          <button
                            type="button"
                            onClick={() => addToCart(p)}
                            className="p-1 hover:bg-leaf-700 rounded-md transition-colors cursor-pointer"
                          >
                            <Plus size={10} strokeWidth={3} />
                          </button>
                        </div>
                      ) : (
                        <button
                          type="button"
                          onClick={() => addToCart(p)}
                          className="w-full bg-sand-200 hover:bg-leaf-800 hover:text-white text-sand-700 text-[10px] font-bold py-1.5 rounded-lg transition-all cursor-pointer"
                        >
                          + Add to Order
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="bg-white rounded-3xl p-6 md:p-8 border border-sand-200 shadow-md shadow-sand-200/30 flex flex-col gap-5">
              <div className="flex items-center justify-between border-b border-sand-100 pb-3">
                <h3 className="font-serif text-base font-bold text-sand-900 flex items-center gap-2">
                  <ShoppingCart size={16} className="text-leaf-800" />
                  Your Order Basket
                </h3>
                <span className="text-[10px] font-bold px-2 py-0.5 bg-leaf-100 text-leaf-800 rounded-full">
                  {cart.length} item(s)
                </span>
              </div>

              {cart.length === 0 ? (
                <div className="text-center py-8 text-xs text-sand-700/70 border border-dashed border-sand-200 rounded-2xl bg-sand-50/50">
                  Your basket is empty. Please add items from the menu grid on the left.
                </div>
              ) : (
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-3 max-h-[220px] overflow-y-auto pr-1">
                    {cart.map((item) => (
                      <div key={item.name} className="flex justify-between items-center gap-3 bg-sand-50/30 p-2.5 rounded-xl border border-sand-200/40">
                        <div className="flex items-center gap-3">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-10 h-10 object-cover rounded-lg bg-sand-200"
                            onError={(e) => {
                              e.target.src = "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=100&auto=format&fit=crop&q=60";
                            }}
                          />
                          <div className="flex flex-col">
                            <span className="text-xs font-bold text-sand-900 leading-tight">{item.name}</span>
                            <span className="text-[10px] font-semibold text-leaf-800">
                              {formatRupiah(item.price)} &times; {item.qty}
                            </span>
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          <div className="flex items-center bg-sand-100 border border-sand-200/50 rounded-lg p-0.5 scale-90">
                            <button
                              type="button"
                              onClick={() => decrementCart(item.name)}
                              className="p-1 hover:bg-sand-200 text-sand-700 rounded-md cursor-pointer"
                            >
                              <Minus size={10} strokeWidth={2.5} />
                            </button>
                            <span className="text-xs font-bold px-1 text-sand-900">{item.qty}</span>
                            <button
                              type="button"
                              onClick={() => addToCart(item)}
                              className="p-1 hover:bg-sand-200 text-sand-700 rounded-md cursor-pointer"
                            >
                              <Plus size={10} strokeWidth={2.5} />
                            </button>
                          </div>
                          
                          <button
                            type="button"
                            onClick={() => removeFromCart(item.name)}
                            className="text-red-500 hover:text-red-600 p-1 hover:bg-red-50 rounded-md transition-colors cursor-pointer"
                          >
                            <Trash2 size={13} />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-sand-100 flex justify-between items-center">
                    <span className="text-xs font-bold text-sand-700 uppercase tracking-wider">Grand Total</span>
                    <span className="font-serif text-xl font-black text-honey-600">
                      {formatRupiah(grandTotal)}
                    </span>
                  </div>
                </div>
              )}
            </div>

            <form
              onSubmit={handleOrder}
              className="bg-white rounded-3xl p-6 md:p-8 border border-sand-200 shadow-md shadow-sand-200/30 flex flex-col gap-5"
            >
              <h3 className="font-serif text-base font-bold text-sand-900">
                2. Shipping & Contact Details
              </h3>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="fullName" className="text-[10px] font-bold uppercase tracking-wider text-sand-700 flex items-center gap-1.5">
                  <User size={12} className="text-leaf-800" />
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  value={fullName}
                  onChange={(e) => {
                    const val = e.target.value;
                    setFullName(val.replace(/[0-9]/g, ""));
                  }}
                  required
                  disabled={cart.length === 0}
                  placeholder="John Doe"
                  className="w-full bg-sand-50/50 border border-sand-200 rounded-xl px-4 py-3 text-xs text-sand-900 placeholder:text-sand-700/50 focus:outline-hidden focus:border-leaf-500 focus:bg-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                />
                {nameError && <p className="text-red-500 text-[10px] mt-0.5 font-semibold">{nameError}</p>}
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="email" className="text-[10px] font-bold uppercase tracking-wider text-sand-700 flex items-center gap-1.5">
                  <Mail size={12} className="text-leaf-800" />
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={cart.length === 0}
                  placeholder="john@example.com"
                  className="w-full bg-sand-50/50 border border-sand-200 rounded-xl px-4 py-3 text-xs text-sand-900 placeholder:text-sand-700/50 focus:outline-hidden focus:border-leaf-500 focus:bg-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="phone" className="text-[10px] font-bold uppercase tracking-wider text-sand-700 flex items-center gap-1.5">
                  <Phone size={12} className="text-leaf-800" />
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={phone}
                  onChange={(e) => {
                    const val = e.target.value;
                    setPhone(val.replace(/[^0-9]/g, ""));
                  }}
                  required
                  disabled={cart.length === 0}
                  placeholder="e.g. 08123456789"
                  className="w-full bg-sand-50/50 border border-sand-200 rounded-xl px-4 py-3 text-xs text-sand-900 placeholder:text-sand-700/50 focus:outline-hidden focus:border-leaf-500 focus:bg-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                />
                {phoneError && <p className="text-red-500 text-[10px] mt-0.5 font-semibold">{phoneError}</p>}
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="address" className="text-[10px] font-bold uppercase tracking-wider text-sand-700 flex items-center gap-1.5">
                  <MapPin size={12} className="text-leaf-800" />
                  Delivery Address
                </label>
                <textarea
                  id="address"
                  rows="2"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  required
                  disabled={cart.length === 0}
                  placeholder="Enter complete shipping details..."
                  className="w-full bg-sand-50/50 border border-sand-200 rounded-xl px-4 py-3 text-xs text-sand-900 placeholder:text-sand-700/50 focus:outline-hidden focus:border-leaf-500 focus:bg-white transition-colors resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={cart.length === 0}
                className={`w-full font-bold py-3.5 px-6 rounded-xl transition-all duration-300 text-xs tracking-widest cursor-pointer ${
                  cart.length > 0
                    ? "bg-leaf-800 hover:bg-leaf-700 text-white shadow-md shadow-leaf-900/10 hover:-translate-y-0.5"
                    : "bg-sand-200 text-sand-700/50 cursor-not-allowed"
                }`}
              >
                PLACE SECURE ORDER
              </button>
            </form>
          </div>
        </div>

        {receipt && (
          <section
            ref={receiptRef}
            className="bg-white text-sand-900 p-8 md:p-12 rounded-3xl border border-sand-200 shadow-xl max-w-4xl mx-auto w-full flex flex-col gap-8 scroll-mt-24"
          >
            <div className="flex flex-col items-center text-center border-b border-dashed border-sand-200 pb-6 gap-2">
              <div className="p-3.5 bg-emerald-50 text-emerald-600 rounded-full border border-emerald-100">
                <CheckCircle size={28} />
              </div>
              <h2 className="font-serif text-2xl md:text-3xl font-extrabold text-sand-900 mt-2">
                Order Receipt
              </h2>
              <p className="text-[10px] tracking-wider text-sand-700 uppercase font-bold">
                Successfully Placed on {receipt.date}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col gap-4 bg-sand-50/50 p-6 rounded-2xl border border-sand-200/50">
                <h3 className="font-serif text-base font-bold text-sand-900 flex items-center gap-2">
                  <User size={16} className="text-leaf-800" />
                  Customer Details
                </h3>
                <div className="w-full h-px bg-sand-200/70"></div>
                <ul className="flex flex-col gap-3 text-xs">
                  <li className="flex justify-between">
                    <span className="text-sand-700 font-medium">Name:</span>
                    <span className="font-bold text-sand-900">{receipt.fullName}</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-sand-700 font-medium">Email:</span>
                    <span className="font-bold text-sand-900">{receipt.email}</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-sand-700 font-medium">Phone:</span>
                    <span className="font-bold text-sand-900">{receipt.phone}</span>
                  </li>
                  <li className="flex flex-col gap-1 mt-1">
                    <span className="text-sand-700 font-medium">Address:</span>
                    <span className="font-semibold text-sand-900 text-xs bg-white p-3 rounded-xl border border-sand-200/70 leading-relaxed shadow-xs">
                      {receipt.address}
                    </span>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col gap-4 bg-sand-50/50 p-6 rounded-2xl border border-sand-200/50">
                <h3 className="font-serif text-base font-bold text-sand-900 flex items-center gap-2">
                  <ReceiptText size={16} className="text-leaf-800" />
                  Order Summary
                </h3>
                <div className="w-full h-px bg-sand-200/70"></div>
                
                <div className="flex flex-col gap-2.5">
                  {receipt.items.map((item) => (
                    <div key={item.name} className="flex justify-between text-xs text-sand-900">
                      <span className="text-sand-700">
                        {item.name} <span className="font-bold text-sand-950">&times; {item.qty}</span>
                      </span>
                      <span className="font-bold">{formatRupiah(item.price * item.qty)}</span>
                    </div>
                  ))}
                  <div className="border-t border-dashed border-sand-300 pt-3 mt-1 flex justify-between">
                    <span className="text-leaf-800 font-bold text-xs uppercase tracking-wider">Grand Total</span>
                    <span className="text-base font-bold text-honey-600 font-serif">
                      {formatRupiah(receipt.grandTotal)}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center pt-4 border-t border-dashed border-sand-200 flex flex-col items-center gap-4">
              <div className="flex flex-col items-center">
                <h3 className="font-cursive text-xl text-leaf-800 font-bold">
                  Thank You for Your Order!
                </h3>
                <p className="text-[10px] text-sand-700 mt-1">
                  Our kitchen team will start preparing your order immediately.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 mt-2 w-full max-w-md justify-center">
                <button
                  type="button"
                  onClick={() => setReceipt(null)}
                  className="flex-1 bg-leaf-800 hover:bg-leaf-700 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 text-xs tracking-widest cursor-pointer shadow-xs"
                >
                  ORDER AGAIN
                </button>
                <Link
                  to="/product"
                  className="flex-1 bg-sand-100 hover:bg-sand-200 text-sand-800 font-bold py-3 px-6 rounded-xl border border-sand-300 transition-all duration-300 text-center text-xs tracking-widest flex items-center justify-center"
                >
                  BACK TO MENU
                </Link>
              </div>
            </div>
          </section>
        )}
      </div>
    </main>
  );
}