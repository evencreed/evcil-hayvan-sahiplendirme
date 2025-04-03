'use client';

import React from 'react';
import Image from 'next/image';

export default function About() {
  return (
    <div className="min-h-screen bg-[#FFF9F5] py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-[#2C1810] mb-8 text-center">Hakkımızda</h1>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src="/pets/evcil-hayvan.jpg"
              alt="Bizim Hikayemiz"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-[#2C1810] mb-4">Bizim Hikayemiz</h2>
            <p className="text-[#2C1810] mb-4">
              2024 yılında kurulan Evcil Hayvan Sahiplendirme Platformu, evcil hayvanların güvenli ve sevgi dolu yuvalara kavuşmasını sağlamak amacıyla yola çıktı.
            </p>
            <p className="text-[#2C1810] mb-4">
              Amacımız, evcil hayvanların hak ettiği sevgi ve ilgiyi bulabilecekleri ailelere kavuşmasını sağlamak ve hayvan sahiplenme sürecini güvenli ve şeffaf bir şekilde yönetmektir.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-[#2C1810] mb-4">Misyonumuz</h3>
            <p className="text-[#2C1810]">
              Evcil hayvanların güvenli ve sevgi dolu yuvalara kavuşmasını sağlamak, sahiplenme sürecini şeffaf ve güvenli hale getirmek.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-[#2C1810] mb-4">Vizyonumuz</h3>
            <p className="text-[#2C1810]">
              Türkiye'nin en güvenilir evcil hayvan sahiplendirme platformu olmak ve her evcil hayvanın hak ettiği sevgiyi bulmasını sağlamak.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-[#2C1810] mb-4">Değerlerimiz</h3>
            <p className="text-[#2C1810]">
              Şeffaflık, güvenilirlik, sevgi ve sorumluluk. Her evcil hayvanın hak ettiği sevgiyi bulması için çalışıyoruz.
            </p>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-semibold text-[#2C1810] mb-8">Ekibimiz</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((member) => (
              <div key={member} className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-[#FFE4D6] flex items-center justify-center">
                  <span className="text-4xl text-[#FF8A5C]">👤</span>
                </div>
                <h3 className="text-xl font-semibold text-[#2C1810] mb-2">Ekip Üyesi {member}</h3>
                <p className="text-[#2C1810]">Görev Tanımı</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 