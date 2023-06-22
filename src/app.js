import express from 'express';
import cors from 'cors';
import db from '../mongo/dbConfig.js';
import routes from './routes/index.js';

db.on('error', console.log.bind(console, 'Erro de conexão'));
db.once('open', () => {
  console.log('A conexão ao banco de dados foi um sucesso');
});

const app = express();

app.use(cors());
app.use(express.json());

routes(app);

export default app;
