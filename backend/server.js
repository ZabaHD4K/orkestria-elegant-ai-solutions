const express = require('express');
const cors = require('cors');
const OpenAI = require('openai');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

// Configurar OpenAI
const openai = new OpenAI({
  apiKey: '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'
});

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
