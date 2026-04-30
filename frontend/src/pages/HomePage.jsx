import { motion } from "framer-motion";
import { ChevronRight, Star } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// ================= HERO IMAGES =================
const heroImages = [
  "./panjabiHouse.png",
  "./gallery/gallery2.png",
  "https://images.unsplash.com/photo-1555396273-367ea4eb4db5",
  "https://images.unsplash.com/photo-1544025162-d76694265947",
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
  "https://images.unsplash.com/photo-1553621042-f6e147245754",
];

// ================= GALLERY PREVIEW =================
const galleryPreview = [
  "./gallery/gallery1.png",
  "./gallery/gallery2.png",
  "./gallery/gallery3.png",
  "./gallery/gallery4.png",
  "./gallery/gallery5.png",
  "./gallery/gallery6.png",
  "./gallery/gallery7.png",
  "./gallery/gallery8.png",
  // "./gallery/gallery9.png",
];

export default function HomePage() {
  const navigate = useNavigate();
  const [currentImage, setCurrentImage] = useState(0);

  // 🔥 Auto slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-zinc-950 text-white overflow-hidden">
      {/* ================= HERO ================= */}
      <section className="relative h-[100vh] flex items-center justify-center overflow-hidden">
        {/* Background slider */}
        {heroImages.map((img, index) => (
          <motion.div
            key={index}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${img})` }}
            initial={{ opacity: 0 }}
            animate={{ opacity: currentImage === index ? 1 : 0 }}
            transition={{ duration: 1 }}
          />
        ))}

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/80 to-black/90" />

        {/* Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full mb-4 border border-amber-400/30">
              <Star className="text-amber-400 w-4 h-4" />
              <span className="text-xs tracking-widest">
                4+ YEARS OF PURE FLAVOR
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold leading-tight mb-4">
              HUB OF <span className="text-amber-400">CHAAP</span>
              <br /> & AUTHENTIC CURRIES
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-lg md:text-xl text-zinc-300 mb-6">
              Experience rich Punjabi flavors with smoky chaaps and creamy
              curries.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button className="bg-amber-500 hover:bg-amber-600 text-black px-6 py-3 rounded-xl font-semibold flex items-center justify-center gap-2">
                Explore Menu <ChevronRight size={18} />
              </button>

              <button className="border border-white/40 px-6 py-3 rounded-xl hover:border-amber-400">
                Visit Us
              </button>
            </div>
          </motion.div>
        </div>

        {/* Scroll */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-6 text-xs text-amber-400/60"
        >
          Scroll ↓
        </motion.div>
      </section>

      {/* ================= FEATURED ================= */}
      <section className="py-16 bg-black">
        <h2 className="text-center text-2xl sm:text-4xl font-bold mb-10">
          Featured Dishes
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
          {galleryPreview.map((img, i) => (
            <div key={i} className="group rounded-xl overflow-hidden">
              <img
                src={`/${img}`}
                alt="dish"
                className="w-full h-60 object-cover group-hover:scale-110 transition duration-500"
              />
            </div>
          ))}
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section className="py-20 bg-zinc-900">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Where Tradition Meets Taste
            </h2>

            <p className="text-zinc-400 mb-6">
              Authentic Punjabi flavors crafted with passion and quality
              ingredients.
            </p>

            <div className="flex gap-6">
              <div>
                <div className="text-2xl font-bold text-amber-400">4.5</div>
                <p className="text-xs text-zinc-500">Rating</p>
              </div>

              <div>
                <div className="text-2xl font-bold">4+</div>
                <p className="text-xs text-zinc-500">Years</p>
              </div>
            </div>
          </div>

          <img
            src="/panjabiHouse.png"
            alt="restaurant"
            className="rounded-xl shadow-lg"
          />
        </div>
      </section>

      {/* ================= GALLERY ================= */}
      <section className="py-16 bg-black">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl sm:text-4xl font-bold text-center mb-8">
            Our Gallery
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {galleryPreview.map((img, i) => (
              <div key={i} className="overflow-hidden rounded-lg">
                <img
                  src={img}
                  alt="gallery"
                  className="w-full h-40 object-cover hover:scale-110 transition duration-500"
                />
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <button
              onClick={() => navigate("/gallery")}
              className="bg-amber-500 px-6 py-3 rounded-lg text-black font-semibold"
            >
              View Full Gallery
            </button>
          </div>
        </div>
      </section>

      {/* ================= TESTIMONIAL ================= */}
      <section className="py-16 bg-zinc-900 text-center px-4">
        <h2 className="text-2xl sm:text-4xl font-bold mb-6">
          What Customers Say
        </h2>

        <p className="text-zinc-400 max-w-xl mx-auto">
          "Best chaap in town! Authentic taste and amazing service."
        </p>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-16 bg-black text-center">
        <h2 className="text-2xl sm:text-4xl font-bold mb-4">
          Ready to Taste Authentic Punjab?
        </h2>

        <button className="bg-amber-500 px-8 py-3 rounded-lg text-black font-bold">
          Book a Table
        </button>
      </section>
    </div>
  );
}
