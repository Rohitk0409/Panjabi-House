import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

const menuImages = [
  "./menu/menu1.png",
  "./menu/menu2.png",
  "./menu/menu3.png",
  "./menu/menu4.png",
  "./menu/menu5.png",
  "./menu/menu6.png",
  "./menu/menu7.png",
];

const CATEGORY_LABELS = [
  "Starters",
  "Mains",
  "Grills",
  "Seafood",
  "Desserts",
  "Drinks",
  "Specials",
];

export default function MenuPage() {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [loaded, setLoaded] = useState({});
  const [isTransitioning, setIsTransitioning] = useState(false);

  const markLoaded = (i) => setLoaded((prev) => ({ ...prev, [i]: true }));

  const navigate = useCallback(
    (dir, e) => {
      e?.stopPropagation();
      if (isTransitioning) return;
      setIsTransitioning(true);
      setTimeout(() => {
        setSelectedIndex((prev) =>
          dir === "next"
            ? (prev + 1) % menuImages.length
            : (prev - 1 + menuImages.length) % menuImages.length,
        );
        setIsTransitioning(false);
      }, 150);
    },
    [isTransitioning],
  );

  useEffect(() => {
    if (selectedIndex === null) return;
    const handleKey = (e) => {
      if (e.key === "ArrowRight") navigate("next");
      if (e.key === "ArrowLeft") navigate("prev");
      if (e.key === "Escape") setSelectedIndex(null);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [selectedIndex, navigate]);

  // Lock body scroll when modal open
  useEffect(() => {
    document.body.style.overflow = selectedIndex !== null ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedIndex]);

  return (
    <div className="menu-page">
      {/* ── Hero heading ── */}
      <header className="menu-header">
        <p className="menu-eyebrow">Crafted with Passion</p>
        <h1 className="menu-title">
          Our <span className="accent">Menu</span>
        </h1>
        <div className="menu-divider" />
        <p className="menu-subtitle">
          Browse each section — click any page to view it full screen
        </p>
      </header>

      {/* ── Category pills ── */}
      <nav className="category-nav" aria-label="Menu categories">
        {CATEGORY_LABELS.map((label, i) => (
          <button
            key={label}
            className="category-pill"
            onClick={() => setSelectedIndex(i)}
          >
            {label}
          </button>
        ))}
      </nav>

      {/* ── Grid ── */}
      <main className="menu-grid">
        {menuImages.map((img, i) => (
          <button
            key={i}
            className="menu-card"
            onClick={() => setSelectedIndex(i)}
            aria-label={`View ${CATEGORY_LABELS[i]} menu page`}
          >
            {/* Skeleton shimmer while loading */}
            {!loaded[i] && <div className="skeleton" aria-hidden="true" />}

            <img
              src={img}
              alt={`${CATEGORY_LABELS[i]} menu page`}
              className={`card-img ${loaded[i] ? "card-img--loaded" : ""}`}
              loading="lazy"
              onLoad={() => markLoaded(i)}
            />

            <div className="card-overlay">
              <ZoomIn size={20} strokeWidth={1.5} className="card-zoom-icon" />
              <span className="card-label">{CATEGORY_LABELS[i]}</span>
              <span className="card-page-num">Page {i + 1}</span>
            </div>

            {/* Top badge */}
            <span className="card-badge">{i + 1}</span>
          </button>
        ))}
      </main>

      {/* ── Lightbox modal ── */}
      {selectedIndex !== null && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`${CATEGORY_LABELS[selectedIndex]} — full view`}
          onClick={() => setSelectedIndex(null)}
        >
          {/* Close */}
          <button
            className="lb-close"
            onClick={() => setSelectedIndex(null)}
            aria-label="Close"
          >
            <X size={22} strokeWidth={1.5} />
          </button>

          {/* Prev */}
          <button
            className="lb-nav lb-nav--prev"
            onClick={(e) => navigate("prev", e)}
            aria-label="Previous page"
          >
            <ChevronLeft size={26} strokeWidth={1.5} />
          </button>

          {/* Image */}
          <div
            className={`lb-content ${isTransitioning ? "lb-content--fade" : ""}`}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={menuImages[selectedIndex]}
              alt={`${CATEGORY_LABELS[selectedIndex]} menu`}
              className="lb-img"
            />

            {/* Info bar */}
            <div className="lb-info">
              <span className="lb-category">
                {CATEGORY_LABELS[selectedIndex]}
              </span>
              <span className="lb-counter">
                {selectedIndex + 1} / {menuImages.length}
              </span>
            </div>

            {/* Dot indicators */}
            <div className="lb-dots" role="tablist" aria-label="Page indicator">
              {menuImages.map((_, i) => (
                <button
                  key={i}
                  role="tab"
                  aria-selected={i === selectedIndex}
                  className={`lb-dot ${i === selectedIndex ? "lb-dot--active" : ""}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedIndex(i);
                  }}
                  aria-label={`Go to page ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Next */}
          <button
            className="lb-nav lb-nav--next"
            onClick={(e) => navigate("next", e)}
            aria-label="Next page"
          >
            <ChevronRight size={26} strokeWidth={1.5} />
          </button>
        </div>
      )}

      <style>{`
        /* ── Reset & base ── */
        .menu-page {
          min-height: 100vh;
          background: #0d0d0d;
          color: #f5f0e8;
          font-family: 'Georgia', serif;
          padding: 0 0 5rem;
        }

        /* ── Header ── */
        .menu-header {
          text-align: center;
          padding: 5rem 1rem 2.5rem;
        }
        .menu-eyebrow {
          font-family: 'Helvetica Neue', sans-serif;
          font-size: 0.7rem;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: #c9a96e;
          margin: 0 0 1rem;
        }
        .menu-title {
          font-size: clamp(2.8rem, 7vw, 5rem);
          font-weight: 400;
          margin: 0 0 1rem;
          letter-spacing: -0.01em;
          line-height: 1.1;
          color: #f5f0e8;
        }
        .menu-title .accent {
          color: #c9a96e;
          font-style: italic;
        }
        .menu-divider {
          width: 3rem;
          height: 1px;
          background: #c9a96e;
          margin: 0 auto 1.25rem;
          opacity: 0.6;
        }
        .menu-subtitle {
          font-family: 'Helvetica Neue', sans-serif;
          font-size: 0.85rem;
          color: #7a7060;
          margin: 0;
          letter-spacing: 0.02em;
        }

        /* ── Category nav ── */
        .category-nav {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 0.5rem;
          padding: 0 1rem 2.5rem;
        }
        .category-pill {
          background: transparent;
          border: 1px solid #3a3228;
          color: #9a8a72;
          font-family: 'Helvetica Neue', sans-serif;
          font-size: 0.72rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          padding: 0.45rem 1rem;
          border-radius: 2rem;
          cursor: pointer;
          transition: background 0.2s, color 0.2s, border-color 0.2s;
        }
        .category-pill:hover {
          background: #c9a96e18;
          border-color: #c9a96e;
          color: #c9a96e;
        }

        /* ── Grid ── */
        .menu-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
          gap: 1.25rem;
          padding: 0 1.25rem;
          max-width: 1200px;
          margin: 0 auto;
        }

        /* ── Card ── */
        .menu-card {
          position: relative;
          border-radius: 12px;
          overflow: hidden;
          cursor: pointer;
          background: #181410;
          border: 1px solid #2a2218;
          aspect-ratio: 3/4;
          display: block;
          padding: 0;
          transition: transform 0.3s cubic-bezier(.22,.68,0,1.2), border-color 0.3s;
        }
        .menu-card:hover {
          transform: translateY(-5px) scale(1.01);
          border-color: #c9a96e55;
        }
        .menu-card:focus-visible {
          outline: 2px solid #c9a96e;
          outline-offset: 3px;
        }

        /* Skeleton */
        .skeleton {
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, #1a1612 25%, #221e18 50%, #1a1612 75%);
          background-size: 200% 100%;
          animation: shimmer 1.5s infinite;
          z-index: 1;
        }
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }

        /* Image */
        .card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          opacity: 0;
          transition: opacity 0.4s ease, transform 0.5s ease;
        }
        .card-img--loaded { opacity: 0.82; }
        .menu-card:hover .card-img--loaded {
          opacity: 1;
          transform: scale(1.06);
        }

        /* Overlay */
        .card-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to top,
            rgba(0,0,0,0.85) 0%,
            rgba(0,0,0,0.1) 50%,
            transparent 100%
          );
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-end;
          padding: 1.25rem;
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .menu-card:hover .card-overlay { opacity: 1; }

        .card-zoom-icon {
          color: #c9a96e;
          margin-bottom: 0.5rem;
        }
        .card-label {
          font-family: 'Helvetica Neue', sans-serif;
          font-size: 0.7rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #c9a96e;
          margin-bottom: 0.25rem;
        }
        .card-page-num {
          font-size: 0.75rem;
          color: #9a8a72;
          font-family: 'Helvetica Neue', sans-serif;
        }

        /* Badge */
        .card-badge {
          position: absolute;
          top: 0.75rem;
          left: 0.75rem;
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: rgba(201,169,110,0.15);
          border: 1px solid rgba(201,169,110,0.4);
          color: #c9a96e;
          font-family: 'Helvetica Neue', sans-serif;
          font-size: 0.7rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* ── Lightbox ── */
        .lightbox {
          position: fixed;
          inset: 0;
          background: rgba(5, 4, 3, 0.97);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          animation: lb-in 0.25s ease;
        }
        @keyframes lb-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .lb-close {
          position: absolute;
          top: 1.25rem;
          right: 1.25rem;
          background: rgba(255,255,255,0.07);
          border: 1px solid rgba(255,255,255,0.12);
          color: #f5f0e8;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.2s;
          z-index: 10;
        }
        .lb-close:hover { background: rgba(255,255,255,0.15); }

        .lb-nav {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(201,169,110,0.12);
          border: 1px solid rgba(201,169,110,0.25);
          color: #c9a96e;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.2s, transform 0.2s;
          z-index: 10;
        }
        .lb-nav:hover {
          background: rgba(201,169,110,0.25);
          transform: translateY(-50%) scale(1.08);
        }
        .lb-nav--prev { left: 1rem; }
        .lb-nav--next { right: 1rem; }

        @media (min-width: 640px) {
          .lb-nav--prev { left: 2rem; }
          .lb-nav--next { right: 2rem; }
        }

        .lb-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          max-height: 90vh;
          max-width: min(700px, 90vw);
          transition: opacity 0.15s ease;
        }
        .lb-content--fade { opacity: 0; }

        .lb-img {
          max-height: 75vh;
          max-width: 100%;
          object-fit: contain;
          border-radius: 8px;
          display: block;
        }

        .lb-info {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          margin-top: 1rem;
          padding: 0 0.25rem;
        }
        .lb-category {
          font-family: 'Helvetica Neue', sans-serif;
          font-size: 0.7rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #c9a96e;
        }
        .lb-counter {
          font-family: 'Helvetica Neue', sans-serif;
          font-size: 0.72rem;
          color: #5a5040;
          letter-spacing: 0.05em;
        }

        .lb-dots {
          display: flex;
          gap: 6px;
          margin-top: 0.85rem;
        }
        .lb-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #3a3228;
          border: none;
          cursor: pointer;
          padding: 0;
          transition: background 0.2s, transform 0.2s;
        }
        .lb-dot--active {
          background: #c9a96e;
          transform: scale(1.4);
        }
        .lb-dot:hover:not(.lb-dot--active) { background: #7a6a52; }

        /* ── Responsive tweaks ── */
        @media (max-width: 480px) {
          .menu-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 0.75rem;
            padding: 0 0.75rem;
          }
          .lb-nav { width: 38px; height: 38px; }
          .lb-nav--prev { left: 0.5rem; }
          .lb-nav--next { right: 0.5rem; }
        }
      `}</style>
    </div>
  );
}
