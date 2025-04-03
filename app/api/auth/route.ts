import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

// Örnek kullanıcı verisi
const users = [
  {
    id: '1',
    email: 'test@example.com',
    password: 'password123', // Gerçek uygulamada hash'lenmiş olmalı
    name: 'Test User'
  }
];

// POST /api/auth/login - Kullanıcı girişi
export async function POST(request: Request) {
  try {
    const { email, password, action } = await request.json();
    
    if (action === 'login') {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
      });

      if (error) throw error;

      return NextResponse.json({
        user: {
          id: data.user.id,
          email: data.user.email,
          name: data.user.user_metadata?.name
        }
      });
    } else if (action === 'register') {
      const { data, error } = await supabase.auth.signUp({
        email,
        password
      });

      if (error) throw error;

      return NextResponse.json({
        user: {
          id: data.user?.id,
          email: data.user?.email,
          name: data.user?.user_metadata?.name
        }
      }, { status: 201 });
    } else {
      return NextResponse.json(
        { error: 'Geçersiz işlem' },
        { status: 400 }
      );
    }
  } catch (error: any) {
    console.error('Auth error:', error);
    return NextResponse.json(
      { error: error.message || 'Kimlik doğrulama hatası' },
      { status: 401 }
    );
  }
} 