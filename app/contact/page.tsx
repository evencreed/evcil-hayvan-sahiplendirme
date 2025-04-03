'use client';

import React from 'react';

export default function Contact() {
  return (
    <div className="min-h-screen bg-[#FFF9F5] py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-[#2C1810] mb-8 text-center">İletişim</h1>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold text-[#2C1810] mb-6">Bize Ulaşın</h2>
            <p className="text-[#2C1810] mb-6">
              Sorularınız, önerileriniz veya iş birliği talepleriniz için bize ulaşabilirsiniz.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-[#FFE4D6] flex items-center justify-center mr-4">
                  <span className="text-[#FF8A5C]">📧</span>
                </div>
                <div>
                  <h3 className="font-semibold text-[#2C1810]">E-posta</h3>
                  <p className="text-[#2C1810]">info@evcilhayvan.com</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-[#FFE4D6] flex items-center justify-center mr-4">
                  <span className="text-[#FF8A5C]">📱</span>
                </div>
                <div>
                  <h3 className="font-semibold text-[#2C1810]">Telefon</h3>
                  <p className="text-[#2C1810]">+90 555 123 4567</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-[#FFE4D6] flex items-center justify-center mr-4">
                  <span className="text-[#FF8A5C]">📍</span>
                </div>
                <div>
                  <h3 className="font-semibold text-[#2C1810]">Adres</h3>
                  <p className="text-[#2C1810]">İstanbul, Türkiye</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-[#2C1810] mb-6">İletişim Formu</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-[#2C1810] mb-2">Adınız Soyadınız</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 rounded-lg border border-[#FFB38A] focus:border-[#FF8A5C] focus:ring-2 focus:ring-[#FF8A5C]"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-[#2C1810] mb-2">E-posta Adresiniz</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 rounded-lg border border-[#FFB38A] focus:border-[#FF8A5C] focus:ring-2 focus:ring-[#FF8A5C]"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-[#2C1810] mb-2">Konu</label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-2 rounded-lg border border-[#FFB38A] focus:border-[#FF8A5C] focus:ring-2 focus:ring-[#FF8A5C]"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-[#2C1810] mb-2">Mesajınız</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg border border-[#FFB38A] focus:border-[#FF8A5C] focus:ring-2 focus:ring-[#FF8A5C]"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-[#FF8A5C] text-white py-3 rounded-lg font-semibold hover:bg-[#FF6B3D] transition-colors"
              >
                Gönder
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
} 