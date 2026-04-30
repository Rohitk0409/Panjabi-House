import { motion } from "framer-motion";
import { ArrowRight, Clock, MapPin, MessageCircle, Phone } from "lucide-react";

const ContactPage = () => {
  const theme = {
    dark: "bg-[#0A0A0A]",
    card: "bg-[#161616] backdrop-blur-md",
    orange: "text-[#FC9B14]",
    accent: "#FC9B14",
    border: "border-[#262626]",
    textMuted: "text-gray-400",
  };

  const schedule = [
    { days: "Monday - Friday", time: "11:00 AM - 11:00 PM" },
    { days: "Saturday - Sunday", time: "11:00 AM - 12:00 AM" },
  ];

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  return (
    <div
      className={`min-h-screen ${theme.dark} text-white selection:bg-[#FC9B14]/30`}
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto py-20 px-6"
      >
        {/* --- HEADER SECTION --- */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <span
            className={`${theme.orange} uppercase text-xs font-black tracking-[0.3em] mb-4 block`}
          >
            Get In Touch
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
            Punjabi <span className={theme.orange}>House Hub</span>
          </h1>
          <div className="w-24 h-1.5 bg-[#FC9B14] mx-auto rounded-full shadow-[0_0_15px_rgba(252,155,20,0.4)]"></div>
        </motion.div>

        {/* --- MAIN CONTENT GRID --- */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* LEFT COLUMN: Contact Methods */}
          <div className="lg:col-span-7 space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              {/* Call Card */}
              <motion.a
                variants={itemVariants}
                whileHover={{ y: -5 }}
                href="tel:+918595502055"
                className={`${theme.card} p-8 rounded-[2rem] border ${theme.border} hover:border-[#FC9B14]/50 transition-all flex flex-col group relative overflow-hidden`}
              >
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Phone size={80} />
                </div>
                <div className="bg-[#FC9B14]/10 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                  <Phone className={`${theme.orange} w-6 h-6`} />
                </div>
                <h3 className="text-xl font-bold mb-1">Call Now</h3>
                <p className={`${theme.textMuted} mb-4`}>Quick Support</p>
                <span className="text-lg font-mono font-medium">
                  +91 85955 02055
                </span>
              </motion.a>

              {/* WhatsApp Card */}
              <motion.a
                variants={itemVariants}
                whileHover={{ y: -5 }}
                href="https://wa.me/918595502055"
                target="_blank"
                rel="noreferrer"
                className={`${theme.card} p-8 rounded-[2rem] border ${theme.border} hover:border-[#25D366]/50 transition-all flex flex-col group relative overflow-hidden`}
              >
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity text-[#25D366]">
                  <MessageCircle size={80} />
                </div>
                <div className="bg-[#25D366]/10 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                  <MessageCircle className="text-[#25D366] w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-1">WhatsApp</h3>
                <p className={`${theme.textMuted} mb-4`}>Chat Anytime</p>
                <div className="flex items-center gap-2 text-[#25D366] font-semibold uppercase text-xs tracking-wider">
                  Online Now{" "}
                  <div className="w-2 h-2 bg-[#25D366] rounded-full animate-pulse"></div>
                </div>
              </motion.a>
            </div>

            {/* Address Card */}
            <motion.a
              variants={itemVariants}
              whileHover={{ y: -5 }}
              href="https://www.google.com/maps?q=Punjabi+House+hub+of+chaap+and+curries+Greater+Noida"
              target="_blank"
              rel="noreferrer"
              className={`${theme.card} p-8 rounded-[2.5rem] border ${theme.border} hover:border-[#FC9B14]/50 transition-all block group relative overflow-hidden`}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-[#FC9B14]/10 p-3 rounded-xl">
                      <MapPin className={theme.orange} size={24} />
                    </div>
                    <h3 className="text-2xl font-bold">Visit Us</h3>
                  </div>
                  <p
                    className={`${theme.textMuted} text-lg leading-relaxed mb-6`}
                  >
                    Shop-19, Shree Brahma Square Complex, behind Ace City, Noida
                    Extension, Sector-01, Greater Noida, UP 201318
                  </p>
                  <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#FC9B14] text-black font-bold rounded-full group-hover:shadow-[0_0_20px_rgba(252,155,20,0.4)] transition-all">
                    Directions <ArrowRight size={18} />
                  </div>
                </div>

                {/* Visual Map Placeholder Decoration */}
                <div className="hidden md:block w-48 h-48 bg-[#222] rounded-3xl border border-[#333] relative overflow-hidden group-hover:border-[#FC9B14]/30 transition-colors">
                  <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#FC9B14_1px,transparent_1px)] [background-size:16px_16px]"></div>
                  <MapPin
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#FC9B14] animate-bounce"
                    size={32}
                  />
                </div>
              </div>
            </motion.a>
          </div>

          {/* RIGHT COLUMN: Schedule */}
          <motion.div variants={itemVariants} className="lg:col-span-5 h-full">
            <div
              className={`${theme.card} p-8 md:p-10 rounded-[2.5rem] border ${theme.border} h-full relative overflow-hidden`}
            >
              {/* Background Glow */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#FC9B14]/10 blur-[80px] rounded-full"></div>

              <div className="flex items-center gap-4 mb-10">
                <div className="bg-white/5 p-4 rounded-2xl">
                  <Clock className={theme.orange} size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Business Hours</h3>
                  <p className="text-green-500 text-sm font-medium">
                    Currently Open
                  </p>
                </div>
              </div>

              <div className="space-y-2">
                {schedule.map((item, i) => (
                  <div
                    key={i}
                    className="group flex flex-col sm:flex-row sm:items-center justify-between p-5 rounded-2xl hover:bg-white/[0.03] transition-colors border border-transparent hover:border-white/5"
                  >
                    <span className="text-gray-400 font-medium mb-1 sm:mb-0">
                      {item.days}
                    </span>
                    <span className="text-white font-bold text-lg">
                      {item.time}
                    </span>
                  </div>
                ))}
              </div>

              {/* Branding bit at bottom */}
              <div className="mt-12 pt-8 border-t border-[#262626] text-center">
                <p className="text-sm text-gray-500 italic">
                  "Authentic taste, served with love."
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactPage;
