import swaggerUi from 'swagger-ui-express';
import fs from 'fs';
import YAML from 'yaml';

const file = fs.readFileSync('./swagger/ecomm.yml', 'utf8');
const swaggerDocument = YAML.parse(file);

const swaggerRoutes = {
  url: '/api-docs',
  nxt: swaggerUi.serve,
  functionExecutable: swaggerUi.setup(swaggerDocument),
};

export default swaggerRoutes;
