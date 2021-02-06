import app from '../server';
import testServer from 'supertest';

describe('Test our planCount route', () => {

  test('/api/planCount should return billing plan count', async () => {
    // agent helps tie multiple requests to the same server/session
    const agent = testServer.agent(app);
    // Must login first
    const loginResponse = await agent
      .post('/api/user/login')
      .send({ username: process.env.USERNAME, password: process.env.TEST_PASSWORD });
    expect(loginResponse.status).toBe(200);

    const userResponse = await agent.get('/api/user/');
    expect(userResponse.status).toBe(200);

    const dataResponse = await testServer(app).get('/api/planCount');
    expect(dataResponse.body[0].count).toBeGreaterThanOrEqual(1);
    expect(dataResponse.body[1].count).toBeGreaterThanOrEqual(1);
    expect(dataResponse.body[2].count).toBeGreaterThanOrEqual(1);
    expect(dataResponse.body[3].count).toBeGreaterThanOrEqual(1);
  });
});