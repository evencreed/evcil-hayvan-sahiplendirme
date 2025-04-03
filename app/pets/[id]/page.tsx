'use client';

import React from 'react';
import Image from 'next/image';
import { useParams } from 'next/navigation';

// Örnek evcil hayvan verisi
const petData = {
  '1': {
    name: 'Max',
    type: 'Köpek',
    breed: 'Golden Retriever',
    age: '2 yaş',
    gender: 'Erkek',
    location: 'İstanbul',
    description: 'Max, enerjik ve sevecen bir Golden Retriever. Çocuklarla çok iyi anlaşıyor ve eğitimli.',
    image: '/pets/dog1.jpg'
  },
  '2': {
    name: 'Luna',
    type: 'Kedi',
    breed: 'British Shorthair',
    age: '1.5 yaş',
    gender: 'Dişi',
    location: 'Ankara',
    description: 'Luna, sakin ve sevecen bir British Shorthair. Ev yaşamına çok uyumlu ve bağımsız.',
    image: '/pets/cat1.jpg'
  }
};

export default function PetDetail() {
  const params = useParams();
  const petId = params.id as string;
  const pet = petData[petId as keyof typeof petData];

  if (!pet) {
    return (
      <div className="min-h-screen bg-[#FFF9F5] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#2C1810] mb-4">Evcil Hayvan Bulunamadı</h1>
          <p className="text-[#2C1810]">Aradığınız evcil hayvan bulunamadı.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FFF9F5] py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="relative h-[500px] rounded-lg overflow-hidden">
            <Image
              src={pet.image}
              alt={pet.name}
              fill
              className="object-cover"
            />
          </div>
          
          <div>
            <h1 className="text-4xl font-bold text-[#2C1810] mb-4">{pet.name}</h1>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-[#FFE4D6] flex items-center justify-center mr-4">
                  <span className="text-[#FF8A5C]">🐾</span>
                </div>
                <div>
                  <h3 className="font-semibold text-[#2C1810]">Tür</h3>
                  <p className="text-[#2C1810]">{pet.type}</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-[#FFE4D6] flex items-center justify-center mr-4">
                  <span className="text-[#FF8A5C]">🏷️</span>
                </div>
                <div>
                  <h3 className="font-semibold text-[#2C1810]">Cins</h3>
                  <p className="text-[#2C1810]">{pet.breed}</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-[#FFE4D6] flex items-center justify-center mr-4">
                  <span className="text-[#FF8A5C]">🎂</span>
                </div>
                <div>
                  <h3 className="font-semibold text-[#2C1810]">Yaş</h3>
                  <p className="text-[#2C1810]">{pet.age}</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-[#FFE4D6] flex items-center justify-center mr-4">
                  <span className="text-[#FF8A5C]">👫</span>
                </div>
                <div>
                  <h3 className="font-semibold text-[#2C1810]">Cinsiyet</h3>
                  <p className="text-[#2C1810]">{pet.gender}</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-[#FFE4D6] flex items-center justify-center mr-4">
                  <span className="text-[#FF8A5C]">📍</span>
                </div>
                <div>
                  <h3 className="font-semibold text-[#2C1810]">Konum</h3>
                  <p className="text-[#2C1810]">{pet.location}</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h2 className="text-2xl font-semibold text-[#2C1810] mb-4">Hakkında</h2>
              <p className="text-[#2C1810]">{pet.description}</p>
            </div>
            
            <button className="mt-8 w-full bg-[#FF8A5C] text-white py-3 rounded-lg font-semibold hover:bg-[#FF6B3D] transition-colors">
              Sahiplenmek İstiyorum
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 