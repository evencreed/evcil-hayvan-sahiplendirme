'use client';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import Link from 'next/link';

// Marker ikonunu düzeltmek için
const icon = L.icon({
  iconUrl: '/marker-icon.png',
  iconRetinaUrl: '/marker-icon-2x.png',
  shadowUrl: '/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41]
});

// Örnek sahiplendirme noktaları
const adoptionPoints = [
  {
    id: 1,
    name: "İstanbul Barınağı",
    location: [41.0082, 28.9784],
    pets: ["Köpek", "Kedi"],
    address: "İstanbul, Türkiye",
    contact: "0212 123 45 67"
  },
  {
    id: 2,
    name: "Ankara Hayvan Barınağı",
    location: [39.9334, 32.8597],
    pets: ["Köpek", "Kedi", "Kuş"],
    address: "Ankara, Türkiye",
    contact: "0312 123 45 67"
  },
  {
    id: 3,
    name: "İzmir Hayvan Dostları",
    location: [38.4192, 27.1287],
    pets: ["Köpek", "Kedi", "Tavşan"],
    address: "İzmir, Türkiye",
    contact: "0232 123 45 67"
  }
];

export default function MapPage() {
  return (
    <div className="min-h-screen bg-[#FFF9F5]">
      {/* Navbar */}
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <span className="text-2xl font-bold text-[#FF8A5C]">Patili Dostlar</span>
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link
                href="/"
                className="text-[#2C1810] hover:text-[#FF8A5C] px-3 py-2 rounded-md text-sm font-medium"
              >
                Ana Sayfa
              </Link>
              <Link
                href="/map"
                className="text-[#2C1810] hover:text-[#FF8A5C] px-3 py-2 rounded-md text-sm font-medium"
              >
                Harita
              </Link>
              <Link
                href="/adopt"
                className="bg-[#FF8A5C] text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-[#FF6B3D] transition-colors"
              >
                Sahiplen
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-[#2C1810] mb-6">Sahiplendirme Noktaları</h1>
        <p className="text-gray-600 mb-8">
          Türkiye genelindeki hayvan barınakları ve sahiplendirme noktalarını haritada görebilirsiniz.
        </p>
        
        <div className="h-[600px] w-full rounded-xl overflow-hidden shadow-lg">
          <MapContainer
            center={[39.9334, 32.8597]} // Türkiye'nin merkezi
            zoom={6}
            style={{ height: "100%", width: "100%" }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {adoptionPoints.map((point) => (
              <Marker
                key={point.id}
                position={point.location as [number, number]}
                icon={icon}
              >
                <Popup>
                  <div className="p-2">
                    <h3 className="font-bold text-[#FF8A5C]">{point.name}</h3>
                    <p className="text-sm text-gray-600">{point.address}</p>
                    <p className="text-sm text-gray-600">Tel: {point.contact}</p>
                    <div className="mt-2">
                      <span className="text-sm font-medium">Mevcut Hayvanlar:</span>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {point.pets.map((pet, index) => (
                          <span
                            key={index}
                            className="bg-[#FFE4D6] text-[#FF8A5C] px-2 py-1 rounded-full text-xs"
                          >
                            {pet}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>
    </div>
  );
} 