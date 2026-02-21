'use client';

import { useState, useEffect } from 'react';
import { FaInstagram, FaWhatsapp, FaSun, FaMoon } from 'react-icons/fa';
import Script from 'next/script';

// Mock menu data (preload 6 items)
const menuItems = [
  { id: 1, name: 'Artisan Blend', price: 45000, description: 'Campuran biji terbaik dari Sumatra dan Ethiopia', priority: true },
  { id: 2, name: 'Espresso Ritual', price: 38000, description: 'Single origin biji Colombia dengan foam lembut', priority: true },
  { id: 3, name: 'Cold Brew Reserve', price: 42000, description: 'Proses 12 jam untuk cita rasa terdalam', priority: true },
  { id: 4, name: 'Latte Artisan', price: 52000, description: 'Steamed milk premium dengan latte art eksklusif', priority: true },
  { id: 5, name: 'Pour Over Single Origin', price: 48000, description: 'Metode manual untuk cita rasa murni', priority: true },
  { id: 6, name: 'Turmeric Latte', price: 46000, description: 'Alternatif sehat dengan rempah kunyit', priority: true },
  { id: 7, name: 'Mocha Truffle', price: 55000, description: 'Paduan coklat premium dan espresso', priority: false },
  { id: 8, name: 'Affogato', price: 50000, description: 'Es krim vanilla dengan sentuhan espresso', priority: false },
];

