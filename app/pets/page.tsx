'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Pet {
  id: string;
  name: string;
  type: string;
  breed: string;
  age: string;
  location: string;
  image: string;
}

export default function Pets() {
  const [pets, setPets] = useState<Pet[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const response = await fetch('/api/pets');
        if (!response.ok) {
          throw new Error('Evcil hayvanlar yüklenirken bir hata oluştu');
        }
        const data = await response.json();
        setPets(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Bir hata oluştu');
      } finally {
        setLoading(false);
      }
    };

    fetchPets();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#FFF9F5] flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#FF8A5C] mx-auto"></div>
          <p className="mt-4 text-[#2C1810]">Yükleniyor...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-[#FFF9F5] flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-500 mb-4">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="bg-[#FF8A5C] text-white px-6 py-2 rounded-lg hover:bg-[#FF6B3D] transition-colors"
          >
            Yeniden Dene
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FFF9F5] py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-[#2C1810] mb-8 text-center">Evcil Hayvanlarımız</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pets.map((pet) => (
            <Link href={`/pets/${pet.id}`} key={pet.id}>
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="relative h-64">
                  <Image
                    src={pet.image}
                    alt={pet.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-semibold text-[#2C1810] mb-2">{pet.name}</h2>
                  <div className="space-y-2">
                    <p className="text-[#2C1810]">
                      <span className="font-semibold">Tür:</span> {pet.type}
                    </p>
                    <p className="text-[#2C1810]">
                      <span className="font-semibold">Cins:</span> {pet.breed}
                    </p>
                    <p className="text-[#2C1810]">
                      <span className="font-semibold">Yaş:</span> {pet.age}
                    </p>
                    <p className="text-[#2C1810]">
                      <span className="font-semibold">Konum:</span> {pet.location}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
} 