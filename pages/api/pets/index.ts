import { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '@/lib/supabase';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case 'GET':
      try {
        const { type } = req.query;
        let query = supabase.from('pets').select('*');

        if (type && typeof type === 'string') {
          query = query.eq('type', type);
        }

        const { data, error } = await query;

        if (error) throw error;

        return res.status(200).json(data);
      } catch (error: any) {
        console.error('Error fetching pets:', error);
        return res.status(500).json({
          error: error.message || 'Evcil hayvanlar getirilirken bir hata oluştu'
        });
      }

    case 'POST':
      try {
        const petData = req.body;
        
        const { data, error } = await supabase
          .from('pets')
          .insert({
            ...petData,
            created_at: new Date().toISOString()
          })
          .select();

        if (error) throw error;

        return res.status(201).json(data[0]);
      } catch (error: any) {
        console.error('Error creating pet:', error);
        return res.status(500).json({
          error: error.message || 'Evcil hayvan oluşturulurken bir hata oluştu'
        });
      }

    default:
      res.setHeader('Allow', ['GET', 'POST']);
      return res.status(405).json({ error: `Method ${req.method} not allowed` });
  }
} 