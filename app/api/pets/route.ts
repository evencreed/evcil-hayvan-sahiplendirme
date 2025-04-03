import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

// Örnek veri
const pets = [
  {
    id: '1',
    name: 'Max',
    type: 'Köpek',
    breed: 'Golden Retriever',
    age: '2 yaş',
    gender: 'Erkek',
    location: 'İstanbul',
    description: 'Max, enerjik ve sevecen bir Golden Retriever. Çocuklarla çok iyi anlaşıyor ve eğitimli.',
    image: '/pets/dog1.jpg'
  },
  {
    id: '2',
    name: 'Luna',
    type: 'Kedi',
    breed: 'British Shorthair',
    age: '1.5 yaş',
    gender: 'Dişi',
    location: 'Ankara',
    description: 'Luna, sakin ve sevecen bir British Shorthair. Ev yaşamına çok uyumlu ve bağımsız.',
    image: '/pets/cat1.jpg'
  }
];

// GET /api/pets - Tüm evcil hayvanları getir veya türe göre filtrele
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const type = searchParams.get('type');

    let query = supabase
      .from('pets')
      .select('*');

    if (type) {
      query = query.eq('type', type);
    }

    const { data, error } = await query;

    if (error) throw error;

    return NextResponse.json(data);
  } catch (error: any) {
    console.error('Error fetching pets:', error);
    return NextResponse.json(
      { error: error.message || 'Evcil hayvanlar getirilirken bir hata oluştu' },
      { status: 500 }
    );
  }
}

// POST /api/pets - Yeni evcil hayvan ekle
export async function POST(request: Request) {
  try {
    const petData = await request.json();
    
    const { data, error } = await supabase
      .from('pets')
      .insert([{
        ...petData,
        created_at: new Date().toISOString()
      }])
      .select();

    if (error) throw error;

    return NextResponse.json(data[0], { status: 201 });
  } catch (error: any) {
    console.error('Error adding pet:', error);
    return NextResponse.json(
      { error: error.message || 'Evcil hayvan eklenirken bir hata oluştu' },
      { status: 500 }
    );
  }
} 