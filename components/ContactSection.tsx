'use client';
import { motion } from 'motion/react';
import { Phone, MapPin, Mail, Clock, Send } from 'lucide-react';

export function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-[#0A0A0A] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-white mb-6">
              Establish Your <span className="text-[#F28C28]">Political Authority</span>
            </h2>
            <p className="text-gray-400 text-lg mb-12">
              Ready to shape public perception? Contact us for a highly confidential political strategy session. We architect dominance.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#F28C28]/10 rounded-sm flex items-center justify-center flex-shrink-0 border border-[#F28C28]/20 text-[#F28C28]">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-[#F28C28] mb-1">Political Strategy Call</div>
                  <a href="tel:+919310868777" className="text-2xl font-bold font-heading text-white hover:text-[#F28C28] transition-colors">
                    +91 93108 68777
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#F28C28]/10 rounded-sm flex items-center justify-center flex-shrink-0 border border-[#F28C28]/20 text-[#F28C28]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-[#F28C28] mb-1">War Room / Office</div>
                  <a href="https://maps.app.goo.gl/xgfGFxtWkJELTAi17" target="_blank" rel="noopener noreferrer" className="text-lg text-white font-medium hover:text-[#F28C28] transition-colors block">
                    Near Senior Secondary School, <br/>Sanoth Village, Ghoga, Narela, Delhi
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#F28C28]/10 rounded-sm flex items-center justify-center flex-shrink-0 border border-[#F28C28]/20 text-[#F28C28]">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-[#F28C28] mb-1">Business Hours</div>
                  <p className="text-lg text-white font-medium">
                    Critical Campaign Team: 24/7 Available <br/>
                    Consultations: Mon-Sat, 10 AM - 7 PM
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 flex flex-col sm:flex-row gap-4">
              <a href="https://wa.me/919310868777" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-[#25D366] text-white font-bold uppercase tracking-wide rounded-sm hover:bg-[#128C7E] transition-colors flex items-center justify-center gap-2 shadow-lg">
                WhatsApp Confidential Line
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-8 md:p-10 rounded-sm relative border border-white/5 bg-[#0A0A0A] shadow-[0_0_40px_rgba(242,140,40,0.05)]"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#F28C28]/20 to-transparent rounded-bl-full pointer-events-none" />
            <h3 className="text-3xl font-bold font-heading text-white mb-2">Campaign Discussion</h3>
            <p className="text-gray-400 text-sm mb-6">Fill out the secure form to schedule a consultation with our strategy team.</p>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-400">FullName / Designation</label>
                <input type="text" className="w-full bg-[#0A0A0A] border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-[#F28C28] focus:ring-1 focus:ring-[#F28C28] transition-all" placeholder="Enter details..." />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Phone Number</label>
                <input type="tel" className="w-full bg-[#0A0A0A] border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-[#F28C28] focus:ring-1 focus:ring-[#F28C28] transition-all" placeholder="+91..." />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Service Required</label>
                <select className="w-full bg-[#0A0A0A] border border-white/10 rounded-sm px-4 py-3 text-gray-300 focus:outline-none focus:border-[#F28C28] focus:ring-1 focus:ring-[#F28C28] transition-all appearance-none">
                  <option value="">Select an option</option>
                  <option value="election">Election Campaign Branding</option>
                  <option value="reputation">Reputation Management</option>
                  <option value="social">Social Media Handling</option>
                  <option value="pr">General PR & Media</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Message (Optional)</label>
                <textarea rows={4} className="w-full bg-[#0A0A0A] border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-[#F28C28] focus:ring-1 focus:ring-[#F28C28] transition-all resize-none" placeholder="Briefly describe your objectives..."></textarea>
              </div>
              <button type="submit" className="w-full bg-white text-black font-bold uppercase tracking-wide py-4 rounded-sm hover:bg-gray-200 transition-colors flex items-center justify-center gap-2 group">
                Submit Confidential Request
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </motion.div>

        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 w-full h-[400px] rounded-sm overflow-hidden border border-white/5 relative bg-[#0A0A0A] p-1.5"
        >
          <iframe
            src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=Senior%20Secondary%20School,%20Sanoth%20village,%20Ghoga%20Narela%20Delhi+(Hawk%20Strategies)&t=&z=14&ie=UTF8&iwloc=B&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0, borderRadius: '0.25rem' }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="filter grayscale contrast-125 opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
}
