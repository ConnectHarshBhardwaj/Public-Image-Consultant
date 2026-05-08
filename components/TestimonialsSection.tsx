'use client';
import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Ronak Khatri",
    role: "Ex DUSU President & Youth Activist",
    quote: "PIC completely transformed our public outreach. Their understanding of media strategy and narrative building is unmatched in India. They don't just manage PR; they build authority."
  },
  {
    name: "Harsh Chikkara",
    role: "Politician & Social Worker",
    quote: "In the fast-paced world of politics, perception is everything. The team at PIC handled our digital campaigns and reputation management with absolute precision and professionalism."
  },
  {
    name: "Ravish Bhardwaj",
    role: "Social Worker",
    quote: "When it comes to high-stakes election branding and crisis management, Public Image Consultant is the only agency I trust. They deliver powerful results with absolute confidentiality."
  },
  {
    name: "Amit Sawan",
    role: "Social Worker",
    quote: "From grassroots social media to national press coverage, their strategies are data-driven and intensely effective. Our campaign's digital engagement skyrocketed within weeks."
  }
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 bg-[#050B18] relative border-t border-white/5 overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#B22222]/5 to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 mb-4"
          >
            <span className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#D4AF37]">Voices of Authority</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-white"
          >
            Trusted by <span className="text-[#D4AF37]">Leaders</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card p-8 rounded-xl relative group hover:border-[#D4AF37]/30 transition-all duration-300"
            >
              <Quote className="absolute top-6 right-6 w-12 h-12 text-white/5 group-hover:text-[#D4AF37]/10 transition-colors duration-300" />
              <p className="text-gray-300 text-lg md:text-xl leading-relaxed italic mb-8 relative z-10">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#D4AF37] to-yellow-600 flex items-center justify-center text-black font-bold font-heading text-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-white font-bold font-heading">{testimonial.name}</h4>
                  <p className="text-[#D4AF37] text-sm uppercase tracking-wide font-semibold">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
