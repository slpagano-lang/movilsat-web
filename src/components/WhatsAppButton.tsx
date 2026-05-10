import { useState } from 'react';

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-end gap-3">
      {/* Tooltip */}
      <div
        className={`transition-all duration-300 ${
          showTooltip ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'
        }`}
      >
        <div className="bg-white rounded-lg shadow-lg px-4 py-2.5 text-sm font-medium text-navy-900 whitespace-nowrap">
          Atención 24/7 por WhatsApp
          <div className="absolute right-[-6px] top-1/2 -translate-y-1/2 w-3 h-3 bg-white rotate-45" />
        </div>
      </div>

      {/* Button */}
      <a
        href="https://wa.me/5491112345678?text=Hola%2C%20necesito%20atencion%2024%2F7"
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="flex items-center justify-center w-[60px] h-[60px] rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
        style={{ backgroundColor: '#25D366', padding: '12px' }}
        aria-label="Contactar por WhatsApp"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          fill="white"
          style={{ width: '28px', height: '28px' }}
        >
          <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32 101.5 32 1.9 131.6 1.9 254c0 42.3 11 83.5 32 119.9L0 480l109.2-28.6c34.8 18.9 74.3 28.6 114.8 28.6h.1c122.3 0 222-99.6 222-222 0-59.3-25.2-115-67.1-156.9zM223.9 419.6c-35.7 0-70.5-9.6-100.8-27.6l-7.2-4.3-74.7 19.6 19.9-72.9-4.7-7.5c-19.8-31.5-30.2-68.2-30.2-105.9 0-108.3 88.2-196.4 196.6-196.4 52.5 0 102 20.5 139.3 57.7 37.2 37.3 57.7 86.8 57.7 139.3-.1 108.4-88.3 196.5-196.7 196.5zm108-147.5c-5.9-3-35-17.3-40.5-19.2-5.5-2-9.5-3-13.5 3-4 5.9-15.4 19.2-18.9 23.1-3.5 4-6.9 4.5-12.8 1.5-5.9-3-24.9-9.2-47.5-29.3-17.6-15.7-29.5-35-33-40.9-3.5-6-.4-9.2 2.6-12.2 2.7-2.7 5.9-6.9 8.9-10.5 3-3.5 4-6 6.5-10 2.5-4 1.2-7.5-.5-10.5-1.8-3-13.5-32.5-18.4-44.5-4.9-11.7-9.8-10.2-13.5-10.4-3.5-.2-7.5-.2-11.5-.2-4 0-10.5 1.5-16 7.5-5.5 6-21 20.5-21 50s21.5 58 24.5 62c3 4 42.5 64.9 103 90.9 14.4 6.2 25.6 9.9 34.4 12.7 14.4 4.6 27.6 3.9 38 2.4 11.6-1.7 35-14.3 39.9-28.1 5-13.8 5-25.6 3.5-28.1-1.5-2.5-5.5-4-11.5-7z" />
        </svg>
      </a>
    </div>
  );
}
