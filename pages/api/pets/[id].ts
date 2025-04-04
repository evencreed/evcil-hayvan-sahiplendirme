import { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '@/lib/supabase';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query;

  if (!id || typeof id !== 'string') {
    return res.status(400).json({ error: 'Geçersiz ID' });
  }

  switch (req.method) {
    case 'GET':
      try {
        const { data, error } = await supabase
          .from('pets')
          .select('*')
          .eq('id', id)
          .single();

        if (error) throw error;
        if (!data) {
          return res.status(404).json({ error: 'Evcil hayvan bulunamadı' });
        }

        return res.status(200).json(data);
      } catch (error: any) {
        console.error('Error fetching pet:', error);
        return res.status(500).json({
          error: error.message || 'Evcil hayvan getirilirken bir hata oluştu'
        });
      }

    case 'PUT':
      try {
        const petData = req.body;
        
        const { data, error } = await supabase
          .from('pets')
          .update({
            ...petData,
            updated_at: new Date().toISOString()
          })
          .eq('id', id)
          .select();

        if (error) throw error;

        return res.status(200).json(data[0]);
      } catch (error: any) {
        console.error('Error updating pet:', error);
        return res.status(500).json({
          error: error.message || 'Evcil hayvan güncellenirken bir hata oluştu'
        });
      }

    case 'DELETE':
      try {
        const { error } = await supabase
          .from('pets')
          .delete()
          .eq('id', id);

        if (error) throw error;

        return res.status(200).json({ message: 'Evcil hayvan başarıyla silindi' });
      } catch (error: any) {
        console.error('Error deleting pet:', error);
        return res.status(500).json({
          error: error.message || 'Evcil hayvan silinirken bir hata oluştu'
        });
      }

    default:
      res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
      return res.status(405).json({ error: `Method ${req.method} not allowed` });
  }
} 