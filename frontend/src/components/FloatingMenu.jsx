import { motion } from "framer-motion";
import { MapPin, MessageCircle, Phone } from "lucide-react";

const menuItems = [
  {
    icon: <Phone size={24} />,
    label: "Call Us",
    action: () => (window.location.href = "tel:+918595502055"),
    color: "bg-gradient-to-tr from-green-500 to-emerald-400",
    delay: 0,
  },
  {
    icon: <MessageCircle size={24} />,
    label: "WhatsApp",
    action: () => window.open("https://wa.me/918595502055", "_blank"),
    color: "bg-gradient-to-tr from-emerald-600 to-teal-400",
    delay: 0.2, // Offset animation
  },
  {
    icon: <MapPin size={24} />,
    label: "Find Us",
    action: () =>
      window.open(
        "https://www.google.com/maps/dir//Punjabi+House,+hub+of+chaap+and+curries,+Shop-19,+Shree+Brahma+Square+Complex,+behind+Ace+city,+noida+extension,+Sector-01,+Aimnabad,+Bisrakh+Jalalpur,+Greater+Noida,+Bisrakh+Jalalpur,+Uttar+Pradesh+201318/@28.5407201,77.4357733,15z/data=!4m8!4m7!1m0!1m5!1m1!1s0x390cefef4a99c401:0x37fc1792b7e0dbb9!2m2!1d77.4525317!2d28.5597551?entry=ttu&g_ep=EgoyMDI2MDQyNy4wIKXMDSoASAFQAw%3D%3D",
        "_blank",
      ),
    color: "bg-gradient-to-tr from-rose-600 to-orange-400",
    delay: 0.4, // Offset animation
  },
];

function FloatingMenu() {
  return (
    <div className="fixed bottom-6 right-4 md:right-8 z-[100] flex flex-col items-end gap-5">
      {menuItems.map((item, i) => (
        <div key={i} className="group flex items-center gap-3">
          {/* Tooltip - Always visible on desktop hover, hidden on small screens unless active */}
          <span className="bg-white/90 backdrop-blur-sm text-gray-800 text-xs font-bold px-3 py-1.5 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-gray-100 hidden sm:block">
            {item.label}
          </span>

          {/* Animated Icon Container */}
          <motion.div
            onClick={item.action}
            initial={{ x: 50, opacity: 0 }}
            animate={{
              x: 0,
              opacity: 1,
              // Constant floating "levitation" effect
              y: [0, -10, 0],
            }}
            transition={{
              x: { duration: 0.5, delay: i * 0.1 },
              opacity: { duration: 0.5, delay: i * 0.1 },
              y: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: item.delay, // Makes them move out of sync for a natural feel
              },
            }}
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            className={`cursor-pointer ${item.color} text-white p-4 rounded-2xl shadow-[0_10px_25px_-5px_rgba(0,0,0,0.3)] hover:shadow-2xl transition-shadow flex items-center justify-center relative`}
          >
            {item.icon}

            {/* Subtle Pulse Ring per icon */}
            <motion.div
              animate={{ scale: [1, 1.4], opacity: [0.3, 0] }}
              transition={{ repeat: Infinity, duration: 2, delay: item.delay }}
              className="absolute inset-0 rounded-2xl bg-white/40 z-[-1]"
            />
          </motion.div>
        </div>
      ))}
    </div>
  );
}

export default FloatingMenu;
