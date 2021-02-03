import app from '../server';
import testServer from 'supertest';

describe('Test our data routes', () => {
  test('/totalactions should return status 200', async () => {
    const response = await testServer(app).get('/api/data/totalactions');
    expect(response.status).toBe(200);
  });
});
