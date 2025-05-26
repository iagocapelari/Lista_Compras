// Importa a função de criação do client Supabase via CDN
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

// Cria o client com a URL e a chave fornecidas
export const supabase = createClient(
  'https://rhtcddvlnecbamypmfep.supabase.co',
 
   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJodGNkZHZsbmVjYmFteXBtZmVwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY1MzU2NDUsImV4cCI6MjA2MjExMTY0NX0.jlyg9dx-zcdiCXOrIJbm1UwbxNR36eV9dKZkiEsb9fQ'
)