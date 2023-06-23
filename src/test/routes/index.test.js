import request from 'supertest';

import app from '../../app.js';

describe('GET em /', () => {
  it('Deve retornar titulo do projeto', async () => {
    await request(app)
      .get('/')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200);
  });
});
