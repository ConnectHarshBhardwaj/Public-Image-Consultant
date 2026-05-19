"use client";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const faqs = [
  {
    question:
      "Do you handle independent candidates as well as national parties?",
    answer:
      "Yes. Our strategies scale from local corporator/MLA elections targeting a few lakh voters, directly up to national-level campaigns for MPs and CM prospective candidates.",
  },
  {
    question: "How do you ensure data security and confidentiality?",
    answer:
      "Given the sensitive nature of political strategy, we operate under strict NDA protocols. Data silos, encrypted comms, and compartmentalized war rooms ensure 100% leak-proof operations.",
  },
  {
    question:
      "What makes digital warfare different from regular digital marketing?",
    answer:
      "Digital marketing sells a product. Digital warfare shifts voter psychology. We operate on sentiment manipulation, trend jacking, opposition research deployment, and algorithmic dominance across local WhatsApp clusters and national Twitter trends.",
  },
  {
    question: "How long before an election should a war room be set up?",
    answer:
      "Ideally, major campaigns begin 12-18 months prior to polling day. However, our rapid-response teams can execute aggressive 3-month turnaround strategies for surprise elections or crisis situations.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black font-heading text-[#0B1A2E] mb-4 uppercase tracking-tight">
            Intelligence <span className="text-[#1E3A8A]">FAQ</span>
          </h2>
          <p className="text-gray-500">
            Common questions about our operational capabilities.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`border border-gray-200 rounded-xl overflow-hidden transition-all duration-300 ${openIndex === index ? "shadow-lg border-[#1E3A8A]/30 bg-gray-50" : "bg-white hover:border-gray-300"}`}
            >
              <button
                onClick={() => setOpenIndex(index === openIndex ? null : index)}
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none focus:ring-0"
              >
                <span
                  className={`font-bold font-heading text-lg ${openIndex === index ? "text-[#1E3A8A]" : "text-[#0B1A2E]"}`}
                >
                  {faq.question}
                </span>
                <span className="flex-shrink-0 ml-4 text-gray-400">
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 text-[#1E3A8A]" />
                  ) : (
                    <Plus className="w-5 h-5" />
                  )}
                </span>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
