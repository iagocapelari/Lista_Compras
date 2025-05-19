// Importa a função de criação do client Supabase via CDN
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

// Cria o client com a URL e a chave fornecidas
export const supabase = createClient(
  'https://ftsvfhukpviilrwwaiab.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ0c3ZmaHVrcHZpaWxyd3dhaWFiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY1MzU2NjAsImV4cCI6MjA2MjExMTY2MH0.I8STwlkSYfLLPQYGHNn2G0NUO4Expe9pBRuBmbka9vM
'
)