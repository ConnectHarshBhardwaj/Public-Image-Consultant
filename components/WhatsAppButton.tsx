import { MessageCircle } from 'lucide-react';
import Link from 'next/link';

export function WhatsAppButton() {
  return (
    <Link 
      href="https://wa.me/919310868777?text=Hi! I am looking to invest/buy property in Narela." 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 md:bottom-8 md:right-8 bg-[#d4af37] text-[#0F172A] p-4 rounded-full shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:bg-[#fbd34d] hover:scale-110 transition-all z-50 flex items-center justify-center animate-bounce-slow"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-8 h-8" />
    </Link>
  );
}
