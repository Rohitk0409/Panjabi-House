import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

// Layout
import Layout from "../components/Layout/Layout";

// Lazy pages
const HomePage = lazy(() => import("../pages/HomePage"));
const AboutPage = lazy(() => import("../pages/AboutPage"));
const ManuPage = lazy(() => import("../pages/ManuPage"));
const ContactPage = lazy(() => import("../pages/ContactPage"));
const GalleryPage = lazy(() => import("../pages/GalleryPage"));

function AppRoutes() {
  return (
    <Suspense fallback={<div className="text-center mt-10">Loading...</div>}>
      <Routes>
        {/* 🔥 Layout Wrapper */}
        <Route path="/" element={<Layout />}>
          {/* Pages inside layout */}
          <Route index element={<HomePage />} />
          <Route path="menu" element={<ManuPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="gallery" element={<GalleryPage />} />
        </Route>

        {/* Optional 404 */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Suspense>
  );
}

export default AppRoutes;
