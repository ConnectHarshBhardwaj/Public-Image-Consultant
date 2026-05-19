"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Phone, MapPin, Mail, Clock, Send, CheckCircle2 } from "lucide-react";
import { db } from "../lib/firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

export function ContactSection() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (isSubmitting) return;

    setIsSubmitting(true);
    const formData = new FormData(form);

    try {
      await addDoc(collection(db, "contactForms"), {
        fullName: formData.get("fullName")?.toString() || "",
        phoneNumber: formData.get("phoneNumber")?.toString() || "",
        serviceRequired: formData.get("serviceRequired")?.toString() || "",
        message: formData.get("message")?.toString() || "",
        createdAt: serverTimestamp(),
      });
      setIsSubmitted(true);
      form.reset();
    } catch (error) {
      console.error("Error adding document: ", error);
      alert("Failed to submit form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <section
      id="contact"
      className="py-24 bg-[#FAFAFA] relative border-y border-gray-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-[#0B1A2E] mb-6">
              Establish Your{" "}
              <span className="text-[#1E3A8A]">Political Authority</span>
            </h2>
            <p className="text-gray-600 text-lg mb-12">
              Ready to shape public perception? Contact us for a highly
              confidential political strategy session. We architect dominance.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-md flex items-center justify-center flex-shrink-0 border border-gray-200 text-[#1E3A8A] shadow-sm">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-1">
                    Political Strategy Call
                  </div>
                  <a
                    href="tel:+919310868777"
                    className="text-2xl font-bold font-heading text-[#0B1A2E] hover:text-[#1E3A8A] transition-colors"
                  >
                    +91 93108 68777
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-md flex items-center justify-center flex-shrink-0 border border-gray-200 text-[#1E3A8A] shadow-sm">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-1">
                    War Room / Office
                  </div>
                  <a
                    href="https://maps.app.goo.gl/xgfGFxtWkJELTAi17"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg text-[#0B1A2E] font-medium hover:text-[#1E3A8A] transition-colors block"
                  >
                    Near Senior Secondary School, <br />
                    Sanoth Village, Ghoga, Narela, Delhi
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-md flex items-center justify-center flex-shrink-0 border border-gray-200 text-[#1E3A8A] shadow-sm">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-1">
                    Business Hours
                  </div>
                  <p className="text-lg text-[#0B1A2E] font-medium">
                    Critical Campaign Team: 24/7 Available <br />
                    Consultations: Mon-Sat, 10 AM - 7 PM
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/919310868777"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-[#25D366] text-white font-bold uppercase tracking-wide rounded-sm hover:bg-[#128C7E] transition-colors flex items-center justify-center gap-2 shadow-lg"
              >
                WhatsApp Confidential Line
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-8 md:p-10 rounded-xl relative border border-gray-100 bg-white shadow-xl flex flex-col justify-center min-h-[500px]"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#1E3A8A]/5 to-transparent rounded-bl-full pointer-events-none" />

            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="text-center py-12 flex flex-col items-center justify-center h-full"
                >
                  <div className="w-16 h-16 bg-green-100 text-[#25D366] rounded-full flex items-center justify-center mb-6 shadow-sm mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold font-heading text-[#0B1A2E] mb-3">
                    Request Received
                  </h3>
                  <p className="text-gray-500 mb-8 max-w-[280px] leading-relaxed mx-auto">
                    Your secure submission has been logged. Our strategy team
                    will be in touch shortly.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="inline-flex items-center justify-center px-6 py-3 border-2 border-[#1E3A8A] text-[#1E3A8A] font-bold uppercase tracking-wide rounded-md hover:bg-[#1E3A8A] hover:text-white transition-colors"
                  >
                    Submit Another Request
                  </button>
                </motion.div>
              ) : (
                <motion.div
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <h3 className="text-3xl font-bold font-heading text-[#0B1A2E] mb-2">
                    Campaign Discussion
                  </h3>
                  <p className="text-gray-500 text-sm mb-6">
                    Fill out the secure form to schedule a consultation with our
                    strategy team.
                  </p>
                  <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-gray-500">
                        FullName / Designation
                      </label>
                      <input
                        name="fullName"
                        type="text"
                        required
                        className="w-full bg-[#FAFAFA] border border-gray-200 rounded-md px-4 py-3 text-[#0B1A2E] focus:outline-none focus:border-[#1E3A8A] focus:ring-1 focus:ring-[#1E3A8A] transition-all"
                        placeholder="Enter details..."
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-gray-500">
                        Phone Number
                      </label>
                      <input
                        name="phoneNumber"
                        type="tel"
                        required
                        className="w-full bg-[#FAFAFA] border border-gray-200 rounded-md px-4 py-3 text-[#0B1A2E] focus:outline-none focus:border-[#1E3A8A] focus:ring-1 focus:ring-[#1E3A8A] transition-all"
                        placeholder="+91..."
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-gray-500">
                        Service Required
                      </label>
                      <select
                        name="serviceRequired"
                        required
                        className="w-full bg-[#FAFAFA] border border-gray-200 rounded-md px-4 py-3 text-gray-700 focus:outline-none focus:border-[#1E3A8A] focus:ring-1 focus:ring-[#1E3A8A] transition-all appearance-none"
                      >
                        <option value="">Select an option</option>
                        <option value="election">
                          Election Campaign Branding
                        </option>
                        <option value="reputation">
                          Reputation Management
                        </option>
                        <option value="social">Social Media Handling</option>
                        <option value="pr">General PR & Media</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-gray-500">
                        Message (Optional)
                      </label>
                      <textarea
                        name="message"
                        rows={4}
                        className="w-full bg-[#FAFAFA] border border-gray-200 rounded-md px-4 py-3 text-[#0B1A2E] focus:outline-none focus:border-[#1E3A8A] focus:ring-1 focus:ring-[#1E3A8A] transition-all resize-none"
                        placeholder="Briefly describe your objectives..."
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#0B1A2E] text-white font-bold uppercase tracking-wide py-4 rounded-md hover:bg-[#1E3A8A] transition-colors flex items-center justify-center gap-2 group shadow-md disabled:bg-opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSubmitting
                        ? "Submitting..."
                        : "Submit Confidential Request"}
                      <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 w-full h-[400px] rounded-xl overflow-hidden border border-gray-200 relative bg-white p-2 shadow-sm"
        >
          <iframe
            src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=Senior%20Secondary%20School,%20Sanoth%20village,%20Ghoga%20Narela%20Delhi+(Hawk%20Strategies)&t=&z=14&ie=UTF8&iwloc=B&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0, borderRadius: "0.5rem" }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="filter grayscale opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
}
