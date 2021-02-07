import app from '../server';
import testServer from 'supertest';

describe('Test our planCount route', () => {
  test('/api/planCount should return billing plan count', async () => {
    // agent helps tie multiple requests to the same server/session
    const agent = testServer.agent(app);
    // Must login first
    const loginResponse = await agent
      .post('/api/user/login')
      .send({
        username: process.env.TEST_USER,
        password: process.env.TEST_PASSWORD,
      });
    expect(loginResponse.status).toBe(200);

    const userResponse = await agent.get('/api/user/');
    expect(userResponse.status).toBe(200);

    const dataResponse = await testServer(app).get('/api/planCount');
    dataResponse.body._id === 'Enterprise' && (expect(dataResponse.body._id.count).toBeGreaterThanOrEqual(1));
    dataResponse.body._id === 'Premium' && (expect(dataResponse.body._id.count).toBeGreaterThanOrEqual(1));
    dataResponse.body._id === 'Trial' && (expect(dataResponse.body._id.count).toBeGreaterThanOrEqual(1));
    dataResponse.body._id === 'Pro' && (expect(dataResponse.body._id.count).toBeGreaterThanOrEqual(1));
  });
});