export default function HomePage() {
  const [darkMode, setDarkMode] = useState(true);
  const [bookingDate, setBookingDate] = useState('');
  const [bookingTime, setBookingTime] = useState('');
  const [bookingName, setBookingName] = useState('');
  const [bookingEmail, setBookingEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showBookingSuccess, setShowBookingSuccess] = useState(false);

  useEffect(() => {
    // Check system preference or saved preference
    const savedPreference = localStorage.getItem('theme');
    if (savedPreference) {
      setDarkMode(savedPreference === 'dark');
    } else {
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setDarkMode(systemPrefersDark);
    }
    
    // Smart sunset mode (simplified)
    const hour = new Date().getHours();
    if (hour >= 18 || hour <= 6) {
      setDarkMode(true);
    }
  }, []);

  const toggleTheme = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem('theme', newMode ? 'dark' : 'light');
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setShowBookingSuccess(true);
    setBookingDate('');
    setBookingTime('');
    setBookingName('');
    setBookingEmail('');
    
    // Hide success message after 5 seconds
    setTimeout(() => setShowBookingSuccess(false), 5000);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-[#0D0B0A] text-[#E8C9A9]' : 'bg-[#E8C9A9] text-[#0D0B0A]'}`}>  
      {/* Google Analytics */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`}
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {
          `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XXXXXXXXXX');
          `
        }
      </Script>

      {/* Header */}
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 rounded-full bg-[#C76B4C]"></div>
          <h1 className="text-2xl font-bold">Kalobtand X Coffee</h1>
        </div>
        
        <div className="flex items-center space-x-4">
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full bg-[#1A1816] hover:bg-[#C76B4C] transition-colors"
            aria-label="Toggle theme"
          >
            {darkMode ? <FaSun className="text-[#4D83FF]" /> : <FaMoon className="text-[#4D83FF]" />}
          </button>
                    <div className="flex space-x-3">
            <a href="https://instagram.com/kalobtandxcoffee" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-[#1A1816] hover:bg-[#C76B4C] transition-colors">
              <FaInstagram className="text-[#4D83FF]" />
            </a>
            <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-[#1A1816] hover:bg-[#C76B4C] transition-colors">
              <FaWhatsapp className="text-[#4D83FF]" />
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 md:py-24 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Tempat di mana waktu <span className="text-[#C76B4C]">melambat</span>,<br />
          ide <span className="text-[#4D83FF]">mengalir</span>, dan setiap cangkir<br />
          diperlakukan seperti <span className="text-[#E8C9A9]">karya seni</span>.
        </h1>
        <p className="text-xl max-w-2xl mx-auto mt-6">
          Destinasi kopi artisanal untuk para profesional urban yang menghargai kualitas dan ketenangan.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-[#C76B4C] hover:bg-[#a5583e] text-white font-semibold py-3 px-8 rounded-lg transition-transform hover:scale-105">
            Lihat Menu
          </button>
          <button 
            onClick={() => document.getElementById('booking-section')?.scrollIntoView({ behavior: 'smooth' })}
            className="border-2 border-[#4D83FF] text-[#4D83FF] hover:bg-[#4D83FF] hover:text-white font-semibold py-3 px-8 rounded-lg transition-colors"
          >
            Pesan Tempat
          </button>
        </div>
      </section>

      {/* Menu Section */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-12">Our Artisan Collection</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {menuItems.map((item) => (
            <div 
              key={item.id} 
              className={`rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                darkMode ? 'bg-[#1A1816]' : 'bg-[#f0e6db]'
              }`}
            >
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-48" />
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-bold">{item.name}</h3>
                  <span className="text-[#C76B4C] font-bold">Rp{item.price.toLocaleString()}</span>                </div>
                <p className="mt-2 opacity-80">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking-section" className="container mx-auto px-4 py-12">
        <div className={`max-w-3xl mx-auto rounded-2xl p-8 ${darkMode ? 'bg-[#1A1816]' : 'bg-[#f0e6db]'}`}> 
          <h2 className="text-3xl font-bold text-center mb-8">Reservasi Pengalaman Anda</h2>
          
          {showBookingSuccess && (
            <div className="mb-6 p-4 bg-green-800 text-white rounded-lg">
              Terima kasih! Kami telah menerima reservasi Anda. Tim kami akan segera menghubungi Anda.
            </div>
          )}
          
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block mb-2">Nama Lengkap</label>
                <input
                  type="text"
                  id="name"
                  value={bookingName}
                  onChange={(e) => setBookingName(e.target.value)}
                  required
                  className={`w-full p-3 rounded-lg ${
                    darkMode ? 'bg-[#0D0B0A] border-[#4D83FF]' : 'bg-white border-gray-300'
                  } border`}
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  value={bookingEmail}
                  onChange={(e) => setBookingEmail(e.target.value)}
                  required
                  className={`w-full p-3 rounded-lg ${
                    darkMode ? 'bg-[#0D0B0A] border-[#4D83FF]' : 'bg-white border-gray-300'
                  } border`}
                />
              </div>
              <div>
                <label htmlFor="date" className="block mb-2">Tanggal</label>
                <input                  type="date"
                  id="date"
                  value={bookingDate}
                  onChange={(e) => setBookingDate(e.target.value)}
                  required
                  className={`w-full p-3 rounded-lg ${
                    darkMode ? 'bg-[#0D0B0A] border-[#4D83FF]' : 'bg-white border-gray-300'
                  } border`}
                />
              </div>
              <div>
                <label htmlFor="time" className="block mb-2">Waktu</label>
                <select
                  id="time"
                  value={bookingTime}
                  onChange={(e) => setBookingTime(e.target.value)}
                  required
                  className={`w-full p-3 rounded-lg ${
                    darkMode ? 'bg-[#0D0B0A] border-[#4D83FF]' : 'bg-white border-gray-300'
                  } border`}
                >
                  <option value="">Pilih waktu</option>
                  <option value="08:00">08:00</option>
                  <option value="09:00">09:00</option>
                  <option value="10:00">10:00</option>
                  <option value="11:00">11:00</option>
                  <option value="12:00">12:00</option>
                  <option value="13:00">13:00</option>
                  <option value="14:00">14:00</option>
                  <option value="15:00">15:00</option>
                  <option value="16:00">16:00</option>
                  <option value="17:00">17:00</option>
                  <option value="18:00">18:00</option>
                  <option value="19:00">19:00</option>
                  <option value="20:00">20:00</option>
                  <option value="21:00">21:00</option>
                </select>
              </div>
            </div>
            
            <div className="g-recaptcha mb-6" data-sitekey="YOUR_RECAPTCHA_SITE_KEY"></div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-4 rounded-lg font-bold transition-colors ${
                isSubmitting 
                  ? 'bg-gray-500 cursor-not-allowed' 
                  : 'bg-[#C76B4C] hover:bg-[#a5583e]'
              }`}            >
              {isSubmitting ? 'Memproses...' : 'Pesan Sekarang'}
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-[#C76B4C]"></div>
              <h3 className="text-xl font-bold">Kalobtand X Coffee</h3>
            </div>
            <p className="mt-2 opacity-75">Luxury sensory destination</p>
          </div>
          
          <div className="flex space-x-4">
            <a href="https://instagram.com/kalobtandxcoffee" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-[#1A1816] hover:bg-[#C76B4C] transition-colors">
              <FaInstagram className="text-[#4D83FF]" />
            </a>
            <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-[#1A1816] hover:bg-[#C76B4C] transition-colors">
              <FaWhatsapp className="text-[#4D83FF]" />
            </a>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-opacity-20 text-center">
          <p>© {new Date().getFullYear()} Kalobtand X Coffee. All rights reserved.</p>
          <p className="mt-2 text-sm opacity-75">Demo by Kalobtand X Web Studio</p>
        </div>
        
        <div className="mt-8 overflow-hidden whitespace-nowrap">
          <div className="animate-marquee inline-flex">
            <span className="mx-4">Supported by: Kalobtand X Group</span>
            <span className="mx-4">Kalobtand X Digital</span>
            <span className="mx-4">Kalobtand X Clipper</span>
            <span className="mx-4">Aurex Studio</span>
            <span className="mx-4">Kalobtand X Group</span>
            <span className="mx-4">Kalobtand X Digital</span>
            <span className="mx-4">Kalobtand X Clipper</span>
            <span className="mx-4">Aurex Studio</span>
          </div>
        </div>
      </footer>

      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(100%); }          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
        .g-recaptcha {
          display: flex;
          justify-content: center;
        }
      `}</style>
    </div>
  );
}