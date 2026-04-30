import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useCallback, useState } from "react";

// 🔥 Your gallery data
const galleryPreview = [
  "./gallery/gallery1.png",
  "./gallery/gallery2.png",
  "./gallery/gallery3.png",
  "./gallery/gallery4.png",
  "./gallery/gallery5.png",
  "./gallery/gallery6.png",
  "./gallery/gallery7.png",
  "./gallery/gallery8.png",
  "./gallery/gallery9.png",
];

function GalleryPage() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  // 🔥 Open image
  const openImage = (index) => {
    setSelectedIndex(index);
  };

  // 🔥 Close modal
  const closeImage = () => {
    setSelectedIndex(null);
  };

  // 🔥 Next image
  const nextImage = useCallback(() => {
    setSelectedIndex((prev) =>
      prev === galleryPreview.length - 1 ? 0 : prev + 1,
    );
  }, []);

  // 🔥 Prev image
  const prevImage = useCallback(() => {
    setSelectedIndex((prev) =>
      prev === 0 ? galleryPreview.length - 1 : prev - 1,
    );
  }, []);

  return (
    <div className="min-h-screen bg-zinc-950 text-white px-4 sm:px-6">
      {/* ================= HEADER ================= */}
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-5xl font-bold mb-4">Our Gallery</h1>
        <p className="text-zinc-400">
          Explore our delicious food & restaurant vibes
        </p>
      </div>

      {/* ================= GRID ================= */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {galleryPreview.map((img, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="overflow-hidden rounded-xl cursor-pointer"
            onClick={() => openImage(index)}
          >
            <img
              src={img}
              alt={`gallery-${index}`}
              loading="lazy"
              className="w-full h-40 sm:h-48 md:h-52 object-cover transition duration-500 hover:scale-110"
            />
          </motion.div>
        ))}
      </div>

      {/* ================= LIGHTBOX ================= */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* CLOSE BUTTON */}
            <button
              onClick={closeImage}
              className="absolute top-6 right-6 text-white"
            >
              <X size={30} />
            </button>

            {/* LEFT BUTTON */}
            <button
              onClick={prevImage}
              className="absolute left-4 md:left-10 text-white"
            >
              <ChevronLeft size={40} />
            </button>

            {/* IMAGE */}
            <motion.img
              key={selectedIndex}
              src={galleryPreview[selectedIndex]}
              alt="preview"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="max-h-[80vh] max-w-full rounded-xl shadow-2xl"
            />

            {/* RIGHT BUTTON */}
            <button
              onClick={nextImage}
              className="absolute right-4 md:right-10 text-white"
            >
              <ChevronRight size={40} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default GalleryPage;
