'use client';

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

const petCategories = [
  { name: "Köpekler", icon: "🐕", count: 24 },
  { name: "Kediler", icon: "🐱", count: 18 },
  { name: "Kuşlar", icon: "🦜", count: 12 },
  { name: "Tavşanlar", icon: "🐰", count: 8 },
  { name: "Diğer", icon: "🦎", count: 15 },
];

const featuredPets = [
  {
    id: 1,
    name: "Max",
    type: "Köpek",
    breed: "Golden Retriever",
    age: "2 yaş",
    image: "/pets/dog1.jpg",
    location: "İstanbul",
  },
  {
    id: 2,
    name: "Luna",
    type: "Kedi",
    breed: "Siyam",
    age: "1 yaş",
    image: "/pets/cat1.jpg",
    location: "Ankara",
  },
  {
    id: 3,
    name: "Charlie",
    type: "Köpek",
    breed: "Alman Kurdu",
    age: "3 yaş",
    image: "/pets/dog1.jpg",
    location: "İzmir",
  },
];

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const createWaterDrop = (e: MouseEvent) => {
      const drop = document.createElement('div');
      drop.className = 'water-drop';
      const rect = hero.getBoundingClientRect();
      drop.style.left = `${e.clientX - rect.left}px`;
      drop.style.top = `${e.clientY - rect.top}px`;
      drop.style.width = `${Math.random() * 30 + 10}px`;
      drop.style.height = drop.style.width;
      hero.appendChild(drop);

      setTimeout(() => {
        drop.remove();
      }, 1000);
    };

    hero.addEventListener('mousemove', createWaterDrop);
    return () => {
      hero.removeEventListener('mousemove', createWaterDrop);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#FFF9F5]">
      {/* Navbar */}
      <nav className="bg-white shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold text-[#2C1810]">
                Evcil Hayvan
              </Link>
            </div>
            <div className="hidden md:flex space-x-8">
              <Link href="/" className="text-[#2C1810] hover:text-[#FF8A5C] transition-colors">
                Ana Sayfa
              </Link>
              <Link href="/pets" className="text-[#2C1810] hover:text-[#FF8A5C] transition-colors">
                Evcil Hayvanlar
              </Link>
              <Link href="/about" className="text-[#2C1810] hover:text-[#FF8A5C] transition-colors">
                Hakkımızda
              </Link>
              <Link href="/contact" className="text-[#2C1810] hover:text-[#FF8A5C] transition-colors">
                İletişim
              </Link>
              <Link href="/map" className="text-[#2C1810] hover:text-[#FF8A5C] transition-colors">
                Harita
              </Link>
              <Link href="/pets" className="bg-[#FF8A5C] text-white px-4 py-2 rounded-md hover:bg-[#FF6B3D] transition-colors">
                Sahiplen
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="hero-container relative h-[600px] flex items-center justify-center group"
      >
        {/* Arka plan resmi */}
        <div className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-80">
          <Image
            src="/pets/evcil-hayvan.jpg"
            alt="Evcil Hayvan Arka Plan"
            fill
            className="object-cover"
            priority
            quality={100}
          />
        </div>
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#FFE4D6]/80 via-[#FFD1B7]/80 to-[#FFB38A]/80 transition-opacity duration-300 group-hover:opacity-70" />
        <div className="relative z-10 text-center text-[#2C1810] px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">
            Yeni Bir Dost Edin
          </h1>
          <p className="text-xl md:text-2xl mb-8 drop-shadow-lg">
            Sevgi dolu bir yuvaya kavuşmayı bekleyen dostlarımız
          </p>
          <div className="max-w-2xl mx-auto backdrop-blur-sm bg-white/30 p-6 rounded-xl transition-all duration-300 group-hover:bg-white/40">
            <div className="flex flex-col md:flex-row gap-4">
              <select className="px-4 py-3 rounded-lg text-[#2C1810] bg-white/90 border border-[#FFB38A] focus:border-[#FF8A5C] focus:ring-2 focus:ring-[#FF8A5C]">
                <option value="">Evcil Hayvan Türü Seçin</option>
                {petCategories.map((category) => (
                  <option key={category.name} value={category.name}>
                    {category.name}
                  </option>
                ))}
              </select>
              <input
                type="text"
                placeholder="Şehir girin"
                className="px-4 py-3 rounded-lg text-[#2C1810] bg-white/90 border border-[#FFB38A] focus:border-[#FF8A5C] focus:ring-2 focus:ring-[#FF8A5C]"
              />
              <Link href="/pets">
                <button className="bg-[#FF8A5C] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#FF6B3D] transition-colors shadow-md hover:shadow-lg">
                  Ara
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pet Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#2C1810] mb-8 text-center">Evcil Hayvan Kategorileri</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {petCategories.map((category) => (
              <Link href={`/pets?type=${category.name.toLowerCase()}`} key={category.name}>
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer">
                  <div className="w-16 h-16 bg-[#FFE4D6] rounded-full flex items-center justify-center mb-4">
                    <span className="text-3xl">{category.icon}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-[#2C1810] mb-2">{category.name}</h3>
                  <p className="text-[#2C1810]">{category.count} dost</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Pets */}
      <section className="py-16 bg-[#FFE4D6]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#2C1810] mb-8 text-center">Öne Çıkan Evcil Hayvanlar</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPets.map((pet) => (
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
                    <h3 className="text-xl font-semibold text-[#2C1810] mb-2">{pet.name}</h3>
                    <p className="text-[#2C1810] mb-4">{pet.breed} • {pet.age} • {pet.location}</p>
                    <button className="bg-[#FF8A5C] text-white px-6 py-2 rounded-lg hover:bg-[#FF6B3D] transition-colors">
                      Detayları Gör
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[#2C1810] mb-4">Bir Evcil Hayvan Sahiplenin</h2>
          <p className="text-[#2C1810] mb-8 max-w-2xl mx-auto">
            Sevgi dolu bir yuvaya kavuşmayı bekleyen dostlarımız için siz de bir fark yaratabilirsiniz.
          </p>
          <Link href="/pets">
            <button className="bg-[#FF8A5C] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#FF6B3D] transition-colors">
              Evcil Hayvanları Keşfet
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
