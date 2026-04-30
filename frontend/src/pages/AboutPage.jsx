"use client";

import { motion } from "framer-motion";
import { Award, ChefHat, Star, Users } from "lucide-react";

export default function AboutPage() {
  return (
    <>
      <div className="bg-zinc-950 text-white ">
        {/* Hero Section */}
        <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('./panjabiHouse.png')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black" />

          <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-3 bg-amber-500/10 border border-amber-400/30 px-6 py-2 rounded-full mb-6">
                <Star className="text-amber-400" fill="currentColor" />
                <span className="text-amber-400 font-medium tracking-widest">
                  EST. 4+ YEARS
                </span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 leading-tight">
                OUR STORY
              </h1>
              <p className="text-2xl md:text-3xl text-amber-100 font-light">
                Where Authentic Punjabi Flavors Come Alive
              </p>
            </motion.div>
          </div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 text-amber-400/70"
          >
            ↓ Discover Our Journey
          </motion.div>
        </section>

        {/* Our Story Section */}
        <section className="py-20 px-6 md:px-12 max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-amber-400 mb-8 leading-tight">
                From Passion to Plate
              </h2>
              <div className="space-y-6 text-lg text-zinc-300 leading-relaxed">
                <p>
                  Punjabi House was born from a deep love for authentic Punjabi
                  cuisine and the desire to bring the rich, bold flavors of
                  Punjab to Greater Noida West.
                </p>
                <p>
                  What started as a small dream to serve the best{" "}
                  <span className="text-amber-400 font-medium">Soya Chaap</span>{" "}
                  and traditional curries has now become a beloved destination
                  for food lovers.
                </p>
                <p>
                  Every dish is prepared with fresh ingredients, traditional
                  recipes, and a lot of heart — just like home.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative rounded-3xl overflow-hidden shadow-2xl border border-amber-900/50"
            >
              <img
                src="./panjabiHouse.png"
                alt="Chef cooking"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-8 left-8">
                <p className="text-amber-400 text-sm tracking-widest">
                  OUR KITCHEN
                </p>
                <p className="text-2xl font-bold">Crafted with Passion</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Highlights / Values */}
        <section className="py-20 bg-black">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                What Makes Us Special
              </h2>
              <p className="text-zinc-400 text-lg">
                Our core values that define every plate we serve
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <ChefHat className="w-12 h-12" />,
                  title: "Fresh Ingredients",
                  desc: "We source the finest ingredients daily to ensure authentic taste and quality.",
                },
                {
                  icon: <Award className="w-12 h-12" />,
                  title: "Authentic Recipes",
                  desc: "Traditional Punjabi recipes passed down through generations with a modern twist.",
                },
                {
                  icon: <Users className="w-12 h-12" />,
                  title: "Warm Hospitality",
                  desc: "Every guest is treated like family in our warm and welcoming ambience.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="bg-zinc-900 border border-amber-900/50 rounded-3xl p-10 text-center hover:border-amber-400 transition-all group"
                >
                  <div className="text-amber-400 mb-6 flex justify-center group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-amber-400">
                    {item.title}
                  </h3>
                  <p className="text-zinc-400 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-zinc-900">
          <div className="max-w-5xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
              {[
                { number: "4+", label: "Years of Excellence" },
                { number: "50+", label: "Signature Dishes" },
                { number: "10K+", label: "Happy Customers" },
                { number: "4.5", label: "Average Rating" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="p-6"
                >
                  <div className="text-5xl md:text-6xl font-bold text-amber-400 mb-2">
                    {stat.number}
                  </div>
                  <p className="text-zinc-400 text-lg">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Visit Us CTA */}
        <section className="py-24 px-6 text-center bg-gradient-to-b from-black to-zinc-950">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Come Experience the Real Taste of Punjab
            </h2>
            <p className="text-zinc-400 text-xl mb-10">
              We can't wait to serve you our signature chaaps and curries
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:918595502055"
                className="bg-amber-500 hover:bg-amber-600 text-black font-bold text-lg px-10 py-4 rounded-2xl flex items-center justify-center gap-3 transition-all hover:scale-105"
              >
                📞 Call to Reserve
              </a>
              <a
                href="/contact"
                className="border border-amber-400 hover:bg-amber-400 hover:text-black font-semibold text-lg px-10 py-4 rounded-2xl transition-all"
              >
                Find Our Location
              </a>
            </div>
          </motion.div>
        </section>
      </div>
    </>
  );
}
