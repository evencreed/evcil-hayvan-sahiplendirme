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

// GET /api/pets/[id] - Belirli bir evcil hayvanı getir
export async function GET(
  request: Request,
  context: { params: { id: string } }
) {
  const id = context.params.id;
  
  try {
    const { data, error } = await supabase
      .from('pets')
      .select('*')
      .eq('id', id)
      .single();

    if (error) throw error;
    if (!data) {
      return NextResponse.json(
        { error: 'Evcil hayvan bulunamadı' },
        { status: 404 }
      );
    }

    return NextResponse.json(data);
  } catch (error: any) {
    console.error('Error fetching pet:', error);
    return NextResponse.json(
      { error: error.message || 'Evcil hayvan getirilirken bir hata oluştu' },
      { status: 500 }
    );
  }
}

// PUT /api/pets/[id] - Evcil hayvan bilgilerini güncelle
export async function PUT(
  request: Request,
  context: { params: { id: string } }
) {
  const id = context.params.id;
  
  try {
    const petData = await request.json();
    
    const { data, error } = await supabase
      .from('pets')
      .update({
        ...petData,
        updated_at: new Date().toISOString()
      })
      .eq('id', id)
      .select();

    if (error) throw error;

    return NextResponse.json(data[0]);
  } catch (error: any) {
    console.error('Error updating pet:', error);
    return NextResponse.json(
      { error: error.message || 'Evcil hayvan güncellenirken bir hata oluştu' },
      { status: 500 }
    );
  }
}

// DELETE /api/pets/[id] - Evcil hayvanı sil
export async function DELETE(
  request: Request,
  context: { params: { id: string } }
) {
  const id = context.params.id;
  
  try {
    const { error } = await supabase
      .from('pets')
      .delete()
      .eq('id', id);

    if (error) throw error;

    return NextResponse.json(
      { message: 'Evcil hayvan başarıyla silindi' },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Error deleting pet:', error);
    return NextResponse.json(
      { error: error.message || 'Evcil hayvan silinirken bir hata oluştu' },
      { status: 500 }
    );
  }
} 