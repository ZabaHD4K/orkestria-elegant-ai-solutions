const express = require('express');
const cors = require('cors');
const OpenAI = require('openai');
const fs = require('fs');
const path = require('path');
// Cargar variables de entorno desde .env
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Configurar OpenAI usando la API key desde entorno
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

if (!process.env.OPENAI_API_KEY) {
  console.warn('AVISO: OPENAI_API_KEY no está definida. Rellena backend/.env o exporta la variable.');
}

// Cargar contexto desde archivo `context.txt` (si existe)
let CONTEXT = 'Eres un asistente experto de OrkestrIA.';
try {
  const ctxPath = path.join(__dirname, 'context.txt');
  if (fs.existsSync(ctxPath)) {
    CONTEXT = fs.readFileSync(ctxPath, 'utf8').trim();
  }
} catch (e) {
  console.error('No se pudo leer context.txt:', e.message);
}

console.log('Contexto cargado:', CONTEXT);

// Modelo más económico de GPT-4
const MODEL = 'gpt-4o-mini';

// Middleware
app.use(cors());
app.use(express.json());

// Ruta de prueba
app.get('/', (req, res) => {
  res.json({ message: 'Backend de OrkestrIA funcionando' });
});

// Endpoint para listar modelos disponibles
app.get('/api/models', async (req, res) => {
  try {
    console.log('Listando modelos disponibles...');
    const models = await openai.models.list();
    console.log('Modelos:', models.data);
    res.json({ 
      models: models.data,
      count: models.data.length,
      current: MODEL
    });
  } catch (error) {
    console.error('Error listando modelos:', error);
    res.status(500).json({ 
      error: error.message 
    });
  }
});

// Endpoint para el asistente
app.post('/api/asistente', async (req, res) => {
  console.log('Solicitud recibida:', req.body);
  
  try {
    const { companyInfo, message } = req.body;
    const userText = message || companyInfo || 'Hola';
    
    console.log('Enviando a OpenAI:', userText);
    
    // Enviar a OpenAI
    const completion = await openai.chat.completions.create({
      model: MODEL,
      messages: [
        {
          role: 'system',
          content: CONTEXT
        },
        {
          role: 'user',
          content: userText
        }
      ],
      temperature: 0.7,
      max_tokens: 1000
    });
    
    const text = completion.choices[0].message.content;
    
    console.log('Respuesta de OpenAI:', text);
    
    res.json({ 
      status: 'ok',
      message: text,
      model: MODEL
    });
  } catch (error) {
    console.error('Error de OpenAI:', error.message);
    res.status(500).json({ 
      status: 'error',
      message: `Error al conectar con la IA: ${error.message}`
    });
  }
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
