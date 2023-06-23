import request from 'supertest';
import app from '../../../app';

describe('GET em /api/produtos', () => {
  it('Deve retornar todos os produtos', async () => {
    await request(app)
      .get('/api/produtos')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200);
  });
});

let responseId;

describe('POST em /api/admin/produtos', () => {
  it('Deve inserir o produto', async () => {
    const testBody = {
      nome: 'Dell Aspirion 10',
      slug: 'notebook-dell',
      preco: 3000.98,
      quantidade: 2,
      categoria: '64790620c003a8aab9ae379a',
      descricao: 'Famoso notebook para se jogar os mais variados jogos',
    };
    const response = await request(app)
      .post('/api/admin/produtos')
      .send(testBody)
      .expect('Content-Type', /json/)
      .expect(201);

    const { _id } = response.body;

    responseId = _id;
  });
});

describe('GET em /api/produtos/id', () => {
  it('Deve retornar o produto pelo Id', async () => {
    const response = await request(app)
      .get(`/api/produtos/${responseId}`)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200);

    const { _id } = response.body;

    expect(typeof _id).toBe('string');
  });
});

describe('PUT em /api/admin/produtos/id', () => {
  it('Deve atualizar o produto pelo id', async () => {
    await request(app)
      .put(`/api/admin/produtos/${responseId}`)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200);
  });
});

describe('DELETE em /api/admin/produtos/id', () => {
  it('Deve deletar o produto', async () => {
    await request(app)
      .delete(`/api/admin/produtos/${responseId}`)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200);
  });
});
