'use client';
import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Hawk Strategies architected our digital footprint with lethal precision. Their capacity to control the local narrative while executing ground-level voter outreach is unmatched in the industry.",
    author: "Senior MLA",
    role: "Delhi Legislative Assembly",
  },
  {
    quote: "During a severe reputational crisis, they mobilized a war room within hours. The strategic media counter-offensive completely stabilized public sentiment and secured our core base.",
    author: "National Party Spokesperson",
    role: "Strategic Command",
  },
  {
    quote: "They don't just run campaigns; they engineer victories. Their data-driven approach to booth management completely overhauled our traditional campaign strategies.",
    author: "Municipal Campaign Director",
    role: "MCD Core Committee",
  }
];

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-[#0A0A0A] relative border-t border-white/5 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#F28C28]/5 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-black text-white mb-4">
            Trusted by <span className="text-[#F28C28]">Emerging Leaders</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Our strategic operations speak through the victories of the leaders we represent.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="p-8 rounded-xl bg-white/5 border border-white/10 hover:border-[#F28C28]/50 transition-all duration-300 relative group"
            >
              <Quote className="w-10 h-10 text-[#F28C28]/20 absolute top-6 right-6 group-hover:text-[#F28C28]/40 transition-colors" />
              <p className="text-gray-300 leading-relaxed mb-8 italic relative z-10">
                "{testimonial.quote}"
              </p>
              <div>
                <div className="text-white font-bold tracking-wide">{testimonial.author}</div>
                <div className="text-[#F28C28] text-xs font-bold uppercase tracking-widest mt-1">
                  {testimonial.role}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
