import request from 'supertest';
import app from '../../../app';

let server;
beforeEach(() => {
  const port = 3000;
  server = app.listen(port);
});

afterEach(() => {
  server.close();
});

describe('GET em /api/categories', () => {
  it('Deve retornar todas as categorias', async () => {
    await request(app)
      .get('/api/categories')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200);
  });
});

let responseId;

describe('POST em /api/admin/categories', () => {
  it('Deve inserir a categoria', async () => {
    const testBody = {
      nome: 'Teste jest',
      status: 'INATIVA',
    };
    const response = await request(app)
      .post('/api/admin/categories')
      .send(testBody)
      .expect('Content-Type', /json/)
      .expect(201);

    const { _id } = response.body;

    responseId = _id;
  });
});

describe('GET em /api/categories/id', () => {
  it('Deve retornar a categoria pelo Id', async () => {
    const response = await request(app)
      .get(`/api/categories/${responseId}`)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200);

    const { _id } = response.body;

    expect(typeof _id).toBe('string');
  });
});

describe('PATCH em /api/categories/id', () => {
  it('Deve ativar a categoria pelo Id', async () => {
    await request(app)
      .patch(`/api/categories/${responseId}`)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200);
  });
});

describe('PUT em /api/admin/categories/id', () => {
  it('Deve atualizar a categoria pelo id', async () => {
    await request(app)
      .put(`/api/admin/categories/${responseId}`)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200);
  });
});

describe('DELETE em /api/admin/categories/id', () => {
  it('Deve deletar categoria', async () => {
    const testBody = {
      nome: 'Teste jest 5',
      status: 'INATIVA',
    };
    await request(app)
      .delete(`/api/admin/categories/${responseId}`)
      .set('Accept', 'application/json')
      .send(testBody)
      .expect('Content-Type', /json/)
      .expect(200);
  });
});
