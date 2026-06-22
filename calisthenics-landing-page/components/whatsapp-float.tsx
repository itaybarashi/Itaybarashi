"use client"

import { motion } from "framer-motion"
import { WHATSAPP_LINK } from "@/lib/site-data"

function WhatsappIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.97L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 1.82c2.18 0 4.22.85 5.76 2.39a8.06 8.06 0 0 1 2.39 5.76c0 4.49-3.66 8.13-8.16 8.13a8.1 8.1 0 0 1-4.13-1.13l-.3-.18-3.06.8.82-2.98-.19-.31a8.07 8.07 0 0 1-1.25-4.32c0-4.49 3.65-8.13 8.14-8.13Zm-2.4 4.27c-.18 0-.47.07-.72.34-.25.27-.95.93-.95 2.26 0 1.33.97 2.62 1.1 2.8.14.18 1.91 2.92 4.63 3.99.65.25 1.15.4 1.54.51.65.21 1.24.18 1.71.11.52-.08 1.6-.65 1.83-1.28.23-.63.23-1.18.16-1.29-.07-.11-.25-.18-.52-.32-.27-.13-1.6-.79-1.85-.88-.25-.09-.43-.13-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.14-.42-2.17-1.34-.8-.72-1.34-1.6-1.5-1.87-.16-.27-.02-.42.12-.55.12-.12.27-.32.41-.48.13-.16.18-.27.27-.45.09-.18.04-.34-.02-.48-.07-.14-.6-1.47-.83-2.01-.22-.53-.44-.46-.61-.46l-.52-.01Z" />
    </svg>
  )
}

export function WhatsappFloat() {
  return (
    <motion.a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.6, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      aria-label="פתחו צ׳אט וואטסאפ"
      className="fixed bottom-5 left-5 z-50 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-bold text-black shadow-[0_8px_30px_rgba(37,211,102,0.35)]"
    >
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366] opacity-30" />
      <WhatsappIcon className="size-6" />
      <span className="hidden sm:inline">דברו איתי</span>
    </motion.a>
  )
}

export { WhatsappIcon }
